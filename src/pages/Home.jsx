import CardCartao from '../components/CardCartao'
import CardInvestimento from '../components/CardInvestimento'
import { useUser } from '../context/UserContext'
import { useTranslation } from 'react-i18next'

function Home() {

    const { t } = useTranslation()

    const { atualizarEmail, usuario } = useUser()

    return (
        <>
            <h1 className="text-3xl font-bold underline">Banco do Senai</h1>
            {/* <h2>Bem vindo, {usuario.nome}</h2> */}
        
            <h2>{ t('home.welcome') }</h2>
            
            <input placeholder={t('login.inputEmail')}/>
{/* 
            <h4>Sua conta está: {usuario.statusConta}</h4>
            <CardCartao />

            <CardInvestimento />

            <button>Atualizar e-mail</button> */}
        </>
    )
}

export default Home