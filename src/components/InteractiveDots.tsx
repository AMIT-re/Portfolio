import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export const InteractiveDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeDots();
    };

    const initializeDots = () => {
      const dots: Dot[] = [];
      const spacing = 30;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
      dotsRef.current = dots;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get current theme
      const isDark = document.documentElement.classList.contains('dark');
      const dotColor = isDark ? 'rgba(217, 204, 255, 0.4)' : 'rgba(100, 116, 139, 0.4)';
      const hoverColor = isDark ? 'rgba(139, 69, 255, 0.8)' : 'rgba(139, 69, 255, 0.6)';

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          dot.vx -= Math.cos(angle) * force * 0.5;
          dot.vy -= Math.sin(angle) * force * 0.5;
        }

        // Apply spring force back to base position
        const springForce = 0.05;
        dot.vx += (dot.baseX - dot.x) * springForce;
        dot.vy += (dot.baseY - dot.y) * springForce;

        // Apply damping
        dot.vx *= 0.9;
        dot.vy *= 0.9;

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Calculate size and opacity based on distance to mouse
        const mouseDistance = Math.sqrt(
          (mouseRef.current.x - dot.x) ** 2 + (mouseRef.current.y - dot.y) ** 2
        );
        const hoverRadius = 80;
        let size = 1;
        let color = dotColor;

        if (mouseDistance < hoverRadius) {
          const hoverEffect = 1 - mouseDistance / hoverRadius;
          size = 1 + hoverEffect * 3;
          color = hoverColor;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};