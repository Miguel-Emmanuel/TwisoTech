import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PaginaContacto = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-8 text-center">Contacto</h1>
      <form className="bg-slate-800/80 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-500/20">
        <div>
          <label className="block text-blue-300 font-semibold mb-2">Nombre</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-slate-900/80 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-blue-300 font-semibold mb-2">Correo electrónico</label>
          <input type="email" className="w-full px-4 py-2 rounded-lg bg-slate-900/80 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tucorreo@email.com" />
        </div>
        <div>
          <label className="block text-blue-300 font-semibold mb-2">Mensaje</label>
          <textarea className="w-full px-4 py-2 rounded-lg bg-slate-900/80 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
        </div>
        <button type="submit" className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg border border-white/30 hover:from-blue-500 hover:to-sky-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 btn-3d">Enviar mensaje</button>
      </form>
      <div className="text-center text-blue-400 mt-8">
        También puedes escribirnos a <a href="mailto:contacto@twisotech.com" className="underline hover:text-blue-200">contacto@twisotech.com</a>
      </div>
    </main>
    <Footer />
  </>
);

export default PaginaContacto;
