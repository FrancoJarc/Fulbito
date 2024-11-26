import { useAuth } from "../../context/AuthContext";

export function Perfil() {

    const { isLogueado } = useAuth();

    return (
        <>
            {isLogueado ? (
                <h2>Perfil</h2>
            ) : (
                <h2> No podes acceder a esta pagina</h2>
            )}

        </>
    )




}