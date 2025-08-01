import { useEffect } from "react";

export default function useHeroParticles(canvasId = "hero-particles") {
  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h, animationId;
    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener("resize", resize);
    resize();
    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 6 + Math.random() * 10,
        dx: -0.5 + Math.random(),
        dy: -0.5 + Math.random(),
        c: `rgba(${180+Math.random()*60},${220+Math.random()*30},255,0.18)`
      });
    }
    function draw() {
      ctx.clearRect(0,0,w,h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.c;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 16;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -20) p.x = w+20;
        if (p.x > w+20) p.x = -20;
        if (p.y < -20) p.y = h+20;
        if (p.y > h+20) p.y = -20;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [canvasId]);
}
