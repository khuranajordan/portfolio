import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/theme-context";

interface PhilosophyCubesProps {
  progress: number; // 0.0 to 1.0
}

export function PhilosophyCubes({ progress }: PhilosophyCubesProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const initialIsDark = themeRef.current === "dark";
    scene.fog = new THREE.FogExp2(initialIsDark ? 0x0c0d0f : 0xfaf9f6, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Architectural Lighting
    const ambientLight = new THREE.AmbientLight(
      initialIsDark ? 0x1e293b : 0xffffff,
      initialIsDark ? 0.6 : 0.85
    );
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(
      initialIsDark ? 0xa5b4fc : 0xfffbf5,
      initialIsDark ? 2.2 : 2.0
    );
    keyLight.position.set(6, 10, 8);
    scene.add(keyLight);

    const shadowLight = new THREE.DirectionalLight(
      initialIsDark ? 0x334155 : 0xd4d4d8,
      1.2
    );
    shadowLight.position.set(-6, -4, 4);
    scene.add(shadowLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, initialIsDark ? 3.5 : 1.0);
    rimLight.position.set(0, -8, -6);
    scene.add(rimLight);

    // Group of Modular Architectural Cubes
    const group = new THREE.Group();
    scene.add(group);

    // Materials: Adapts dynamically between Warm Alabaster and Obsidian Titanium
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: initialIsDark ? 0x181a22 : 0xeeece8,
      roughness: initialIsDark ? 0.25 : 0.35,
      metalness: initialIsDark ? 0.5 : 0.15,
    });

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: initialIsDark ? 0x60a5fa : 0x27272a,
      transparent: true,
      opacity: initialIsDark ? 0.8 : 0.45,
    });

    // Create a 2x2x2 cluster of precision beveled blocks
    const cubeSize = 1.05;
    const cubes: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      explodedPos: THREE.Vector3;
      scalePos: THREE.Vector3;
    }[] = [];

    const offsets = [-0.65, 0.65];

    offsets.forEach((x, i) => {
      offsets.forEach((y, j) => {
        offsets.forEach((z, k) => {
          const geom = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          const mesh = new THREE.Mesh(geom, cubeMaterial);

          // Add wireframe edge outline for that architectural drafting feel
          const edges = new THREE.EdgesGeometry(geom);
          const line = new THREE.LineSegments(edges, edgeMaterial);
          mesh.add(line);

          // Position definitions for the 3 states
          // State 1: Tight monolithic block
          const basePos = new THREE.Vector3(x, y, z);

          // State 2: Exploded assembly along isometric vectors
          const explodedPos = new THREE.Vector3(x * 2.6, y * 2.6, z * 2.6);

          // State 3: Distributed orbital ring / equilibrium
          const angle = ((i * 4 + j * 2 + k) / 8) * Math.PI * 2;
          const radius = 2.4;
          const scalePos = new THREE.Vector3(
            Math.cos(angle) * radius,
            (k - 0.5) * 1.5,
            Math.sin(angle) * radius
          );

          mesh.position.copy(basePos);
          group.add(mesh);

          cubes.push({ mesh, basePos, explodedPos, scalePos });
        });
      });
    });

    // Mouse tracking for subtle parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = normX * 0.45;
      targetRotationX = -normY * 0.35;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Target colors for smooth theme transitions
    const targetFogColor = new THREE.Color();
    const targetCubeColor = new THREE.Color();
    const targetEdgeColor = new THREE.Color();

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const p = progressRef.current; // 0.0 to 1.0
      const isDark = themeRef.current === "dark";

      // Smoothly interpolate theme colors & lighting
      targetFogColor.setHex(isDark ? 0x0c0d0f : 0xfaf9f6);
      targetCubeColor.setHex(isDark ? 0x181a22 : 0xeeece8);
      targetEdgeColor.setHex(isDark ? 0x60a5fa : 0x27272a);

      if (scene.fog) {
        scene.fog.color.lerp(targetFogColor, 0.05);
      }
      cubeMaterial.color.lerp(targetCubeColor, 0.05);
      edgeMaterial.color.lerp(targetEdgeColor, 0.05);

      cubeMaterial.roughness = THREE.MathUtils.lerp(cubeMaterial.roughness, isDark ? 0.25 : 0.35, 0.05);
      cubeMaterial.metalness = THREE.MathUtils.lerp(cubeMaterial.metalness, isDark ? 0.55 : 0.15, 0.05);
      edgeMaterial.opacity = THREE.MathUtils.lerp(edgeMaterial.opacity, isDark ? 0.85 : 0.45, 0.05);

      ambientLight.intensity = THREE.MathUtils.lerp(ambientLight.intensity, isDark ? 0.6 : 0.85, 0.05);
      keyLight.intensity = THREE.MathUtils.lerp(keyLight.intensity, isDark ? 2.4 : 2.0, 0.05);
      rimLight.intensity = THREE.MathUtils.lerp(rimLight.intensity, isDark ? 3.5 : 1.0, 0.05);

      // Base continuous rotation
      group.rotation.y += 0.003;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;

      // Interpolate cube positions based on scroll progress
      cubes.forEach((cube, index) => {
        let target = new THREE.Vector3();

        if (p <= 0.4) {
          // Phase 1: Solid Monolith transitioning into Exploded Assembly
          const factor = THREE.MathUtils.smoothstep(p, 0.05, 0.4);
          target.lerpVectors(cube.basePos, cube.explodedPos, factor);
          cube.mesh.rotation.x = factor * (index % 2 === 0 ? 0.4 : -0.4);
          cube.mesh.rotation.y = factor * (index % 3 === 0 ? 0.5 : -0.5);
        } else if (p <= 0.75) {
          // Phase 2: Exploded Assembly transitioning into Distributed Orbit
          const factor = THREE.MathUtils.smoothstep(p, 0.4, 0.75);
          target.lerpVectors(cube.explodedPos, cube.scalePos, factor);
          cube.mesh.rotation.x = (1 - factor) * 0.4 + factor * Math.sin(elapsedTime + index);
          cube.mesh.rotation.y = (1 - factor) * 0.5 + factor * Math.cos(elapsedTime + index);
        } else {
          // Phase 3: Distributed Equilibrium with subtle floating wave
          const wave = Math.sin(elapsedTime * 1.5 + index * 0.8) * 0.12;
          target.copy(cube.scalePos).add(new THREE.Vector3(0, wave, 0));
          cube.mesh.rotation.y += 0.01;
        }

        cube.mesh.position.lerp(target, 0.08);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      cubeMaterial.dispose();
      edgeMaterial.dispose();
      cubes.forEach((c) => c.mesh.geometry.dispose());
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full relative" />;
}
