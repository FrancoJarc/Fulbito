import { Card } from "../../components/Card/Card";
import { useAuth } from "../../context/AuthContext";

export function Cancha() {
    const canchas = [
        { id: 1, nombre: "La bombonerita", precio: "$25000", capacidad: "10 Personas", calle: "Av.Gaona 1880", telefono: 45411232 },
        { id: 2, nombre: "Eurograss", precio: "$15000", capacidad: "10 Personas", calle: "Av.Rivadavia 15500", telefono: 32978200 },
        { id: 3, nombre: "Club Villa Mitre", precio: "$20000", capacidad: "12 Personas", calle: "Murguiondo 988", telefono: 32655898 },
    ];

    const { isLogueado } = useAuth();

    return (
        <>
            {isLogueado ? (
                <div>
                    {canchas.map((cancha) => (
                        <Card
                            key={cancha.id}
                            nombre={cancha.nombre}
                            precio={cancha.precio}
                            capacidad={cancha.capacidad}
                            calle={cancha.calle}
                            telefono={cancha.telefono}
                        />
                    ))}
                </div>
            ) : (
                <h2> No podes acceder a esta pagina</h2>
            )}

        </>
    )




}