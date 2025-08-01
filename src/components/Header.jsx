import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-3d.png";
import useVanillaTilt from "./useVanillaTilt";


const Header = () => {
  useVanillaTilt();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen((open) => !open);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  const handleClose = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl shadow-2xl border-b border-blue-500/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3 gap-4 md:gap-0">
        {/* Logo y nombre */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0" onClick={handleClose}>
       <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/30 border-2 border-blue-500 shadow-2xl flex items-center justify-center overflow-hidden relative animate__animated animate__pulse animate__infinite" style={{ boxShadow: '0 0 32px 0 #3b82f6, 0 0 0 4px #60a5fa33' }}>
  <img src={logo}  alt="TwisoTech logo" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
</div>
         <span className="text-2xl font-extrabold text-gradient drop-shadow-lg tracking-tight hidden sm:inline-block animate__animated animate__fadeInLeft">TwisoTech</span>
        </Link>
        {/* Menú desktop */}
        <nav className="hidden md:flex flex-1 justify-center gap-3 lg:gap-6 xl:gap-8 items-center">
          <Link to="/" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Inicio</Link>
          <Link to="/servicios" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Servicios</Link>
          <Link to="/mision" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Misión</Link>
          <Link to="/vision" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Visión</Link>
          <Link to="/valores" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Valores</Link>
          <Link to="/proyectos" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Proyectos</Link>
          <Link to="/contacto" className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Contacto</Link>
        </nav>
        {/* Menú hamburguesa móvil */}
        <button
          id="menu-toggle"
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full bg-slate-700/50 border border-blue-500/20 shadow-lg transition hover:scale-110 focus:outline-none relative z-40"
          onClick={handleToggle}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="block w-7 h-1 bg-blue-400 rounded-full mb-1.5 transition-all duration-300"></span>
          <span className="block w-7 h-1 bg-blue-400 rounded-full mb-1.5 transition-all duration-300"></span>
          <span className="block w-7 h-1 bg-blue-400 rounded-full transition-all duration-300"></span>
        </button>
      </div>
      {/* Menú móvil animado */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl z-30 flex flex-col items-center justify-center gap-8 text-2xl font-bold text-blue-300 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <Link to="/" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Inicio</Link>
        <Link to="/servicios" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Servicios</Link>
        <Link to="/mision" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Misión</Link>
        <Link to="/vision" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Visión</Link>
        <Link to="/valores" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Valores</Link>
        <Link to="/proyectos" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Proyectos</Link>
        <Link to="/contacto" onClick={handleClose} className="px-4 py-2 rounded-xl font-semibold text-blue-300 bg-slate-700/50 shadow border border-blue-500/20 transition-all duration-300 hover:bg-slate-600/50 hover:text-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Contacto</Link>
      </nav>
    </header>
    
  );
};

export default Header;
