import { useUser } from '../context/UserContext'
import { useTranslation } from 'react-i18next'

function Home() {

    const { t } = useTranslation()

    const { atualizarEmail, usuario } = useUser()

    return (
        <>
            {/* <h2>Bem vindo, {usuario.nome}</h2> */}

            <h2>{t('home.welcome')}</h2>

            <input placeholder={t('login.inputEmail')} />

        </>
    )
}

export default Home