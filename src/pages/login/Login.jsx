import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Registrarse } from "../registrarse/Registrarse";
import { toast } from "react-toastify";



export function Login() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        correo: "",
        password: "",
        rol: "jugador"
    });


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { correo, password, rol } = formData;



        const loginResultado = await login(correo, password, rol);


        if (loginResultado) {
            toast.success("Inicio de sesión exitoso")
            navigate("/cancha");
        } else {
            toast.error("Inicio de sesión fallido")

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
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        className="form-control"
                        placeholder="Ejemplo@gmail.com"
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
                        <option value="dueño">Dueño</option>
                    </select>
                </div>
                <div className="text-end mb-3">
                    <Link to="/registrarse" className="text-decoration-none">
                        <small>Cree su usuario en dos clicks</small>
                    </Link>
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
            </form>
        </div>
    );
}
