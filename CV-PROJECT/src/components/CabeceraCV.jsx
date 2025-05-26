import "./cabecera.css";

const user = {
    nombre: "Miguel Angel Aguirre Moreno",
    Cargo: "Desarrollo Front-End jr",
    correo: "aguirremorenomiguelangel2008@gmail.com",
    ubicacion: "Medellin",
    telefono: "3246361100"
};

export default function CabeceraCv(){
    return (
        <header>
            <h1>{user.nombre}</h1>
            <h2>{user.Cargo}</h2>
            <h3>{user.correo}</h3>
            <h4>{user.ubicacion}</h4>
            <h5>{user.telefono}</h5>
        </header>
    );
}