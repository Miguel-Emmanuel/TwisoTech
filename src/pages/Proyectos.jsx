import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import proyectoEscolar from "../assets/img/proyecto-escolar.png";
import proyectoCamaras from "../assets/img/proyecto-camaras.png";

const proyectos = [
  {
    title: "Sistema Escolar",
    img: proyectoEscolar,
    desc: "Gestión de alumnos y calificaciones.",
    link: "/proyecto-sistema-escolar"
  },
  {
    title: "Sitio para PyME",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    desc: "Landing page con catálogo de productos.",
    link: "/proyecto-sitio-pyme"
  },
  {
    title: "Monitoreo Remoto",
    img: proyectoCamaras,
    desc: "Cámaras con acceso móvil.",
    link: "/proyecto-monitoreo-remoto"
  }
];

const PaginaProyectos = () => (
  <>
    <Header />
    <div className="h-24 md:h-28"></div>
    <main className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gradient mb-10 text-center">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {proyectos.map((p, i) => (
          <CardItem key={i} {...p} />
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default PaginaProyectos;
