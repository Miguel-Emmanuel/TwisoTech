import React from "react";
import CardItem from "./CardItem";
import proyectoEscolar from "../assets/img/proyecto-escolar.png";
import proyectoCamaras from "../assets/img/proyecto-camaras.png";

const destacados = [
	{
		title: "Sistema Escolar",
		img: proyectoEscolar,
		desc: "Gestión de alumnos y calificaciones.",
		link: "/proyecto-sistema-escolar",
	},
	{
		title: "Sitio para PyME",
		img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
		desc: "Landing page con catálogo de productos.",
		link: "/proyecto-sitio-pyme",
	},
	{
		title: "Monitoreo Remoto",
		img: proyectoCamaras,
		desc: "Cámaras con acceso móvil.",
		link: "/proyecto-monitoreo-remoto",
	},
];

const ProyectosDestacados = () => (
	<section className="w-full py-12 animate-fadeInUp3d">
		<h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8 text-center drop-shadow-lg">
			Proyectos destacados
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{destacados.map((p, i) => (
				<CardItem key={i} {...p} />
			))}
		</div>
	</section>
);

export default ProyectosDestacados;
