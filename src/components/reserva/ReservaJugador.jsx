import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { CardReserva } from "../../pages/reserva/Card/CardReserva";
import { useModal } from "../../context/ModalContext";


export function ReservaJugador() {
    const { openModal } = useModal();
    const { userLogueado } = useAuth();
    const [reservas, setReservas] = useState([]);
    const [canchas, setCanchas] = useState([]);

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


        fetch("http://localhost:3000/canchas")
            .then((res) => res.json())
            .then((data) => setCanchas(data))
            .catch((error) => console.log("Error al cargar canchas:", error));

    }, [userLogueado.id]);


    const handleEliminarReserva = async (idReserva) => {
        const isConfirmed = await openModal({
            title: "Eliminar reserva",
            text: "¿Estás seguro que deseas eliminar esta reserva?",
        });

        if (!isConfirmed) return;


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
                reservas.map((reserva) => {
                    const cancha = canchas.find((c) => c.id === reserva.id_cancha);

                    return (cancha && (
                        <CardReserva
                            key={reserva.id}
                            nombreCancha={cancha.nombre}
                            precio={cancha.precio}
                            capacidad={cancha.capacidad}
                            calle={cancha.calle}
                            telefono={cancha.telefono}
                            onEliminar={() => handleEliminarReserva(reserva.id)}
                        />
                    )
                    );
                })
            )}
        </div>
    );

}