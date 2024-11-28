import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { Login } from "../../pages/login/Login";
import { appRoutes } from "../../routes/routes";

function Navbar() { 
    const { isLogueado, login, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fulbito</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {appRoutes.map(route => (
                            <li className="nav-item" key={route.name}>
                                <Link className="nav-link" to={route.path}>
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {isLogueado ? (
                        <button onClick={() => { logout(); navigate("/"); }} className="btn btn-danger">
                            Cerrar sesión
                        </button>
                    ) : (
                            <button onClick={() => navigate("/")} className="btn btn-danger">
                            Iniciar sesion
                        </button>
                    )}
                </div>



            </div>
        </nav>
    )
}

export { Navbar }