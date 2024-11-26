import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) { 
    const [isLogueado, setIsLogueado] = useState(false);

    const login = (correo,password,rol) => { 
        if (correo !== "jugador@gmail.com" || password !== "jugador" || rol !== "jugador") {
            return false;
        }
        setIsLogueado(true);
        return true;
    }

    const logout = () => { 
        setIsLogueado(false);
    }

    return (
        <AuthContext.Provider value={{
            isLogueado,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);