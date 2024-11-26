export function Cancha() {

    const { isLogueado } = useAuth();

    return (
        <>
            {isLogueado ? (
                <h2>Canchas paginas</h2>
            ) : (
                <h2> No podes acceder a esta pagina</h2>
            )}

        </>
    )




}