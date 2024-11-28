import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


export function Login() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData ] = useState({
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

        const user = users.find(
            (u) =>
                u.correo === formData.correo &&
                u.contraseña === formData.password &&
                u.rol === formData.rol
        );

        if (!user) {
            alert("Credenciales incorrectas. Verifique los datos ingresados.");
            return;
        }

        alert("Inicio de sesión exitoso");
        localStorage.setItem("user", JSON.stringify(user)); 
        localStorage.setItem("isLogueado", true); 
    }

    const updateData = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]:value
        })

     }




    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh"}}>
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
