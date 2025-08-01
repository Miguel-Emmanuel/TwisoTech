import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicioRedes = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-6 text-center">Redes y Conectividad</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="Redes y Conectividad" className="w-32 mx-auto rounded-2xl shadow-lg mb-6" />
      <p className="text-blue-200 text-lg mb-4 text-center">Instalación de redes LAN, WiFi y enlaces punto a punto. Optimización de cobertura y velocidad para empresas y hogares.</p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Instalación de cableado estructurado</li>
        <li>Configuración de routers y switches</li>
        <li>Soporte y diagnóstico de red</li>
      </ul>
      <div className="text-center">
        <a href="/contacto" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Solicitar asesoría</a>
      </div>
    </main>
    <Footer />
  </>
);

export default ServicioRedes;
