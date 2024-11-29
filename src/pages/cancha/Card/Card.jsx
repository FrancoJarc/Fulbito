import { useState } from "react";

export function Card(props) {
    const handleReservar = () => {
        if (props.rol === "jugador") {
            const reserva = {
                id_usuario: props.userId,
                id_cancha: props.id,
            };

            fetch("http://localhost:3000/reservas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reserva),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert("Reserva creada")
                })
                .catch((error) => {
                    alert("Error al crear la reserva:");
                });
        }
    };
    return (
        <>
            <div className="card text-center mb-4 mt-4">
                <div className="card-header">
                    <b>{props.nombre}</b>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>Precio por hora:</b> {props.precio} </p >
                    <p className="card-text"><b>Capacidad:</b> {props.capacidad}</p>
                    <p className="card-text"><b>Dirección:</b> {props.calle}</p>
                    <p className="card-text"><b>Teléfono:</b> {props.telefono}</p>
                </div>
                <div className="card-footer text-body-secondary">
                    {props.rol === "jugador" && (
                        <button onClick={handleReservar} className="btn btn-primary">
                            Reservar ahora
                        </button>
                    )}
                </div>
            </div>

        </>
    )
}