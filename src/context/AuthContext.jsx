// São funções e variáveis no escopo global da aplicação.

import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {

    // useStates (variaveis)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('reactbank:user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])


    // funcoes
    function login(email) {
        const loggedUser = {
            nome: 'Yan Esteves',
            email: email
        }

        setUser(loggedUser)
        localStorage.setItem('reactbank:user', JSON.stringify(loggedUser))
    }

    function logout() {
        setUser(null)
        localStorage.removeItem('reactbank:user')
    }


    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}