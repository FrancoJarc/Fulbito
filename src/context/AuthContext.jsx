import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../utils/jwt";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setUser(null);
            return;
        }
        const decodedToken = decodeToken(token);

        if (decodedToken.exp < Date.now() / 1000) {
            localStorage.removeItem("token");
            setUser(null);
            return;
        }

        if (!decodedToken) {
            localStorage.removeItem("token");
            setUser(null);
            return;
        }

        setToken(token);
        setUser(decodedToken);
    }, []);

    const login = async (correo, contrasena, rol) => {

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ correo, contrasena, rol }),
        });

        if (response.ok) {
            const data = await response.json();

            localStorage.setItem("token", data.token);
            setToken(data.token);
            setUser(decodeToken(data.token));
            return true;
        } else {
            throw new Error("Error al iniciar sesión", response);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    
    }

   
    return (
        <AuthContext.Provider value={{
            /*isLogueado,*/
            login,
            logout,
            user,
            token
        }}>
            {children}
        </AuthContext.Provider>
    )
        
}



export const useAuth = () => useContext(AuthContext);