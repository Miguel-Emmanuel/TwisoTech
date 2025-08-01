import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProyectoSoporteLaboratorio = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-6 text-center">Soporte a sistema web de laboratorio</h1>
      <img src='https://images.unsplash.com/photo-1581093588401-22b8d33c1e66?auto=format&fit=crop&w=400&q=80' alt="Soporte a sistema web de laboratorio" className="w-64 mx-auto rounded-2xl shadow-lg mb-6" />
      <p className="text-blue-200 text-lg mb-4 text-center">Mantenimiento, soporte y mejoras continuas a la plataforma web de gestión de laboratorio clínico. Optimización de procesos y soporte técnico especializado.</p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Actualización de módulos y reportes</li>
        <li>Soporte a usuarios y capacitación</li>
        <li>Mejoras de seguridad y rendimiento</li>
      </ul>
      <div className="text-center">
        <a href="/contacto" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Solicitar soporte</a>
      </div>
    </main>
    <Footer />
  </>
);

export default ProyectoSoporteLaboratorio;
