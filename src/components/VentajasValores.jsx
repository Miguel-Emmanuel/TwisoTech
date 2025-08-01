import React from "react";

const VentajasValores = () => (
  <section className="max-w-5xl mx-auto py-12 grid md:grid-cols-2 gap-10 animate-fadeInUp3d">
    <div className="card-3d p-8 flex flex-col justify-center bg-slate-800/90 rounded-2xl shadow-xl animate__animated animate__fadeInLeft">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">¿Por qué elegirnos?</h2>
      <ul className="list-disc list-inside text-blue-300 space-y-2">
        <li>Soluciones personalizadas y creativas</li>
        <li>Atención directa de gemelos expertos</li>
        <li>Soporte rápido y profesional</li>
        <li>Innovación y tecnología de punta</li>
      </ul>
    </div>
    <div className="card-3d p-8 flex flex-col justify-center bg-slate-800/90 rounded-2xl shadow-xl animate__animated animate__fadeInRight">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Nuestros valores</h2>
      <ul className="list-disc list-inside text-blue-300 space-y-2">
        <li>Innovación</li>
        <li>Compromiso</li>
        <li>Honestidad</li>
        <li>Trabajo en equipo</li>
        <li>Adaptabilidad</li>
      </ul>
    </div>
  </section>
);

export default VentajasValores;
