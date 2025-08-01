import React from "react";
import CardItem from "./CardItem";
import proyectoEscolar from "../assets/img/proyecto-escolar.png";
import proyectoCamaras from "../assets/img/proyecto-camaras.png";

const portafolio = [
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
	{
		title: "Sitio web para Constructora",
		img: "https://png.pngtree.com/background/20230221/original/pngtree-construction-site-with-concrete-blocks-at-building-industry-construction-site-picture-image_2045851.jpg",
		desc: "Desarrollo de página web institucional para empresa constructora, con portafolio de obras y contacto profesional.",
		link: "/proyecto-cinvestav-eical",
	},
	{
		title: "Soporte a sistema web de laboratorio",
		img: "https://img.freepik.com/fotos-premium/cultivo-bacterias-laboratorio-ai-generativo_407474-12687.jpg",
		desc: "Mantenimiento, soporte y mejoras continuas a la plataforma web de gestión de laboratorio clínico.",
		link: "/proyecto-soporte-laboratorio",
	},
	{
		title: "CINVESTAV",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		desc: "Desarrollo y mantenimiento de sistema para evento académico nacional.",
		link: "/proyecto-sitio-constructora",
	},
];

const Portafolio = () => (
	<section className="max-w-6xl mx-auto py-12 animate-fadeInUp3d">
		<h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8 text-center drop-shadow-lg">
			Portafolio
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{portafolio.map((p, i) => (
				<CardItem key={i} {...p} />
			))}
		</div>
	</section>
);

export default Portafolio;
