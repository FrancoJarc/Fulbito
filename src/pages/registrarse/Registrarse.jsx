import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


export function Registrarse() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        correo: "",
        password: "",
        rol: "jugador"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const user = {
            nombre: formData.nombre,
            apellido: formData.apellido,
            dni: formData.dni,
            telefono: formData.telefono,
            correo: formData.correo,
            contrasena: formData.password,
            rol: formData.rol
        };


        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            toast.success("Registro exitoso")
            navigate("/")
        } else {
            const data = await response.json();
            toast.error(data.error || "Hubo un problema al registrar el usuario");
        }
    }

    const updateData = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }




    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
            <form className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }} onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Registrarse</h2>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        className="form-control"
                        placeholder="Apellido"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input
                        type="text"
                        name="dni"
                        id="dni"
                        className="form-control"
                        placeholder="Ej: 12345678"
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
                        placeholder="Ej: 123456789"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        className="form-control"
                        placeholder="ejemplo@gmail.com"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Contraseña"
                        onChange={updateData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="rol" className="form-label">Rol</label>
                    <select name="rol" id="rol" className="form-select" onChange={updateData} value={formData.rol}>
                        <option value="jugador">Jugador</option>
                        <option value="dueno">Dueño</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
            </form>
        </div>
    );
}
