// - UserContext 
// Variáveis: nome, desde quando é cliente, foto, status da conta, email, cpf, chavesPixCadastradas, 
// Funcoes: atualizarEmail(), atualizarFoto(), removerFoto(), alterarChavePix()

import { createContext, useState, useContext } from "react";


// Criar o context em si
const UserContext = createContext(null)

const usuarioInicial = {
    nome: 'ABC',
    clienteDesde: '2019-03-15',
    foto: null,
    statusConta: 'bloqueada', // ativa, bloqueada, encerrada
    email: 'abc@banco.com',
    cpf: '123.456.789-00',
    chavesPixCadastradas: [
        { id: 1, tipo: 'email', valor: 'abc@banco.com'}
    ]
}

const usuariosPossiveis = [
    {
        nome: 'Kauan',
        email: 'kauan@banco.com',
        password: '123456'
    }
]

// Criar um provider (o provedor dessas funções e variáveis 'públicas')
export function UserProvider({ children }) {

    const [usuario, setUsuario] = useState(usuarioInicial)

    function atualizarEmail(novoEmail) {
        setUsuario({
            ...usuario,
            email: novoEmail
        })
    }

    async function fazLogin(email, senha) {
        const encontrado = usuariosPossiveis.find(usuario => usuario.user ===  email && usuario.password === senha)
        setUsuario(encontrado)
    }

    // derivando valor - explicar depois
    // const contaBloqueada = usuario.statusConta === 'bloqueada'


    return <UserContext.Provider value={{ atualizarEmail, usuario, fazLogin }}>
        {children}
    </UserContext.Provider>
}

export function useUser() {
    return useContext(UserContext)
}