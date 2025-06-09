import React from "react";
export default function Experiencia({ experiencia }) {
  if (!experiencia || experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map(({ id, puesto, empresa, periodo, descripcion }) => (
          <li key={id}>
            <strong>{puesto}</strong> - {empresa} ({periodo})<br />
            <em>{descripcion}</em>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}

