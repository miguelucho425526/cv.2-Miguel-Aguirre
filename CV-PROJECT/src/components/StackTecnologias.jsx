import { StackTecnologias } from '../data/cvData';
import React from "react";

export default function stacktecnologias() {
  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "Node.js", tipo: "backend" },
    { id: 3, nombre: "JavaScript", tipo: "frontend" },
    { id: 4, nombre: "PostgreSQL", tipo: "base de datos" },
    { id: 5, nombre: "TypeScript", tipo: "frontend" },
    { id: 6, nombre: "MongoDB", tipo: "base de datos" },
    { id: 7, nombre: "Express", tipo: "backend" },
    { id: 8, nombre: "HTML5", tipo: "frontend" },
    { id: 9, nombre: "CSS3", tipo: "frontend" },
    { id: 10, nombre: "Docker", tipo: "devops" }
  ];

  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      case "devops":
        return "purple";
      default:
        return "gray";
    }
  };

  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No se han registrado tecnologías.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map(({ id, nombre, tipo }) => (
          <li key={id} style={{ color: obtenerColor(tipo) }}>
            {nombre} - <em>{tipo}</em>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
