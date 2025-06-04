import { educacion } from "../data/cvData";

export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo: "Ingeniería en Sistemas",
      institucion: "Universidad Nacional",
      periodo: "2018-2022"
    },
    {
      id: 2,
      titulo: "Tecnólogo en Análisis y Desarrollo de Software",
      institucion: "SENA",
      periodo: "2022-2024"
    },
    {
      id: 3,
      titulo: "Curso de Desarrollo Web Full Stack",
      institucion: "Platzi",
      periodo: "2023"
    },
    {
      id: 4,
      titulo: "Curso de React JS",
      institucion: "Udemy",
      periodo: "2022"
    },
    {
      id: 5,
      titulo: "Seminario en Ciberseguridad",
      institucion: "Universidad de los Andes",
      periodo: "2021"
    },
    {
      id: 6,
      titulo: "Taller de Diseño de Interfaces UX/UI",
      institucion: "Google for Startups",
      periodo: "2023"
    },
    {
      id: 7,
      titulo: "Curso de Python para Data Science",
      institucion: "Coursera",
      periodo: "2020"
    },
    {
      id: 8,
      titulo: "Curso de Git y GitHub",
      institucion: "FreeCodeCamp",
      periodo: "2021"
    },
    {
      id: 9,
      titulo: "Técnico en Sistemas",
      institucion: "SENA",
      periodo: "2016-2017"
    },
    {
      id: 10,
      titulo: "Curso Complementario en Inteligencia Artificial",
      institucion: "Microsoft Learn",
      periodo: "2024"
    }
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}

