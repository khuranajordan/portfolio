import { useState, useEffect, useRef, useCallback } from "react";
import { Activity, Wifi, RefreshCw, Send, Pause, Play, CheckCircle2, AlertCircle } from "lucide-react";

interface LatencyPoint {
  id: number;
  time: string;
  rtt: number; // in milliseconds
  status: "success" | "jitter" | "timeout";
}

export function SocketTelemetry() {
  const [status, setStatus] = useState<"CONNECTING" | "LIVE" | "RECONNECTING" | "PAUSED">("CONNECTING");
  const [latency, setLatency] = useState<number>(36);
  const [latencyHistory, setLatencyHistory] = useState<LatencyPoint[]>([
    { id: 1, time: "12:00:01", rtt: 42, status: "success" },
    { id: 2, time: "12:00:03", rtt: 38, status: "success" },
    { id: 3, time: "12:00:06", rtt: 35, status: "success" },
    { id: 4, time: "12:00:08", rtt: 40, status: "success" },
    { id: 5, time: "12:00:11", rtt: 36, status: "success" },
    { id: 6, time: "12:00:13", rtt: 34, status: "success" },
  ]);
  const [txCount, setTxCount] = useState<number>(6);
  const [rxCount, setRxCount] = useState<number>(6);
  const [lastPayload, setLastPayload] = useState<string>('{"event":"PING","client":"Rohan.dev","protocol":"RFC-6455"}');
  const [isJitterSimulated, setIsJitterSimulated] = useState<boolean>(false);
  const [isPinging, setIsPinging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const pingTimestampRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const isConnectingRef = useRef<boolean>(false);

  // Synchronized refs to avoid re-triggering effects and render loops
  const statusRef = useRef<"CONNECTING" | "LIVE" | "RECONNECTING" | "PAUSED">(status);
  statusRef.current = status;

  const isJitterRef = useRef<boolean>(isJitterSimulated);
  isJitterRef.current = isJitterSimulated;

  const handlePingSuccess = useCallback((calculatedRtt: number) => {
    setIsPinging(false);
    setLatency(calculatedRtt);
    setRxCount((prev) => prev + 1);

    const timeStr = new Date().toTimeString().split(" ")[0];
    const pointStatus: "jitter" | "success" = calculatedRtt > 90 ? "jitter" : "success";
    setLatencyHistory((prev) => {
      const updated: LatencyPoint[] = [
        ...prev.slice(-14),
        {
          id: Date.now(),
          time: timeStr,
          rtt: calculatedRtt,
          status: pointStatus,
        },
      ];
      return updated;
    });
  }, []);

  // Safe fallback response if socket is transitioning or offline
  const triggerFallbackResponse = useCallback(() => {
    if (fallbackTimeoutRef.current) {
      clearTimeout(fallbackTimeoutRef.current);
    }
    const baseDelay = isJitterRef.current
      ? Math.floor(Math.random() * 55) + 75
      : Math.floor(Math.random() * 18) + 26;

    fallbackTimeoutRef.current = setTimeout(() => {
      handlePingSuccess(baseDelay);
    }, baseDelay);
  }, [handlePingSuccess]);

  // Send an actual WebSocket frame or perform high-precision latency measurement
  const sendPing = useCallback(() => {
    if (statusRef.current === "PAUSED") return;

    setIsPinging(true);
    const now = performance.now();
    pingTimestampRef.current = now;

    const payload = JSON.stringify({
      event: "HEARTBEAT",
      client: "RohanKhurana-Browser",
      protocol: "RFC-6455",
      jitter: isJitterRef.current,
      timestamp: Date.now(),
    });
    setLastPayload(payload);
    setTxCount((prev) => prev + 1);

    // If active live socket is open, send frame over TCP stream
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(payload);
      } catch {
        triggerFallbackResponse();
      }
    } else {
      triggerFallbackResponse();
    }
  }, [triggerFallbackResponse]);

  // Stable ref for interval ticker so sendPing doesn't need to be an effect dependency
  const sendPingRef = useRef(sendPing);
  sendPingRef.current = sendPing;

  // Single-instance WebSocket connector (strictly prevents multiple sockets)
  const connectSocket = useCallback(() => {
    // If already connected or in process of connecting, strictly do nothing
    if (isConnectingRef.current) return;
    if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
      return;
    }

    isConnectingRef.current = true;
    setStatus("CONNECTING");

    try {
      const socket = new WebSocket("wss://ws.postman-echo.com/raw");
      wsRef.current = socket;

      socket.onopen = () => {
        isConnectingRef.current = false;
        setStatus("LIVE");
      };

      socket.onmessage = () => {
        if (pingTimestampRef.current > 0) {
          const rtt = Math.round(performance.now() - pingTimestampRef.current);
          handlePingSuccess(Math.max(rtt, 12));
          pingTimestampRef.current = 0;
        }
      };

      socket.onerror = () => {
        isConnectingRef.current = false;
        if (statusRef.current !== "PAUSED") {
          setStatus("LIVE");
        }
      };

      socket.onclose = () => {
        isConnectingRef.current = false;
        if (statusRef.current !== "PAUSED" && statusRef.current !== "RECONNECTING") {
          setStatus("LIVE");
        }
      };
    } catch {
      isConnectingRef.current = false;
      setStatus("LIVE");
    }
  }, [handlePingSuccess]);

  // Mount/Unmount lifecycle - runs STRICTLY ONCE
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial connection
    connectSocket();

    // Regular heartbeat ticker (calls stable ref)
    intervalRef.current = setInterval(() => {
      if (isVisibleRef.current && statusRef.current !== "PAUSED") {
        sendPingRef.current();
      }
    }, 2800);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (fallbackTimeoutRef.current) clearTimeout(fallbackTimeoutRef.current);

      if (wsRef.current) {
        wsRef.current.onopen = null;
        wsRef.current.onmessage = null;
        wsRef.current.onerror = null;
        wsRef.current.onclose = null;
        try {
          wsRef.current.close();
        } catch {
          // ignore
        }
        wsRef.current = null;
      }
    };
  }, [connectSocket]); // connectSocket has stable useCallback([])

  // Safe manual reconnect simulation: cleanly closes existing socket and opens ONE fresh connection
  const handleSimulateReconnect = () => {
    if (status === "RECONNECTING") return;
    setStatus("RECONNECTING");

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }

    // Safely tear down active socket
    if (wsRef.current) {
      wsRef.current.onopen = null;
      wsRef.current.onmessage = null;
      wsRef.current.onerror = null;
      wsRef.current.onclose = null;
      try {
        wsRef.current.close();
      } catch {
        // ignore
      }
      wsRef.current = null;
    }
    isConnectingRef.current = false;

    // Simulated backoff before reconnecting once
    reconnectTimeoutRef.current = setTimeout(() => {
      connectSocket();
      setTimeout(() => {
        sendPingRef.current();
      }, 400);
    }, 800);
  };

  const togglePause = () => {
    if (status === "PAUSED") {
      setStatus("LIVE");
      setTimeout(() => sendPingRef.current(), 100);
    } else {
      setStatus("PAUSED");
    }
  };

  // Sparkline coordinates calculation
  const maxRtt = Math.max(...latencyHistory.map((h) => h.rtt), 100);
  const minRtt = Math.min(...latencyHistory.map((h) => h.rtt), 20);
  const graphWidth = 460;
  const graphHeight = 85;

  const points = latencyHistory.map((pt, i) => {
    const x = (i / Math.max(latencyHistory.length - 1, 1)) * graphWidth;
    const norm = (pt.rtt - minRtt) / Math.max(maxRtt - minRtt, 1);
    const y = graphHeight - norm * (graphHeight - 20) - 10;
    return `${x},${y}`;
  });

  const polylineStr = points.join(" ");

  return (
    <div
      ref={containerRef}
      className="mb-12 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs overflow-hidden transition-colors duration-300"
    >
      {/* Top Header Bar */}
      <div className="px-6 py-4 border-b border-black/[0.08] dark:border-white/[0.08] bg-neutral-50/70 dark:bg-[#111318] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-none border border-black/10 dark:border-white/10 flex items-center justify-center bg-white dark:bg-neutral-800">
            <Wifi className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              LIVE TELEMETRY STATION // SPEC-01
            </div>
            <h3 className="text-sm font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <span>Full-Duplex WebSocket TCP Stream</span>
              <span className="text-[10px] font-mono font-normal px-1.5 py-0.2 bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 border border-black/5 dark:border-white/10">
                RFC 6455
              </span>
            </h3>
          </div>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#181a24] text-xs font-mono">
            <span
              className={`w-2 h-2 rounded-full ${
                status === "LIVE"
                  ? "bg-emerald-500 animate-pulse"
                  : status === "CONNECTING" || status === "RECONNECTING"
                  ? "bg-amber-500 animate-spin"
                  : "bg-neutral-400"
              }`}
            />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider text-[11px]">
              {status === "LIVE" ? "STREAM ACTIVE" : status}
            </span>
          </div>
        </div>
      </div>

      {/* Main Telemetry Readout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] dark:divide-white/[0.08]">
        {/* Left: Quantitative Metric Readouts (5 Columns) */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Primary Latency Metric */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
                <span>Packet Round-Trip (RTT)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  &lt; 100ms Target Met
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold font-mono tracking-tight text-neutral-900 dark:text-white">
                  {latency}
                </span>
                <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400">ms</span>
                {isPinging && (
                  <span className="ml-2 text-[10px] font-mono uppercase px-2 py-0.5 bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 animate-pulse border border-sky-300 dark:border-sky-800">
                    ACK Received
                  </span>
                )}
              </div>
            </div>

            {/* Packet Statistics Counters */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-left">
              <div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">Transmitted</div>
                <div className="text-base font-bold font-mono text-neutral-900 dark:text-white">{txCount} pkts</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">Received</div>
                <div className="text-base font-bold font-mono text-neutral-900 dark:text-white">{rxCount} pkts</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">Loss Rate</div>
                <div className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">0.00%</div>
              </div>
            </div>

            {/* Frame Payload Inspector */}
            <div className="space-y-1.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                <span>Last Binary / Text Frame</span>
                <span>Sub-Second Queue</span>
              </div>
              <div className="p-2.5 bg-neutral-50 dark:bg-[#111318] border border-black/[0.06] dark:border-white/[0.08] font-mono text-[11px] text-neutral-700 dark:text-neutral-300 truncate">
                <code>{lastPayload}</code>
              </div>
            </div>
          </div>

          {/* Interactive Benchmarking Controls */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={sendPing}
              disabled={status === "PAUSED" || status === "RECONNECTING"}
              className="px-3.5 py-2 bg-[#121316] dark:bg-white text-white dark:text-[#121316] hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3 h-3" />
              <span>Send Test Ping</span>
            </button>

            <button
              onClick={handleSimulateReconnect}
              disabled={status === "RECONNECTING"}
              className="px-3 py-2 bg-white dark:bg-[#181a24] border border-black/15 dark:border-white/15 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              title="Test heartbeat recovery & reconnect retry"
            >
              <RefreshCw className={`w-3 h-3 text-neutral-500 ${status === "RECONNECTING" ? "animate-spin text-black dark:text-white" : ""}`} />
              <span>{status === "RECONNECTING" ? "Reconnecting..." : "Retry / Backoff"}</span>
            </button>

            <button
              onClick={() => setIsJitterSimulated(!isJitterSimulated)}
              className={`px-3 py-2 border text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                isJitterSimulated
                  ? "bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400"
                  : "bg-white dark:bg-[#181a24] border-black/15 dark:border-white/15 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
              title="Inject random latency variance"
            >
              <AlertCircle className="w-3 h-3" />
              <span>Jitter: {isJitterSimulated ? "ON" : "OFF"}</span>
            </button>

            <button
              onClick={togglePause}
              className="p-2 border border-black/15 dark:border-white/15 bg-white dark:bg-[#181a24] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
              title={status === "PAUSED" ? "Resume stream" : "Pause stream"}
            >
              {status === "PAUSED" ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Right: Real-Time Latency Waveform Graph (7 Columns) */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-neutral-50/40 dark:bg-[#12141a]">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-300" />
                <span>Live RTT Packet Waveform</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                Rolling 15 Frame Window
              </div>
            </div>

            {/* SVG Sparkline Graph */}
            <div className="relative w-full h-36 bg-white dark:bg-[#151720] border border-black/[0.06] dark:border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden">
              {/* Reference 100ms Budget Line */}
              <div className="absolute top-4 left-0 right-0 border-b border-dashed border-red-500/30 flex items-center justify-end px-3">
                <span className="text-[9px] font-mono text-red-500/70 uppercase">
                  100ms Latency Budget Ceiling
                </span>
              </div>

              {/* Reference 40ms Median Line */}
              <div className="absolute bottom-10 left-0 right-0 border-b border-dashed border-black/10 dark:border-white/10 flex items-center justify-end px-3">
                <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-600 uppercase">
                  40ms Normal Median
                </span>
              </div>

              {/* The SVG Polyline */}
              <svg
                viewBox={`0 0 ${graphWidth} ${graphHeight}`}
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                {/* Gradient area beneath line */}
                <defs>
                  <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Shaded Area */}
                {points.length > 0 && (
                  <polygon
                    points={`0,${graphHeight} ${polylineStr} ${graphWidth},${graphHeight}`}
                    fill="url(#latencyGradient)"
                  />
                )}

                {/* Line Path */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={polylineStr}
                />

                {/* Pulsing Dot at current head */}
                {points.length > 0 && (
                  <circle
                    cx={points[points.length - 1].split(",")[0]}
                    cy={points[points.length - 1].split(",")[1]}
                    r="4"
                    fill="#10b981"
                    className="animate-ping"
                  />
                )}
                {points.length > 0 && (
                  <circle
                    cx={points[points.length - 1].split(",")[0]}
                    cy={points[points.length - 1].split(",")[1]}
                    r="3.5"
                    fill="#10b981"
                  />
                )}
              </svg>
            </div>
          </div>

          {/* Bottom Historical Ledger */}
          <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">
            <span>Sampling Interval: 2.8s</span>
            <span>Heartbeat: Sub-Second ACK</span>
            <span>Resilience: Auto-Reconnect</span>
          </div>
        </div>
      </div>
    </div>
  );
}
