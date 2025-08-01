import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicioCamaras = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-6 text-center">Cámaras de Seguridad</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Cámaras de Seguridad" className="w-32 mx-auto rounded-2xl shadow-lg mb-6" />
      <p className="text-blue-200 text-lg mb-4 text-center">Instalación y monitoreo inteligente de cámaras de seguridad. Acceso móvil, grabación en la nube y alertas automáticas.</p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>CCTV y videovigilancia IP</li>
        <li>Integración con alarmas y sensores</li>
        <li>Soporte y mantenimiento remoto</li>
      </ul>
      <div className="text-center">
        <a href="/contacto" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Solicitar cotización</a>
      </div>
    </main>
    <Footer />
  </>
);

export default ServicioCamaras;
