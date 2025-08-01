import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/img/logo-3d.png";

const PaginaValores = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-8 text-center">Nuestros Valores</h1>
      <ul className="list-disc list-inside text-blue-300 text-lg space-y-2 mb-8">
        <li>Innovación</li>
        <li>Compromiso</li>
        <li>Honestidad</li>
        <li>Trabajo en equipo</li>
        <li>Adaptabilidad</li>
      </ul>
      <div className="flex justify-center">
        <img src={logo} alt="Logo TwisoTech" className="w-32 h-32 rounded-full shadow-lg border-2 border-blue-500/30 bg-white/10" />
      </div>
    </main>
    <Footer />
  </>
);

export default PaginaValores;
