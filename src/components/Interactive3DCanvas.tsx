import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Eye, Layers } from 'lucide-react';

interface Interactive3DCanvasProps {
  className?: string;
}

export const Interactive3DCanvas: React.FC<Interactive3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeGeometry, setActiveGeometry] = useState<'neural' | 'tensor' | 'lattice'>('neural');
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Store references across renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const nodesRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const outerRingRef = useRef<THREE.Mesh | null>(null);
  const reqIdRef = useRef<number | null>(null);

  // Re-build geometry when activeGeometry changes
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    groupRef.current = rootGroup;
    scene.add(rootGroup);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 4, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLightCyan.position.set(-5, -5, -2);
    scene.add(pointLightCyan);

    // 1. Core Geometry depending on mode
    if (activeGeometry === 'neural') {
      // Neural Network Graph: Layered nodes and connecting synapses
      const nodeCount = 54;
      const nodePositions: number[] = [];
      const nodeColors: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        // Spherical distribution with clustered neural hubs
        const radius = 1.8 + (Math.random() - 0.5) * 0.8;
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = 2 * Math.PI * Math.random();

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        nodePositions.push(x, y, z);

        // Gradient colors: electric blue to cyan to violet
        const color = new THREE.Color();
        if (i % 3 === 0) {
          color.setHex(0x3b82f6); // blue-500
        } else if (i % 3 === 1) {
          color.setHex(0x06b6d4); // cyan-500
        } else {
          color.setHex(0x818cf8); // indigo-400
        }
        nodeColors.push(color.r, color.g, color.b);
      }

      // Synaptic connections between close nodes
      const linePositions: number[] = [];
      const lineColors: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodePositions[i * 3] - nodePositions[j * 3];
          const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
          const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 1.35) {
            linePositions.push(
              nodePositions[i * 3],
              nodePositions[i * 3 + 1],
              nodePositions[i * 3 + 2],
              nodePositions[j * 3],
              nodePositions[j * 3 + 1],
              nodePositions[j * 3 + 2]
            );

            lineColors.push(0.23, 0.51, 0.96, 0.23, 0.51, 0.96);
          }
        }
      }

      // Line segments
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

      const lineMat = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      linesRef.current = lines;
      rootGroup.add(lines);

      // Points (Neurons)
      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
      pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(nodeColors, 3));

      const pointsMat = new THREE.PointsMaterial({
        size: 0.14,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(pointsGeo, pointsMat);
      nodesRef.current = points;
      rootGroup.add(points);

      // Inner pulsating nucleus
      const coreGeo = new THREE.IcosahedronGeometry(0.85, 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x1e3a8a,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
        roughness: 0.3,
        metalness: 0.8,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreMeshRef.current = coreMesh;
      rootGroup.add(coreMesh);

      // Outer delicate orbital ring
      const ringGeo = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.3,
      });
      const outerRing = new THREE.Mesh(ringGeo, ringMat);
      outerRing.rotation.x = Math.PI / 3;
      outerRingRef.current = outerRing;
      rootGroup.add(outerRing);
    } else if (activeGeometry === 'tensor') {
      // Quantum Tensor Sphere & Geodesic Manifold
      const sphereGeo = new THREE.IcosahedronGeometry(1.7, 3);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
        roughness: 0.2,
        metalness: 0.9,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      coreMeshRef.current = sphereMesh;
      rootGroup.add(sphereMesh);

      // Dual Orbits
      const orbit1Geo = new THREE.TorusGeometry(2.4, 0.02, 16, 120);
      const orbit1Mat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
      });
      const orbit1 = new THREE.Mesh(orbit1Geo, orbit1Mat);
      orbit1.rotation.x = Math.PI / 4;
      outerRingRef.current = orbit1;
      rootGroup.add(orbit1);

      const orbit2Geo = new THREE.TorusGeometry(2.1, 0.015, 16, 120);
      const orbit2Mat = new THREE.MeshBasicMaterial({
        color: 0x818cf8,
        transparent: true,
        opacity: 0.35,
      });
      const orbit2 = new THREE.Mesh(orbit2Geo, orbit2Mat);
      orbit2.rotation.y = Math.PI / 3;
      rootGroup.add(orbit2);

      // Floating tensor vertex markers
      const vPositions = sphereGeo.attributes.position.array;
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.Float32BufferAttribute(vPositions, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.08,
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.85,
      });
      const pMesh = new THREE.Points(pGeo, pMat);
      nodesRef.current = pMesh;
      rootGroup.add(pMesh);
    } else {
      // Bio-Signal Waveform & Continuous Manifold (Torus Knot)
      const knotGeo = new THREE.TorusKnotGeometry(1.3, 0.38, 128, 20, 2, 3);
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
        roughness: 0.3,
        metalness: 0.85,
      });
      const knotMesh = new THREE.Mesh(knotGeo, knotMat);
      coreMeshRef.current = knotMesh;
      rootGroup.add(knotMesh);

      // Particle halo
      const particleCount = 200;
      const pCoords: number[] = [];
      for (let i = 0; i < particleCount; i++) {
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        const rad = 2.2 + (Math.random() - 0.5) * 0.6;
        pCoords.push(
          rad * Math.cos(u) * Math.sin(v),
          rad * Math.sin(u) * Math.sin(v),
          rad * Math.cos(v)
        );
      }
      const haloGeo = new THREE.BufferGeometry();
      haloGeo.setAttribute('position', new THREE.Float32BufferAttribute(pCoords, 3));
      const haloMat = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.6,
      });
      const halo = new THREE.Points(haloGeo, haloMat);
      nodesRef.current = halo;
      rootGroup.add(halo);
    }

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor lerp interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      if (rootGroup) {
        // Base autonomous rotation + cursor interaction influence
        rootGroup.rotation.y = elapsedTime * 0.18 + mouse.x * 1.3;
        rootGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.15 - mouse.y * 1.1;

        // Dynamic breathing scale
        const scalePulse = 1 + Math.sin(elapsedTime * 1.5) * 0.025;
        rootGroup.scale.set(scalePulse, scalePulse, scalePulse);
      }

      if (coreMeshRef.current) {
        coreMeshRef.current.rotation.y = -elapsedTime * 0.28;
        coreMeshRef.current.rotation.z = Math.cos(elapsedTime * 0.2) * 0.2;
      }

      if (outerRingRef.current) {
        outerRingRef.current.rotation.z = elapsedTime * 0.22;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      renderer.dispose();
      if (container) container.innerHTML = '';
    };
  }, [activeGeometry]);

  // Global & Container Cursor Tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
    setCursorPos({ x: Math.round(x * 100), y: Math.round(y * 100) });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
  };

  return (
    <div
      className={`relative w-full h-full min-h-[420px] rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md overflow-hidden flex flex-col justify-between group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Subtle top HUD / Mode Bar */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-white flex items-center gap-1.5 font-display">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            3D Spatial AI Matrix
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-[11px] font-mono text-slate-400">
            Interactive WebGL
          </span>
        </div>

        {/* Dynamic cursor coordinate HUD */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-950/70 border border-slate-800/80 px-2.5 py-1 rounded-md backdrop-blur">
          <span className="text-blue-400">θ.x: {cursorPos.x}</span>
          <span>·</span>
          <span className="text-cyan-400">θ.y: {cursorPos.y}</span>
        </div>
      </div>

      {/* Middle Center Helper when idle */}
      <div className="relative z-10 pointer-events-none self-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[11px] font-mono text-blue-300 bg-slate-950/80 border border-blue-500/40 px-3 py-1 rounded-full backdrop-blur shadow-lg">
          Move cursor to orbit 3D topology
        </span>
      </div>

      {/* Bottom Control Bar: Switch Geometry Modes */}
      <div className="relative z-10 p-4 sm:p-5 pointer-events-auto border-t border-slate-800/60 bg-gradient-to-t from-slate-950/90 to-transparent">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur">
            <button
              onClick={() => setActiveGeometry('neural')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded transition-all whitespace-nowrap ${
                activeGeometry === 'neural'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Neural Graph
            </button>
            <button
              onClick={() => setActiveGeometry('tensor')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded transition-all whitespace-nowrap ${
                activeGeometry === 'tensor'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tensor Sphere
            </button>
            <button
              onClick={() => setActiveGeometry('lattice')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded transition-all whitespace-nowrap ${
                activeGeometry === 'lattice'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bio-Manifold
            </button>
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            {activeGeometry === 'neural'
              ? '54 Neurons · Synaptic Flow'
              : activeGeometry === 'tensor'
              ? 'Geodesic Tensor · Dual Rings'
              : 'Torus Knot · Physiological Signal'}
          </div>
        </div>
      </div>
    </div>
  );
};
