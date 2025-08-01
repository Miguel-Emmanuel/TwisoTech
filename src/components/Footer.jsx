import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-3d.png";

const Footer = () => (
  <footer className="fixed bottom-0 z-10 px-4 py-3 w-full bg-gradient-to-t from-slate-900/90 via-slate-800/90 to-slate-800/90 backdrop-blur-2xl rounded-t-3xl shadow-2xl border-t border-blue-500/20 animate__animated animate__fadeInUp card-3d">
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center px-4">
      {/* Columna 1: Logo y nombre */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="w-14 h-14 flex items-center justify-center relative animate__animated animate__pulse animate__infinite">
          <img
            src={logo}
            alt="TwisoTech logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-2xl bg-white/10"
            style={{ boxShadow: '0 0 32px 0 #3b82f6, 0 0 0 4px #60a5fa33' }}
          />
        </div>
        <span className="text-lg font-extrabold text-gradient drop-shadow-lg tracking-tight mt-1">TwisoTech</span>
        <span className="text-xs text-blue-300">Soluciones inteligentes para un mundo digital.</span>
      </div>

      {/* Columna 2: Enlaces rápidos */}
      <nav className="flex flex-col items-center gap-1 text-sm">
        <h3 className="font-bold text-blue-400 mb-2">Enlaces rápidos</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-center">
          <Link to="/" className="text-blue-200 hover:text-white transition-colors">Inicio</Link>
          <Link to="/servicios" className="text-blue-200 hover:text-white transition-colors">Servicios</Link>
          <Link to="/mision" className="text-blue-200 hover:text-white transition-colors">Misión</Link>
          <Link to="/vision" className="text-blue-200 hover:text-white transition-colors">Visión</Link>
          <Link to="/proyectos" className="text-blue-200 hover:text-white transition-colors">Proyectos</Link>
          <Link to="/contacto" className="text-blue-200 hover:text-white transition-colors">Contacto</Link>
        </div>
      </nav>

      {/* Columna 3: Redes sociales */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <h3 className="font-bold text-blue-400 mb-1">Síguenos</h3>
        <div className="flex gap-3">
          <a href="https://wa.me/5217226395654" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-white/90 to-sky-100/90 rounded-full p-2 shadow-lg border border-sky-200/30 hover:bg-sky-200/80 hover:scale-110 transition-all duration-300 text-blue-800" aria-label="WhatsApp">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.81L0 24l6.29-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52z" fill="#25D366"/><path d="M17.47 14.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.46 0 1.45 1.03 2.85 1.18 3.05.14.19 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" fill="#fff"/></svg>
          </a>
          <a href="#" className="bg-gradient-to-br from-white/90 to-sky-100/90 rounded-full p-2 shadow-lg border border-sky-200/30 hover:bg-sky-200/80 hover:scale-110 transition-all duration-300 text-blue-800" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="#" className="bg-gradient-to-br from-white/90 to-sky-100/90 rounded-full p-2 shadow-lg border border-sky-200/30 hover:bg-sky-200/80 hover:scale-110 transition-all duration-300 text-blue-800" aria-label="Instagram">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" fill="#fff"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1.5" fill="#E1306C"/></svg>
          </a>
          <a href="#" className="bg-gradient-to-br from-white/90 to-sky-100/90 rounded-full p-2 shadow-lg border border-sky-200/30 hover:bg-sky-200/80 hover:scale-110 transition-all duration-300 text-blue-800" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div className="w-full mt-3 text-center text-blue-300 text-xs border-t border-blue-500/20 pt-2">
      © 2025 TwisoTech – Todos los derechos reservados
    </div>
  </footer>
);

export default Footer;
