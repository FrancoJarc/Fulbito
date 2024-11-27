import { Link } from "react-router-dom";


export function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh"}}>
            <form className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        className="form-control"
                        placeholder="Ejemplo@gmail.com"
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
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="rol" className="form-label">Rol</label>
                    <select name="rol" id="rol" className="form-select">
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
