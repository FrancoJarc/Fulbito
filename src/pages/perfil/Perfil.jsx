import { useAuth } from "../../context/AuthContext";

export function Perfil() {

    const { isLogueado, userLogueado } = useAuth();

    return (
        <>
            {isLogueado && userLogueado ? (

                <div>
                    <h2 className="text-center mb-4">Perfil de Usuario</h2>
                    <div className="card shadow-sm p-4">
                        <p><strong>Correo:</strong> {userLogueado.correo}</p>
                        <p><strong>Rol:</strong> {userLogueado.rol}</p>
                    </div>
                </div>
            ) : (
                <h2> No podes acceder a esta pagina</h2>
            )}

        </>
    )




}