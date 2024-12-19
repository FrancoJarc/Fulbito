import { Cancha } from "../pages/cancha/Cancha";
import { EditarCancha } from "../pages/cancha/EditarCancha";
import { ReservaForm } from "../pages/cancha/ReservaForm";
import { Login } from "../pages/login/Login";
import { Perfil } from "../pages/perfil/Perfil";
import { Registrarse } from "../pages/registrarse/Registrarse";
import { Reserva } from "../pages/reserva/Reserva";

export const appRoutes = [
    { path: "/cancha", element: <Cancha />, name: "Cancha" },
    { path: "/reserva", element: <Reserva />, name: "Reserva" },
    { path: "/perfil", element: <Perfil />, name: "Perfil" },


]

export const appRoutesSinMenu = [
    { path : "/editar/:id" ,element: < EditarCancha />, name:"Editar" },
    { path: "/reservas", element: <ReservaForm />, name: "Reservas" },
]


export const logueoRuotes = [
    { path: "/", element: <Login />, name: "Login" },
    { path: "/registrarse", element: <Registrarse />, name: "Registrarse" },
]