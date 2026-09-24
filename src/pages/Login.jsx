import { useTranslation } from 'react-i18next'
function Login() {
    const { t } = useTranslation()
    return (
        <>
            <input className="input-login" type="password" placeholder={t('login.inputSenha')} />
        </>
    )
}