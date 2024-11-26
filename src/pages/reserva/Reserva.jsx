import { useAuth } from "../../context/AuthContext";

export function Reserva() {

    const { isLogueado } = useAuth();

    return (
        <>
            {isLogueado ? (
                <h2>Reserva pagina</h2>
            ) : (
                <h2> No podes acceder a esta pagina</h2>
            )}

        </>
    )




}