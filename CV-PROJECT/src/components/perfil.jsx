import "./perfil.css"; 
import { habilidades, perfil } from '../data/cvData';
import React from "react";

export default function Perfil({ descripcion, habilidades }) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>{descripcion}</p>
      <p>{habilidades}</p>
      <hr />
    </section>
  );
}


