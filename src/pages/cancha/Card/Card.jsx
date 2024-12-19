import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../context/ModalContext";

export function Card(props) {
    const navigate = useNavigate();
     const { openModal } = useModal();

    const handleReservar = () => {
        if (props.rol === "jugador") {
            navigate("/reservas", { state: { canchaId: props.id, userId: props.userId } });
        }
    };

    const handleEditar = () => {
        const { id, nombre, precio_hora, capacidad, calle, telefono, token } = props;

        navigate(`/editar/${id}`, {
            state: {
                cancha: { id, nombre, precio_hora, capacidad, calle, telefono, token }
            }
        });;
    };

    const handleEliminar = async () => {
        const isConfirmed = await openModal({
            title: "Eliminar cancha",
            text: "¿Estás seguro que deseas eliminar esta cancha?",
        });

        if (!isConfirmed) return;

        try {
            const response = await fetch(`http://localhost:5000/api/canchas/${props.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${props.token}`
                }
            });

            if (response.ok) {
                toast.success("Cancha eliminada correctamente");
                props.onDelete(props.id);
            } else {
                toast.error("Hubo un error al eliminar la cancha");
            }
        } catch (error) {
            toast.error("Error al conectar con el servidor");
        }

    };

    return (
        <>
            <div className="card text-center mb-4 mt-4">
                <div className="card-header">
                    <b>{props.nombre}</b>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>Precio por hora:</b> {props.precio_hora}</p>
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

                    {props.rol === "dueno" && props.userId === props.canchaUserId && (
                        <>
                            <button onClick={handleEditar} className="btn btn-warning me-2">
                                Editar
                            </button>
                            <button onClick={handleEliminar} className="btn btn-danger">
                                Eliminar
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}