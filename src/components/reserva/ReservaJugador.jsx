import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { CardReserva } from "../../pages/reserva/Card/CardReserva";
import { useModal } from "../../context/ModalContext";
import { toast } from "react-toastify";

export function ReservaJugador() {
    const { user, token } = useAuth();
    const { openModal } = useModal();
    const [reservas, setReservas] = useState([]);
    const [canchas, setCanchas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/reservas", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const reservasUsuario = data.reservas.filter(
                    (reserva) => reserva.id_usuario === user.id
                );
                setReservas(reservasUsuario);
            })
            .catch((error) => console.log("Error al cargar reservas:", error));



        
        fetch("http://localhost:5000/api/canchas", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((data) => { setCanchas(data.canchas); })
            .catch((error) => console.log("Error al cargar canchas:", error));

    }, [user.id, token]);


    const handleEliminarReserva = async (idReserva) => {
        const isConfirmed = await openModal({
            title: "Eliminar reserva",
            text: "¿Estás seguro que deseas eliminar esta reserva?",
        });

        if (!isConfirmed) return;

        fetch(`http://localhost:5000/api/reservas/${idReserva}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(() => {
                setReservas(reservas.filter((reserva) => reserva.id !== idReserva));
                toast.success("Reserva eliminada");
            })
            .catch((error) => {
                toast.error("Error al eliminar la reserva");
            });
    };

    return (
        <div>
            <h2>Mis Reservas</h2>
            {reservas.length === 0 ? (
                <p>No tenes reservas hechas</p>
            ) : (
                reservas.map((reserva) => {
                    const cancha = canchas.find((c) => c.id === reserva.id_cancha);

                    return (
                        cancha && (
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
