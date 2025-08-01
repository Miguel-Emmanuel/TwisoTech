import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/img/logo-3d.png";

const PaginaMision = () => (
  <>
    <Header />
    <main className="flex flex-col items-center w-full min-h-screen pb-32">
      <div className="h-24 md:h-28 w-full"></div>
      <div className="w-full px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gradient mb-8 text-center">Nuestra Misión</h1>
          <p className="text-blue-200 text-lg text-center mb-6 max-w-3xl">
            Brindar soluciones tecnológicas innovadoras, confiables y personalizadas que impulsen el crecimiento y la transformación digital de nuestros clientes, generando valor y confianza a través de la excelencia, la creatividad y el compromiso profesional.
          </p>
          <div className="flex justify-center">
            <img src={logo} alt="Logo TwisoTech" className="w-32 h-32 rounded-full shadow-lg border-2 border-blue-500/30 bg-white/10" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PaginaMision;
