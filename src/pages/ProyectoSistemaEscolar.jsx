import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import proyectoEscolar from "../assets/img/proyecto-escolar.png";

const ProyectoSistemaEscolar = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-6 text-center">Sistema Escolar</h1>
      <img src={proyectoEscolar} alt="Sistema Escolar" className="w-64 mx-auto rounded-2xl shadow-lg mb-6" />
      <p className="text-blue-200 text-lg mb-4 text-center">Gestión de alumnos y calificaciones para instituciones educativas. Plataforma intuitiva, segura y adaptable a cualquier nivel escolar.</p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Control de inscripciones y matrículas</li>
        <li>Gestión de calificaciones y reportes</li>
        <li>Comunicación con padres y alumnos</li>
      </ul>
      <div className="text-center">
        <a href="/contacto" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Solicitar demo</a>
      </div>
    </main>
    <Footer />
  </>
);

export default ProyectoSistemaEscolar;
