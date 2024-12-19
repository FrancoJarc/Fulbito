import { ReservaDueño } from "../../components/reserva/ReservaDueño";
import { ReservaJugador } from "../../components/reserva/ReservaJugador";
import { useAuth } from "../../context/AuthContext";

export function Reserva() {
    const { user, token } = useAuth();

    if (!user || !user.rol || !token) {
        return <h2>No podes acceder a esta página</h2>;
    }

    return (
        <>
            {user.rol === "jugador" ? (
                <ReservaJugador />
            ) : user.rol === "dueno" ? (
                <ReservaDueño />
            ) : (
                <h2>No podes acceder a esta página</h2>
            )}
        </>
    );
}