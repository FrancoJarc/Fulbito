import { useAuth } from "../../context/AuthContext";

export function Perfil() {

    const { user } = useAuth();

    if (!user) {
        return <h2>No tienes acceso a esta página</h2>;
    }

    return (
        <div>
            <h2 className="text-center mb-4">Perfil de Usuario</h2>
            <div className="card shadow-sm p-4">
                <p><strong>Nombre:</strong> {user.nombre}</p>
                <p><strong>Apellido:</strong> {user.apellido}</p>
                <p><strong>DNI:</strong> {user.dni}</p>
                <p><strong>Teléfono:</strong> {user.telefono}</p>
                <p><strong>Correo:</strong> {user.correo}</p>
                <p><strong>Rol:</strong> {user.rol}</p>
            </div>
        </div>
    )




}