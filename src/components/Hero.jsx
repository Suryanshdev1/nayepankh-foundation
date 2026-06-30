import { useEffect, useRef, useState } from 'react';
import { Heart, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Animated background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Mouse follow glow */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full opacity-30 dark:opacity-20 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          zIndex: 1,
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium mb-6 animate-in">
              <Sparkles className="w-4 h-4" />
              UP Government | 80G & 12A Registered NGO
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Bringing{' '}
              <span className="gradient-text dark:gradient-text-dark">Smiles</span>{' '}
              to Those Who Need It Most
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              India's biggest student-led NGO, uplifting underprivileged communities 
              through education, health, and compassionate support across Kanpur, 
              Ghaziabad, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, '#donate')}
                className="btn-primary text-base flex items-center justify-center gap-2 group"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Donate Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#volunteer"
                onClick={(e) => handleNavClick(e, '#volunteer')}
                className="btn-secondary text-base flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Become a Volunteer
              </a>
            </div>

            {/* Stats mini */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '15K+', label: 'Children Supported' },
                { value: '500+', label: 'Active Volunteers' },
                { value: '50+', label: 'Cities Reached' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-700 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration area with floating cards */}
          <div className="relative hidden lg:block">
            {/* Main decorative circle */}
            <div className="relative w-[500px] h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-accent-orange/20 dark:from-primary-900/30 dark:to-accent-orange/10 animate-pulse-slow" />

              {/* Floating card 1 */}
              <div className="absolute top-8 left-8 glass-strong rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-white">Education Drive</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">1,200+ students enrolled</div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute bottom-12 right-0 glass-strong rounded-2xl p-4 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-white">New Volunteers</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">+48 this month</div>
                  </div>
                </div>
              </div>

              {/* Floating card 3 */}
              <div className="absolute top-1/2 -left-4 glass-strong rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-white">Meals Served</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">50,000+ distributed</div>
                  </div>
                </div>
              </div>

              {/* Center icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                  <Heart className="w-14 h-14 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.05,75.74,321.39,56.44Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}
