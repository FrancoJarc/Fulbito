import { useAuth } from "../../context/AuthContext"
import { Login } from "../../pages/login/Login";

function Navbar() { 
    const { isLogueado, login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const correo = document.getElementById("correo");
        const password = document.getElementById("password");
        const rol = document.getElementById("rol");

        if (!correo.value || !password.value || !rol.value) {
            alert("Complete todos los datos");
            return;
        }

        const respuesta = login(correo.value, password.value, rol.value);

        if (!respuesta) {
            alert("Datos incorrectos");
            return;
        }

        alert("Inicio de sesión correcto")

    }
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fulbito</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../../pages/cancha/Cancha.jsx">Cancha</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alquiler</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Perfil</a>
                        </li>
                    </ul>
                </div>
                {!isLogueado ? (
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="correo" id="correo" placeholder="Ejemplo@gmail.com"></input>
                        <input type="password" name="password" id="password" ></input>
                        <select name="rol" id="rol">
                            <option value="jugador">Jugador</option>
                            <option value="dueño">Dueño</option>
                        </select>
                        <button>Iniciar Sesion</button>
                    </form>
                ) : (
                    <button>Cerrar sesion</button>
                )}

            </div>
        </nav>
    )
}

export { Navbar }