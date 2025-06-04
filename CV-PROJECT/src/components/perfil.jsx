import "./perfil.css"; 

const perfil = {
  titulo: "Perfil",
    descripcion: "Soy un desarrollador web apasionado por crear aplicaciones interactivas y eficientes. Me especializo en el desarrollo frontend utilizando tecnologías modernas como React, JavaScript y CSS. Siempre estoy buscando aprender nuevas habilidades y mejorar mis conocimientos en el campo del desarrollo web.",
    habilidades: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js"
    ]
};

export default function Perfil() {
  return (
    <section>
      <h3>{perfil.titulo}</h3>
      <p>{perfil.descripcion}</p>
      <h4>Habilidades:</h4>
      <ul>
        {perfil.habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}
import { perfil } from '../data/cvData';
