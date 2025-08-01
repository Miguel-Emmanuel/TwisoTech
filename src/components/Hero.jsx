import React from "react";
import logo from "../assets/img/logo-3d.png";
import useVanillaTilt from "./useVanillaTilt";
import useHeroParticles from "./useHeroParticles";


const Hero = () => {
  useVanillaTilt();
  useHeroParticles();
  return (
    <section id="hero-tilt" className="relative flex flex-col items-center justify-center w-full min-h-[420px] py-8 md:py-16 z-10">
      <div className="relative w-full h-auto min-h-[340px] md:min-h-[340px] lg:min-h-[320px] flex flex-row items-center justify-between bg-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-500/20 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] transition-all duration-500 group cursor-pointer card-3d tilt-card overflow-hidden animate__animated animate__fadeInDown gap-0 md:gap-8 lg:gap-16 px-4 md:px-10" style={{perspective:'1200px'}}>
        {/* Partículas decorativas y glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <canvas id="hero-particles" className="w-full h-full"></canvas>
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-300/30 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-0"></div>
        {/* Logo animado */}
        <div className="relative z-10 flex flex-col items-center flex-shrink-0 w-full md:w-auto md:mr-8 lg:mr-16">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white/50 border-4 border-sky-300 shadow-2xl flex items-center justify-center overflow-hidden mt-8 animate__animated animate__pulse animate__infinite" style={{boxShadow:'0 0 48px 0 #38bdf8,0 0 0 8px #fff2'}}>
            <img src={logo} alt="TwisoTech Logo" className="w-28 md:w-40 mx-auto drop-shadow-2xl select-none pointer-events-none animate__animated animate__tada animate__delay-1s animate__slower animate__repeat-2" />
          </div>
        </div>
        {/* Texto y botones */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 py-8 md:py-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 tracking-tight drop-shadow-2xl animate__animated animate__fadeInUp animate__delay-1s">TwisoTech</h1>
          <p className="text-xl md:text-2xl text-blue-400 mb-6 animate__animated animate__fadeInUp animate__delay-2s">Soluciones inteligentes para un mundo digital.</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 mb-4 animate__animated animate__fadeInUp animate__delay-3s">
            <a href="/servicios" className="px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Servicios</a>
            <a href="/mision" className="px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-sky-400 shadow-lg border border-white/30 hover:from-sky-400 hover:to-blue-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Misión</a>
            <a href="/proyectos" className="px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Proyectos</a>
            <a href="/contacto" className="px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-sky-400 shadow-lg border border-white/30 hover:from-sky-400 hover:to-blue-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Contacto</a>
          </div>
        </div>
        {/* Efecto glass y reflejo */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-md z-0"></div>
      </div>
      {/* Sombra 3D */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-10 bg-blue-900/20 rounded-full blur-2xl z-0"></div>
    </section>
  );
};

export default Hero;
