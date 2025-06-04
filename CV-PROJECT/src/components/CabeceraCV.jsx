import "./cabecera.css";
import { CabeceraCv } from '../data/cvData';
import React from "react";

export default function CabeceraCV({ nombre, cargo, correo, ubicacion, telefono}) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <h3>Correo{correo}</h3>
      <h4>Ubicacion{ubicacion}</h4>
      <h5>Telefono{telefono}</h5>
    </header>
  );
}

