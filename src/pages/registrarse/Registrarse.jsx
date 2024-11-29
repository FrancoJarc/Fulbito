import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


export function Registrarse() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        correo: "",
        password: "",
        rol: "jugador"
    });

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            id: String(Number(users[users.length - 1].id) + 1),
            correo: formData.correo,
            contraseña: formData.password,
            rol: formData.rol

        }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            alert("Registro exitoso")
            navigate("/")
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
                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
            </form>
        </div>
    );
}
