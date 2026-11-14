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
  requestIdleCallback?: (
    callback: (deadline: {
      didTimeout: boolean;
      timeRemaining(): number;
    }) => void,
    options?: { timeout: number }
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;

    if (!canvas || !section) return;

    let renderer: ThreeRenderer | undefined;
    let animationFrame: number | null = null;
    let disposed = false;
    let cleanupThree: (() => void) | undefined;
    let visibilityObserver: IntersectionObserver | undefined;
    let idleCallbackId: number | null = null;
    let fallbackTimeoutId: number | null = null;
    let scriptElement: HTMLScriptElement | null = null;
    let scriptLoadHandler: (() => void) | undefined;
    let scriptErrorHandler: (() => void) | undefined;

    const win = window as ThreeWindow;

    const initializeThree = () => {
      if (disposed || !win.THREE || !canvas || renderer) return;

      const THREE = win.THREE;

      const isMobile = window.matchMedia(
        "(max-width: 767px)"
      ).matches;

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        55,
        canvas.clientWidth / Math.max(canvas.clientHeight, 1),
        0.1,
        100
      );

      camera.position.z = 12;

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !isMobile,
          powerPreference: "low-power",
        });
      } catch {
        return;
      }

      const updatePixelRatio = () => {
        const mobile = window.matchMedia(
          "(max-width: 767px)"
        ).matches;

        renderer?.setPixelRatio(
          Math.min(
            window.devicePixelRatio || 1,
            mobile ? 1.25 : 1.5
          )
        );
      };

      updatePixelRatio();

      renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight
      );

      const network = new THREE.Group();
      scene.add(network);

      const nodeCount = isMobile ? 38 : 65;
      const positions: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        positions.push(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 9
        );
      }

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

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let scrollPosition = 0;
      let isVisible = true;
      let lastFrameTime = 0;

      let activeTouchPointer: number | null = null;
      let lastTouchX = 0;
      let lastTouchY = 0;

      const frameInterval = isMobile ? 1000 / 30 : 1000 / 60;

      const clamp = (value: number) =>
        Math.max(-1, Math.min(1, value));

      const handlePointerDown = (event: PointerEvent) => {
        if (event.pointerType !== "touch" || !event.isPrimary) {
          return;
        }

        const target = event.target;

        if (
          target instanceof Element &&
          target.closest("a, button, input, textarea, select")
        ) {
          return;
        }

        activeTouchPointer = event.pointerId;
        lastTouchX = event.clientX;
        lastTouchY = event.clientY;
      };

      const handlePointerMove = (event: PointerEvent) => {
        if (event.pointerType === "mouse") {
          targetX = (event.clientX / window.innerWidth - 0.5) * 2;
          targetY = (event.clientY / window.innerHeight - 0.5) * 2;
          startRendering();
          return;
        }

        if (
          event.pointerType === "touch" &&
          activeTouchPointer === event.pointerId
        ) {
          const deltaX = event.clientX - lastTouchX;
          const deltaY = event.clientY - lastTouchY;

          targetX = clamp(
            targetX + (deltaX / window.innerWidth) * 2.5
          );

          targetY = clamp(
            targetY + (deltaY / window.innerHeight) * 2.5
          );

          lastTouchX = event.clientX;
          lastTouchY = event.clientY;

          startRendering();
        }
      };

      const handlePointerEnd = (event: PointerEvent) => {
        if (activeTouchPointer === event.pointerId) {
          activeTouchPointer = null;
        }
      };

      const handleScroll = () => {
        scrollPosition = window.scrollY;
        startRendering();
      };

      const handleResize = () => {
        if (!renderer) return;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        updatePixelRatio();
      };

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const renderScene = (timestamp: number) => {
        animationFrame = null;

        if (
          disposed ||
          !renderer ||
          !isVisible ||
          document.hidden
        ) {
          return;
        }

        if (
          lastFrameTime !== 0 &&
          timestamp - lastFrameTime < frameInterval
        ) {
          animationFrame = requestAnimationFrame(renderScene);
          return;
        }

        const delta = lastFrameTime
          ? Math.min(timestamp - lastFrameTime, 100)
          : 16.67;

        lastFrameTime = timestamp;

        const easing = 1 - Math.pow(1 - 0.035, delta / 16.67);

        currentX += (targetX - currentX) * easing;
        currentY += (targetY - currentY) * easing;

        const settled =
          Math.abs(targetX - currentX) < 0.001 &&
          Math.abs(targetY - currentY) < 0.001;

        if (settled) {
          currentX = targetX;
          currentY = targetY;
        }

        network.rotation.y = currentX * 0.12;
        network.rotation.x =
          currentY * 0.06 + scrollPosition * 0.000025;

        network.position.x = -currentX * 0.12;
        network.position.y = currentY * 0.08;

        renderer.render(scene, camera);

        if (!prefersReducedMotion && !settled) {
          animationFrame = requestAnimationFrame(renderScene);
        } else {
          lastFrameTime = 0;
        }
      };

      const startRendering = () => {
        if (
          animationFrame === null &&
          !disposed &&
          isVisible &&
          !document.hidden
        ) {
          animationFrame = requestAnimationFrame(renderScene);
        }
      };

      const stopRendering = () => {
        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }

        lastFrameTime = 0;
      };

      const handleDocumentVisibility = () => {
        if (document.hidden) {
          stopRendering();
        } else {
          startRendering();
        }
      };

      section.addEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.addEventListener(
        "pointermove",
        handlePointerMove,
        { passive: true }
      );

      window.addEventListener(
        "pointerup",
        handlePointerEnd
      );

      window.addEventListener(
        "pointercancel",
        handlePointerEnd
      );

      window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
      );

      window.addEventListener(
        "resize",
        handleResize
      );

      document.addEventListener(
        "visibilitychange",
        handleDocumentVisibility
      );

      if ("IntersectionObserver" in window) {
        visibilityObserver = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];

            if (!entry) return;

            isVisible = entry.isIntersecting;

            if (isVisible) {
              startRendering();
            } else {
              stopRendering();
            }
          },
          { threshold: 0 }
        );

        visibilityObserver.observe(section);
      }

      startRendering();

      cleanupThree = () => {
        section.removeEventListener(
          "pointerdown",
          handlePointerDown
        );

        window.removeEventListener(
          "pointermove",
          handlePointerMove
        );

        window.removeEventListener(
          "pointerup",
          handlePointerEnd
        );

        window.removeEventListener(
          "pointercancel",
          handlePointerEnd
        );

        window.removeEventListener(
          "scroll",
          handleScroll
        );

        window.removeEventListener(
          "resize",
          handleResize
        );

        document.removeEventListener(
          "visibilitychange",
          handleDocumentVisibility
        );

        stopRendering();
        visibilityObserver?.disconnect();

        nodeGeometry.dispose();
        nodeMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();

        renderer?.dispose();
        renderer = undefined;
      };
    };

    const loadThree = () => {
      if (disposed) return;

      if (win.THREE) {
        initializeThree();
        return;
      }

      const scriptId = "hero-three-js";

      let script = document.getElementById(
        scriptId
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.async = true;
      }

      scriptElement = script;

      const handleLoad = () => {
        initializeThree();
      };

      const handleError = () => {
        console.warn("Three.js could not be loaded.");
      };

      scriptLoadHandler = handleLoad;
      scriptErrorHandler = handleError;

      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);

      if (!script.isConnected) {
        document.head.appendChild(script);
      }
    };

    const idleWindow = window as ThreeWindow;

    if (idleWindow.requestIdleCallback) {
      idleCallbackId = idleWindow.requestIdleCallback(
        loadThree,
        { timeout: 1500 }
      );
    } else {
      fallbackTimeoutId = window.setTimeout(
        loadThree,
        350
      );
    }

    return () => {
      disposed = true;

      if (
        idleCallbackId !== null &&
        idleWindow.cancelIdleCallback
      ) {
        idleWindow.cancelIdleCallback(idleCallbackId);
      }

      if (fallbackTimeoutId !== null) {
        clearTimeout(fallbackTimeoutId);
      }

      if (scriptElement) {
        if (scriptLoadHandler) {
          scriptElement.removeEventListener(
            "load",
            scriptLoadHandler
          );
        }

        if (scriptErrorHandler) {
          scriptElement.removeEventListener(
            "error",
            scriptErrorHandler
          );
        }
      }

      cleanupThree?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="grid-background relative isolate overflow-hidden touch-pan-y"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#07090E]/95 via-[#07090E]/75 to-[#07090E]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-transparent via-transparent to-[#07090E]/80"
      />

      <div className="container relative z-10">
        <div className="flex min-h-[calc(100vh-72px)] items-center py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-(--success)" />

              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-(--text-secondary)">
                Available for opportunities
              </span>
            </div>

            <p className="mb-5 font-mono text-sm font-medium text-(--accent)">
              BS Information Technology Student
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-(--text-primary) sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.02]">
              Engineering systems for{" "}
              <span className="text-(--accent)">
                Cloud Security
              </span>{" "}
              and GRC.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-(--text-secondary) sm:text-lg">
              I&apos;m Saif Ali, an Information Technology student
              focused on cloud security engineering, security
              operations, governance, risk, compliance, automation,
              and AI-assisted security analysis.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="button button-primary transition-transform duration-200 active:scale-[0.97]"
              >
                Explore Projects
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary transition-transform duration-200 active:scale-[0.97]"
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className="button button-secondary transition-transform duration-200 active:scale-[0.97]"
              >
                Get in Touch
              </a>
            </div>

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