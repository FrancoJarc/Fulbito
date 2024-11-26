import { Cancha } from "../pages/cancha/Cancha";
import { Perfil } from "../pages/perfil/Perfil";
import { Reserva } from "../pages/reserva/Reserva";

export const appRoutes = [
    { path: "/cancha", element: <Cancha />, name: "Cancha" },
    { path: "/reserva", element: <Reserva />, name: "Reserva" },
    { path: "/perfil", element: <Perfil />, name: "Perfil" },
    
]