import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/img/logo-3d.png";

const PaginaVision = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-8 text-center">Nuestra Visión</h1>
      <p className="text-blue-200 text-lg text-center mb-6">
        Ser líderes en el desarrollo de soluciones tecnológicas de alto impacto, reconocidos por la innovación, la calidad y la cercanía con nuestros clientes, contribuyendo al avance digital de empresas y personas en México y Latinoamérica.
      </p>
      <div className="flex justify-center">
        <img src={logo} alt="Logo TwisoTech" className="w-32 h-32 rounded-full shadow-lg border-2 border-blue-500/30 bg-white/10" />
      </div>
    </main>
    <Footer />
  </>
);

export default PaginaVision;
