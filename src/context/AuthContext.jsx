import { createContext, useContext, useState } from "react";

const users = [
    { id: 1, correo: "jugador@gmail.com", contraseña: "jugador", rol: "jugador" },
    { id: 2, correo: "dueño@gmail.com", contraseña: "dueño", rol: "dueño" }

]

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLogueado, setIsLogueado] = useState(
        localStorage.getItem("isLogueado") ? true : false
    );

    const [userLogueado, setUserLogueado] = useState(
        localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    )

    const login = (correo, password, rol) => {
        const user = users.find((user) => user.correo === correo && user.contraseña === password && user.rol === rol)

        if (!user) {
            return false;
        }

        /*if (correo !== "jugador@gmail.com" || password !== "jugador" || rol !== "jugador") {
            return false;
        }*/
        setIsLogueado(true);
        setUserLogueado(user);
        localStorage.setItem("isLogueado", true);
        localStorage.setItem("user", JSON.stringify(user))
        return true;
    }

    const logout = () => {
        setIsLogueado(false);
        localStorage.removeItem("isLogueado");
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{
            isLogueado,
            login,
            logout,
            userLogueado
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);