import { Cancha } from "../pages/cancha/Cancha";
import { Login } from "../pages/login/Login";
import { Perfil } from "../pages/perfil/Perfil";
import { Registrarse } from "../pages/registrarse/Registrarse";
import { Reserva } from "../pages/reserva/Reserva";

export const appRoutes = [
    { path: "/cancha", element: <Cancha />, name: "Cancha" },
    { path: "/reserva", element: <Reserva />, name: "Reserva" },
    { path: "/perfil", element: <Perfil />, name: "Perfil" },
]

export const logueoRuotes = [
    { path: "/", element: <Login />, name: "Login" },
    { path: "/registrarse", element: <Registrarse />, name: "Registrarse" },
]