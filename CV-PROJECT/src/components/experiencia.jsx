export default function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador de Software",
      empresa: "NASA",
      año: "2022–2024",
      descripcion: "Desarrollo de sistemas de monitoreo satelital en tiempo real."
    },
    {
      cargo: "Ingeniero de Software",
      empresa: "Google",
      año: "2015–2020",
      descripcion: "Diseño de algoritmos de búsqueda y optimización de rendimiento web."
    },
    {
      cargo: "Desarrollador Full Stack",
      empresa: "Amazon",
      año: "2020–2022",
      descripcion: "Creación de microservicios y mantenimiento de infraestructura en AWS."
    },
    {
      cargo: "Líder de Proyecto",
      empresa: "StartTech",
      año: "2019–2021",
      descripcion: "Gestión de equipo ágil y coordinación de entregables para app fintech."
    },
    {
      cargo: "Diseñador UI/UX",
      empresa: "Freelancer",
      año: "2018–2019",
      descripcion: "Diseño de interfaces centradas en la experiencia de usuario para apps móviles."
    },
    {
      cargo: "Practicante Frontend",
      empresa: "Globant",
      año: "2017",
      descripcion: "Implementación de componentes React reutilizables para dashboards empresariales."
    },
    {
      cargo: "Desarrollador Backend",
      empresa: "Mercado Libre",
      año: "2016–2017",
      descripcion: "Desarrollo de APIs REST para sistema de pagos online."
    },
    {
      cargo: "Consultor Tecnológico",
      empresa: "EY",
      año: "2021–2022",
      descripcion: "Asesoramiento técnico en implementación de soluciones digitales para clientes."
    },
    {
      cargo: "Analista QA",
      empresa: "Accenture",
      año: "2014–2015",
      descripcion: "Diseño y ejecución de pruebas para asegurar calidad en desarrollo ágil."
    },
    {
      cargo: "Desarrollador Frontend",
      empresa: "Proyecto Personal",
      año: "2023",
      descripcion: "Desarrollo de portafolio personal con React y despliegue en Netlify."
    }
  ];

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> – {exp.empresa} ({exp.año})<br />
            <em>{exp.descripcion}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
