import React from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias,
  proyectos,
  habilidades
} from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/perfil.jsx";
import Educacion from "./components/educacion.jsx";
import Experiencia from "./components/experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import proyectos from "./components/proyectos.jsx";
import Habilidades from "./components/habilidades.jsx";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Cabecera */}
      <CabeceraCV
        nombre={cabecera.nombre}
        profesion={cabecera.profesion}
      />

      {/* Perfil */}
      <Perfil texto={perfil.texto} />

      {/* Educación */}
      <Educacion estudios={educacion} />

      {/* Experiencia */}
      <Experiencia trabajos={experiencia} />

      {/* Stack de Tecnologías */}
      <StackTecnologias tecnologias={stackTecnologias} />

      {/* Proyectos (nuevo componente) */}
      <Proyectos proyectos={proyectos} />

      {/* Habilidades (nuevo componente) */}
      <Habilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
