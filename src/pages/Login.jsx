import { useState } from 'react'
import { useTranslation } from 'react-i18next'
function Login() {
    const { t } = useTranslation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <form>
                <h1>Banco do Senai</h1>

                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Informe seu e-mail"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Informe sua senha"/>

                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login