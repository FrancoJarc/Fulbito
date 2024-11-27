import { useAuth } from "../../context/AuthContext";
import { Card } from "./Card/Card";

import { useEffect, useState } from "react";

export function Cancha() {

    const { isLogueado } = useAuth();
    const { canchas, setCanchas } = useState([]);
    
    useEffect(() => {
        if (isLogueado) {
            fetch("http://localhost:3000/canchas")
                .then((res) => res.json())
                .then((data) => setCanchas(data))
                .catch((error) => console.log(error));
        }
    }, [isLogueado])

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