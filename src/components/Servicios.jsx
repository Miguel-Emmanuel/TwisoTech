import React from "react";
import CardItem from "./CardItem";

const services = [
  {
    title: "Desarrollo Web",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
    desc: "Sitios modernos, responsivos y animados para tu empresa o marca personal.",
    link: "/servicio-desarrollo-web"
  },
  {
    title: "Sistemas Empresariales",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    desc: "Software a medida para tu negocio.",
    link: "/servicio-sistemas-empresariales"
  },
  {
    title: "Cámaras de Seguridad",
    img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    desc: "Instalación y monitoreo inteligente.",
    link: "/servicio-camaras"
  },
  {
    title: "Redes y Conectividad",
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    desc: "LAN, WiFi y enlaces punto a punto.",
    link: "/servicio-redes"
  },
  {
    title: "Soporte Técnico",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    desc: "Mantenimiento y asistencia remota.",
    link: "/servicio-soporte"
  }
];

const Servicios = () => (
  <section className="w-full py-12">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s, i) => (
        <CardItem key={i} {...s} />
      ))}
    </div>
  </section>
);

export default Servicios;
