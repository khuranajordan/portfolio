import { useEffect, useRef } from "react";
import * as THREE from "three";

interface PhilosophyCubesProps {
  progress: number; // 0.0 to 1.0
}

export function PhilosophyCubes({ progress }: PhilosophyCubesProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer with light architectural background
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfaf9f6, 0.035);

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

    // Architectural Lighting for light stone aesthetic
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffbf5, 2.0);
    keyLight.position.set(6, 10, 8);
    scene.add(keyLight);

    const shadowLight = new THREE.DirectionalLight(0xd4d4d8, 1.2);
    shadowLight.position.set(-6, -4, 4);
    scene.add(shadowLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.0); // Subtle soft accent
    rimLight.position.set(0, -8, -6);
    scene.add(rimLight);

    // Group of Modular Architectural Cubes
    const group = new THREE.Group();
    scene.add(group);

    // Materials: Architectural Matte Alabaster / Chalk Stone with crisp dark edges
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeece8,
      roughness: 0.35,
      metalness: 0.15,
    });

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x27272a,
      transparent: true,
      opacity: 0.45,
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
          const mesh = new THREE.Mesh(geom, cubeMaterial.clone());

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

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const p = progressRef.current; // 0.0 to 1.0

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
