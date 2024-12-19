import { useAuth } from "../../context/AuthContext";
import { Card } from "./Card/Card";

import { useEffect, useState } from "react";

export function Cancha() {

    const { user, token } = useAuth();
    const [canchas, setCanchas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user && token) {
            const fetchCanchas = async () => {

                try {
                    const response = await fetch("http://localhost:5000/api/canchas", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`Error ${response.status}: ${response.statusText}`);
                    }

                    const data = await response.json();
                    setCanchas(data.canchas || []);
                    setError(null);
                } catch (err) {
                    setError(err.message);
                }
            };

            fetchCanchas();
        }
    }, [user, token]);


    const handleDeleteCancha = (id) => {
        setCanchas((prevCanchas) => prevCanchas.filter((cancha) => cancha.id !== id));
    };

    return (
        <>

            {error && <p className="error">{error}</p>}

            {user ? (
                <div>
                    <h2 className="mt-5">Canchas disponibles</h2>
                    {canchas.map((cancha) => (
                        <Card
                            key={cancha.id}
                            id={cancha.id}
                            nombre={cancha.nombre}
                            precio_hora={cancha.precio_hora}
                            capacidad={cancha.capacidad}
                            calle={cancha.calle}
                            telefono={cancha.telefono}
                            rol={user.rol}
                            userId={user.id}
                            canchaUserId={cancha.id_usuario}
                            token={token}
                            onDelete={handleDeleteCancha}
                        />
                    ))}
                </div>

            ) : (
                <h2> No podes acceder a esta pagina</h2>
            )}
            <br></br>
            <br></br>
        </>
    )




}