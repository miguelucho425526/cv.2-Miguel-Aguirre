import React from "react";
export default function Educacion({ educacion }) {
  if (!educacion || educacion.length === 0) {
    return (
      <section>
        <h3>Educación</h3>
        <p>No se ha registrado formación académica.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map(({ id, titulo, institucion, periodo }) => (
          <li key={id}>
            <strong>{titulo}</strong> - {institucion} ({periodo})
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
