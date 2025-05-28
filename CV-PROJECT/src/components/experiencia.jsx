export default function Experiencia() {
  const experiencia = [
    {
      id: 1,
      puesto: "Desarrollador Full Stack",
      empresa: "Navisoft Gaming",
      periodo: "2022-2024",
      descripcion: "Diseño de plataformas web para videojuegos y gestión de base de datos."
    },
    {
      id: 2,
      puesto: "Instructor TIC",
      empresa: "SENA",
      periodo: "2020-2022",
      descripcion: "Formación en desarrollo web y buenas prácticas de programación."
    },
    {
      id: 3,
      puesto: "Frontend Developer",
      empresa: "SoftTech",
      periodo: "2021-2023",
      descripcion: "Implementación de interfaces en React y optimización de rendimiento."
    },
    {
      id: 4,
      puesto: "Backend Developer",
      empresa: "DataCore",
      periodo: "2019-2021",
      descripcion: "Desarrollo de microservicios en Node.js y mantenimiento de APIs."
    },
    {
      id: 5,
      puesto: "Líder Técnico",
      empresa: "InnovApp",
      periodo: "2023",
      descripcion: "Supervisión de equipos de desarrollo ágil en proyectos móviles."
    },
    {
      id: 6,
      puesto: "Ingeniero de Software",
      empresa: "Tecsis",
      periodo: "2018-2020",
      descripcion: "Análisis, diseño y desarrollo de sistemas empresariales personalizados."
    },
    {
      id: 7,
      puesto: "Analista QA",
      empresa: "Visionary IT",
      periodo: "2017-2018",
      descripcion: "Pruebas automatizadas y reporte de errores en desarrollo web."
    },
    {
      id: 8,
      puesto: "Freelancer Web",
      empresa: "Proyecto Personal",
      periodo: "2016-2017",
      descripcion: "Diseño y desarrollo de sitios web para clientes independientes."
    },
    {
      id: 9,
      puesto: "Diseñador UI/UX",
      empresa: "Creativa Studio",
      periodo: "2015-2016",
      descripcion: "Creación de prototipos y flujos de usuario para apps móviles."
    },
    {
      id: 10,
      puesto: "Soporte Técnico",
      empresa: "IT Solutions",
      periodo: "2014-2015",
      descripcion: "Atención a usuarios y mantenimiento de equipos informáticos."
    }
  ];

  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})<br />
            <em>{exp.descripcion}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}

