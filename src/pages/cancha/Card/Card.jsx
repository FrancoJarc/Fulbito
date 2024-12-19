import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Card(props) {
    const navigate = useNavigate();

    const handleReservar = () => {
        if (props.rol === "jugador") {
            navigate("/reservas", { state: { canchaId: props.id, userId: props.userId } });        }
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