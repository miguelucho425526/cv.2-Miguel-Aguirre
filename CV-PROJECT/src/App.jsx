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
      <perfil texto={perfil.texto} />

      {/* Educación */}
      <educacion estudios={educacion} />

      {/* Experiencia */}
      <experiencia trabajos={experiencia} />

      {/* Stack de Tecnologías */}
      <StackTecnologias tecnologias={StackTecnologias} />

      {/* Proyectos (nuevo componente) */}
      <proyectos proyectos={proyectos} />

      {/* Habilidades (nuevo componente) */}
      <habilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
