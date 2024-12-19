import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export function EditarCancha() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, token } = useAuth();
    const { cancha } = location.state || {};

    // Inicializa con valores vacíos por defecto
    const [nombre, setNombre] = useState(cancha?.nombre || "");
    const [precio_hora, setPrecio] = useState(cancha?.precio_hora || "");
    const [capacidad, setCapacidad] = useState(cancha?.capacidad || "");
    const [calle, setCalle] = useState(cancha?.calle || "");
    const [telefono, setTelefono] = useState(cancha?.telefono || "");

    useEffect(() => {
        // Solo actualiza si `cancha` tiene valores
        if (cancha) {
            setNombre(cancha.nombre);
            setPrecio(cancha.precio_hora);
            setCapacidad(cancha.capacidad);
            setCalle(cancha.calle);
            setTelefono(cancha.telefono);
        }
    }, [cancha]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/canchas/${cancha.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    nombre,
                    precio_hora: parseFloat(precio_hora),
                    capacidad: parseInt(capacidad),
                    calle,
                    telefono: parseInt(telefono),
                    id_usuario: user.id
                }),
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            toast.success("Cancha actualizada correctamente");
            navigate("/cancha");
        } catch (error) {
            toast.error("Hubo un error al actualizar la cancha");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Editar Cancha</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Precio por hora</label>
                    <input
                        type="number"
                        className="form-control"
                        value={precio_hora}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Capacidad</label>
                    <input
                        type="number"
                        className="form-control"
                        value={capacidad}
                        onChange={(e) => setCapacidad(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        value={calle}
                        onChange={(e) => setCalle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Guardar Cambios
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/cancha")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}