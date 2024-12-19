import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";


export function ReservaDueño() {
    const navigate = useNavigate();
    const { user, token } = useAuth();
    const [canchas, setCanchas] = useState([]);
    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        capacidad: "",
        calle: "",
        telefono: ""
    });


    useEffect(() => {
        fetch("http://localhost:5000/api/canchas", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setCanchas(data))
            .catch((error) => console.log("Error al obtener canchas:", error));
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const cancha = {
            nombre: formData.nombre,
            precio_hora: parseFloat(formData.precio),
            capacidad: parseInt(formData.capacidad),
            calle: formData.calle,
            telefono: Number(formData.telefono),
            id_usuario: user.id 
        };

        const response = await fetch("http://localhost:5000/api/canchas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(cancha)
        });

        if (response.ok) {
            toast.success("Cancha registrada");
            navigate("/cancha");
        } else {
            alert("Hubo un error al registrar la cancha.");
        }
    }


    const updateData = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }


    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
            <form className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }} onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Agregar Cancha</h2>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control"
                        placeholder="Nombre de la cancha"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input
                        type="number"
                        name="precio"
                        id="precio"
                        className="form-control"
                        placeholder="Precio por hora"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="capacidad" className="form-label">Capacidad</label>
                    <input
                        type="text"
                        name="capacidad"
                        id="capacidad"
                        className="form-control"
                        placeholder="Capacidad de la cancha"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="calle" className="form-label">Dirección</label>
                    <input
                        type="text"
                        name="calle"
                        id="calle"
                        className="form-control"
                        placeholder="Dirección de la cancha"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        id="telefono"
                        className="form-control"
                        placeholder="Teléfono de contacto"
                        onChange={updateData}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrar Cancha</button>
            </form>
        </div>
    );


}