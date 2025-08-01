import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ title, img, desc, link }) => (
  <div className="card-3d tilt-card bg-slate-800/90 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
    <Link to={link} className="flex flex-col items-center w-full h-full">
      <img src={img} alt={title} className="w-28 h-28 rounded-xl object-cover mb-4 border-2 border-blue-500/20" />
      <h4 className="font-bold text-blue-400 text-lg mb-1 text-center">{title}</h4>
      <p className="text-blue-300 text-sm text-center">{desc}</p>
    </Link>
  </div>
);

export default CardItem;

