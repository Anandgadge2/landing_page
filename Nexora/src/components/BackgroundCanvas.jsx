import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate futuristic particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 80);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '139, 92, 246' : '6, 182, 212', // Violet or Cyan
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around screen
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse interaction: subtle repulsion
        const dx = mouseX - p1.x;
        const dy = mouseY - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p1.x -= (dx / dist) * force * 1.5;
          p1.y -= (dy / dist) * force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p1.color}, 0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distLinks = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distLinks < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const linkAlpha = (1 - distLinks / 110) * 0.12;
            ctx.strokeStyle = `rgba(168, 85, 247, ${linkAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-purple-700/15 via-violet-600/10 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px]" />
      <div className="absolute top-[65%] left-[-10%] w-[650px] h-[650px] bg-purple-900/12 rounded-full blur-[170px]" />
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
