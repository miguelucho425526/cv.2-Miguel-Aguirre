import React from "react";
import {
  CabeceraCv,
  perfil,
  educacion,
  experiencia,
  StackTecnologias,
  proyectos,
  habilidades,
} from "./data/cvData";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Cabecera */}
      <CabeceraCv
        nombre={CabeceraCv.nombre}
        profesion={CabeceraCv.profesion}
      />
      {/* Perfil */}
      <Perfil texto={perfil.texto} />

      {/* Educación */}
      <Educacion estudios={educacion} />

      {/* Experiencia */}
      <Experiencia trabajos={experiencia} />

      {/* Stack de Tecnologías */}
      <StackTecnologias tecnologias={StackTecnologias} />

      {/* Proyectos (nuevo componente) */}
      <Proyectos proyectos={proyectos} />

      {/* Habilidades (nuevo componente) */}
      <Habilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
