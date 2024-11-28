import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { CardReserva } from "../../pages/reserva/Card/CardReserva";

export function ReservaJugador() {

    const { userLogueado } = useAuth();
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/reservas")
            .then((res) => res.json())
            .then((data) => {

                const reservasUsuario = data.filter(
                    (reserva) => reserva.id_usuario === userLogueado.id
                );
                setReservas(reservasUsuario);
            })
            .catch((error) => console.log("Error al cargar reservas:", error));
    }, [userLogueado.id]);


    const handleEliminarReserva = (idReserva) => {
        fetch(`http://localhost:3000/reservas/${idReserva}`, {
            method: "DELETE",
        })
            .then(() => {
                setReservas(reservas.filter((reserva) => reserva.id !== idReserva));
                alert("Reserva eliminada");
            })
            .catch((error) => {
                alert("Error al eliminar la reserva");
            });
    };

    return (
        <div>
            <h2>Mis Reservas</h2>
            {reservas.length === 0 ? (
                <p>No tienes reservas hechas</p>
            ) : (
                reservas.map((reserva) => (
                    <CardReserva
                        key={reserva.id}
                        nombreCancha={reserva.nombreCancha}
                        precio={reserva.precio}
                        capacidad={reserva.capacidad}
                        calle={reserva.calle}
                        telefono={reserva.telefono}
                        onEliminar={() => handleEliminarReserva(reserva.id)}
                    />
                ))
            )}
        </div>
    );

}