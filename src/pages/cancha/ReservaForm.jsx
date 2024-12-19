import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export function ReservaForm() {
    const [fecha, setFecha] = useState("");
    const [horarioInicio, setHorarioInicio] = useState("");
    const [horarioFin, setHorarioFin] = useState("");
    const navigate = useNavigate();
    const { user, token } = useAuth();

    const location = useLocation();
    const { canchaId, userId } = location.state || {};

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fecha || !horarioInicio || !horarioFin) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        const reserva = {
            id_usuario: userId,
            id_cancha: canchaId,
            fecha_reserva: fecha,
            horario_inicio: horarioInicio,
            horario_fin: horarioFin,
        };

        fetch("http://localhost:5000/api/reservas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(reserva),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Reserva creada exitosamente");
                navigate("/reserva"); 
            })
            .catch((error) => {
                toast.error("Error al crear la reserva");
            });
    };

    return (
        <div className="container mt-5">
            <h2>Formulario de Reserva</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">
                        Fecha de la reserva
                    </label>
                    <input
                        type="date"
                        id="fecha"
                        className="form-control"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="horarioInicio" className="form-label">
                        Horario de inicio
                    </label>
                    <input
                        type="time"
                        id="horarioInicio"
                        className="form-control"
                        value={horarioInicio}
                        onChange={(e) => setHorarioInicio(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="horarioFin" className="form-label">
                        Horario de fin
                    </label>
                    <input
                        type="time"
                        id="horarioFin"
                        className="form-control"
                        value={horarioFin}
                        onChange={(e) => setHorarioFin(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Confirmar Reserva
                </button>
            </form>
        </div>
    );
}
