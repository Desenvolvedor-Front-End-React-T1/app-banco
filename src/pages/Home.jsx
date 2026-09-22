import CardCartao from '../components/CardCartao'
import CardInvestimento from '../components/CardInvestimento'
import { useUser } from '../context/UserContext'

function Home() {

    const { atualizarEmail, usuario } = useUser()

    return (
        <>
            <h1 className="text-3xl font-bold underline">Banco do Senai</h1>
            <h2>Bem vindo, {usuario.nome}</h2>
            <h4>Sua conta está: {usuario.statusConta}</h4>
            <CardCartao />

            <CardInvestimento />

            <button>Atualizar e-mail</button>
        </>
    )
}

export default Home