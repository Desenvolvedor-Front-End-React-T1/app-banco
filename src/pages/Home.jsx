import { useUser } from '../context/UserContext'
import { useTranslation } from 'react-i18next'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
function Home() {

    const { t } = useTranslation()

    const { atualizarEmail, usuario } = useUser()

    return (
        <>
            <h1 className="text-3xl font-bold underline">Banco do Senai (21:22)</h1>
            <Button variant="outlined" color="warning">Tentar Novamente</Button>
            <Alert severity="warning">
                Pagamento não aprovado.
            </Alert>

            {/* <h2>Bem vindo, {usuario.nome}</h2> */}

            <h2>{t('home.welcome')}</h2>

            <input placeholder={t('login.inputEmail')} />
            {/* 
            <h4>Sua conta está: {usuario.statusConta}</h4>
            <CardCartao />

            <CardInvestimento />

            <button>Atualizar e-mail</button> */}
        </>
    )
}

export default Home