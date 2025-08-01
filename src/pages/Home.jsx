import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Portafolio from "../components/Portafolio";
import ProyectosDestacados from "../components/ProyectosDestacados";
import VentajasValores from "../components/VentajasValores";
const Home = () => (
  <>
    <Header />
    <div className="flex flex-col items-center w-full">
      <div className="h-24 md:h-28 w-full"></div>
      <div className="w-full px-4 pb-32">
        <Hero />
        <Servicios />
        <Portafolio />
        <ProyectosDestacados />
        <VentajasValores />
      </div>
    </div>
  </>
);

export default Home;
