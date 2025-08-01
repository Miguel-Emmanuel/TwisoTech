import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicioSistemasEmpresariales = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-6 text-center">Sistemas Empresariales</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Sistemas Empresariales" className="w-32 mx-auto rounded-2xl shadow-lg mb-6" />
      <p className="text-blue-200 text-lg mb-4 text-center">Software a medida para tu negocio. Soluciones ERP, CRM, inventarios, ventas y facturación adaptadas a tus necesidades.</p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Integración con sistemas existentes</li>
        <li>Paneles de administración personalizados</li>
        <li>Automatización de procesos</li>
      </ul>
      <div className="text-center">
        <a href="/contacto" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Solicitar información</a>
      </div>
    </main>
    <Footer />
  </>
);

export default ServicioSistemasEmpresariales;
