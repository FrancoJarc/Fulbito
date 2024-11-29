import { ReservaDueño } from "../../components/reserva/ReservaDueño";
import { ReservaJugador } from "../../components/reserva/ReservaJugador";
import { useAuth } from "../../context/AuthContext";

export function Reserva() {

    const { isLogueado, userLogueado } = useAuth();

    if (!userLogueado || !userLogueado.rol || !isLogueado) {
        return <h2>No podes acceder a esta página</h2>;
    }

    return (
        <>
            {userLogueado.rol === "jugador" ? (
                <ReservaJugador />
            ) : userLogueado.rol === "dueño" ? (
                <ReservaDueño />
            ) : (
                <h2>No podes acceder a esta página</h2>
            )}
        </>
    )
}