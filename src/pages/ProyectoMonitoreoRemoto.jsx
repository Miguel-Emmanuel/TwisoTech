import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import proyectoCamaras from "../assets/img/proyecto-camaras.png";

const ProyectoMonitoreoRemoto = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-6 text-center">Monitoreo Remoto</h1>
      <img src={proyectoCamaras} alt="Monitoreo Remoto" className="w-64 mx-auto rounded-2xl shadow-lg mb-6" />
      <p className="text-blue-200 text-lg mb-4 text-center">Cámaras con acceso móvil, monitoreo 24/7 y notificaciones inteligentes. Solución ideal para empresas, hogares y comercios que buscan seguridad y control en tiempo real.</p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Visualización remota desde cualquier dispositivo</li>
        <li>Grabación en la nube y almacenamiento local</li>
        <li>Alertas automáticas por movimiento</li>
        <li>Soporte técnico y mantenimiento</li>
      </ul>
      <div className="text-center">
        <a href="/contacto" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Solicitar información</a>
      </div>
    </main>
    <Footer />
  </>
);

export default ProyectoMonitoreoRemoto;
