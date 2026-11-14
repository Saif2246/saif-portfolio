
"use client";

import { useEffect, useRef } from "react";

interface ThreeVector3 {
  x: number;
  y: number;
  z: number;
}

interface ThreeObject3D {
  rotation: ThreeVector3;
  position: ThreeVector3;
}

interface ThreeCamera {
  aspect: number;
  position: ThreeVector3;
  updateProjectionMatrix(): void;
}

interface ThreeGeometry {
  setAttribute(name: string, attribute: ThreeFloat32BufferAttribute): void;
  dispose(): void;
}

interface ThreeFloat32BufferAttribute {
  readonly itemSize: number;
}

interface ThreeMaterial {
  dispose(): void;
}

interface ThreeScene {
  add(object: unknown): void;
}

interface ThreeGroup extends ThreeObject3D {
  add(object: unknown): void;
}

interface ThreeRenderer {
  setPixelRatio(ratio: number): void;
  setSize(width: number, height: number): void;
  render(scene: ThreeScene, camera: ThreeCamera): void;
  dispose(): void;
}

interface ThreeApi {
  Scene: new () => ThreeScene;
  PerspectiveCamera: new (
    fov: number,
    aspect: number,
    near: number,
    far: number
  ) => ThreeCamera;
  WebGLRenderer: new (options: {
    canvas: HTMLCanvasElement;
    alpha: boolean;
    antialias: boolean;
    powerPreference: "low-power";
  }) => ThreeRenderer;
  Group: new () => ThreeGroup;
  BufferGeometry: new () => ThreeGeometry;
  Float32BufferAttribute: new (
    array: number[],
    itemSize: number
  ) => ThreeFloat32BufferAttribute;
  PointsMaterial: new (options: {
    color: number;
    size: number;
    transparent: boolean;
    opacity: number;
    sizeAttenuation: boolean;
  }) => ThreeMaterial;
  Points: new (
    geometry: ThreeGeometry,
    material: ThreeMaterial
  ) => unknown;
  LineBasicMaterial: new (options: {
    color: number;
    transparent: boolean;
    opacity: number;
  }) => ThreeMaterial;
  LineSegments: new (
    geometry: ThreeGeometry,
    material: ThreeMaterial
  ) => unknown;
}

type ThreeWindow = Window & {
  THREE?: ThreeApi;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: ThreeRenderer | undefined;
    let animationFrame = 0;
    let disposed = false;
    let cleanupThree: (() => void) | undefined;

    const win = window as ThreeWindow;

    const initializeThree = () => {
      if (disposed || !win.THREE || !canvas) return;

      const THREE = win.THREE;

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );

      camera.position.z = 12;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 1.5)
      );

      renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight
      );

      const network = new THREE.Group();
      scene.add(network);

      // Generate network nodes

      const nodeCount = 65;
      const positions: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        positions.push(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 9
        );
      }

      // Create glowing cyan nodes

      const nodeGeometry = new THREE.BufferGeometry();

      nodeGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      const nodeMaterial = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.075,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
      });

      const nodes = new THREE.Points(
        nodeGeometry,
        nodeMaterial
      );

      network.add(nodes);

      // Connect nearby nodes

      const connections: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];

          const distance = Math.sqrt(
            dx * dx + dy * dy + dz * dz
          );

          if (distance < 2.7) {
            connections.push(
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2],
              positions[j * 3],
              positions[j * 3 + 1],
              positions[j * 3 + 2]
            );
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(connections, 3)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.17,
      });

      const lines = new THREE.LineSegments(
        lineGeometry,
        lineMaterial
      );

      network.add(lines);

      // Mouse and scroll interaction

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let scrollPosition = 0;

      const handlePointerMove = (event: PointerEvent) => {
        targetX = (event.clientX / window.innerWidth - 0.5) * 2;
        targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleScroll = () => {
        scrollPosition = window.scrollY;
      };

      const handleResize = () => {
        if (!canvas || !renderer) return;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, 1.5)
        );
      };

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      window.addEventListener("resize", handleResize);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const renderScene = () => {
        if (disposed || !renderer) return;

        currentX += (targetX - currentX) * 0.035;
        currentY += (targetY - currentY) * 0.035;

        network.rotation.y = currentX * 0.12;
        network.rotation.x =
          currentY * 0.06 + scrollPosition * 0.000025;

        network.position.x = -currentX * 0.12;
        network.position.y = currentY * 0.08;

        renderer.render(scene, camera);

        if (!prefersReducedMotion) {
          animationFrame = requestAnimationFrame(renderScene);
        }
      };

      renderScene();

      cleanupThree = () => {
        window.removeEventListener(
          "pointermove",
          handlePointerMove
        );

        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);

        cancelAnimationFrame(animationFrame);

        nodeGeometry.dispose();
        nodeMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();

        renderer?.dispose();
      };
    };

    // Load Three.js from CDN

    const scriptId = "hero-three-js";
    let script = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;

    const handleLoad = () => {
      initializeThree();
    };

    const handleError = () => {
      console.warn("Three.js could not be loaded.");
    };

    if (win.THREE) {
      initializeThree();
    } else {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.async = true;
        document.head.appendChild(script);
      }

      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);
    }

    return () => {
      disposed = true;

      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);

      cleanupThree?.();
    };
  }, []);

  return (
    <section
      id="top"
      className="grid-background relative isolate overflow-hidden"
    >
      {/* 3D Cyber Network Background */}

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />

      {/* Background Contrast Overlay */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#07090E]/95 via-[#07090E]/75 to-[#07090E]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-transparent via-transparent to-[#07090E]/80"
      />

      {/* Hero Content */}

      <div className="container relative z-10">
        <div className="flex min-h-[calc(100vh-72px)] items-center py-20 md:py-28">
          <div className="max-w-4xl">

            {/* Availability Status */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-(--success)" />

              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-(--text-secondary)">
                Available for opportunities
              </span>
            </div>

            {/* Professional Identity */}

            <p className="mb-5 font-mono text-sm font-medium text-(--accent)">
              BS Information Technology Student
            </p>

            {/* Main Heading */}

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-(--text-primary) sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.02]">
              Engineering systems for{" "}
              <span className="text-(--accent)">
                Cloud Security
              </span>{" "}
              and GRC.
            </h1>

            {/* Introduction */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-(--text-secondary) sm:text-lg">
              I&apos;m Saif Ali, an Information Technology student
              focused on cloud security engineering, security
              operations, governance, risk, compliance, automation,
              and AI-assisted security analysis.
            </p>

            {/* Action Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="button button-primary"
              >
                Explore Projects
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className="button button-secondary"
              >
                Get in Touch
              </a>
            </div>

            {/* Responsive Security Focus Strip */}

            <div className="mt-12 border-t border-(--border) pt-6">
              <div
                className="flex max-w-full items-center gap-3 overflow-x-auto pb-2 sm:gap-4"
                style={{
                  scrollbarWidth: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <span className="shrink-0 font-mono text-xs text-(--text-muted)">
                  Focus
                </span>

                <span className="shrink-0 rounded-full border border-(--border) bg-white/3 px-3 py-1.5 text-xs text-(--text-secondary) sm:text-sm">
                  Cloud Security
                </span>

                <span className="shrink-0 rounded-full border border-(--border) bg-white/3 px-3 py-1.5 text-xs text-(--text-secondary) sm:text-sm">
                  GRC
                </span>

                <span className="shrink-0 rounded-full border border-(--border) bg-white/3 px-3 py-1.5 text-xs text-(--text-secondary) sm:text-sm">
                  Security Operations
                </span>

                <span className="shrink-0 rounded-full border border-(--border) bg-white/3 px-3 py-1.5 text-xs text-(--text-secondary) sm:text-sm">
                  AI Security
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
