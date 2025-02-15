"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    if (!context) return;

    const particles: Particle[] = [];
    let animationFrameId: number;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      particles.length = 0;
      constructParticles();
    };

    const constructParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      for (let i = 0; i < (particleDensity || 50); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * ((maxSize || 1) - (minSize || 0.3)) + (minSize || 0.3),
          speed: Math.random() * 0.2 + 0.1,
        });
      }
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);

    const animate = () => {
      if (!context) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (!context || !canvas) return;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        context.fillStyle = particleColor || "#ffffff";
        context.fill();

        particle.y -= particle.speed;

        if (particle.y + particle.size < 0) {
          particle.y = canvas.height + particle.size;
          particle.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      particles.length = 0;
    };
  }, [context, maxSize, minSize, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
} 