import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isLogueado, setIsLogueado] = useState(
        localStorage.getItem("isLogueado") ? true : false
    );

    const [userLogueado, setUserLogueado] = useState(
        localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    )


    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log("Error al cargar los usuarios:", error));
    }, []);

    const login = (correo, password, rol) => {
        const user = users.find((user) => user.correo === correo && user.contraseña === password && user.rol === rol)

        if (!user) {
            return false;
        }

        setIsLogueado(true);
        localStorage.setItem("isLogueado", true);
        setUserLogueado(user);
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