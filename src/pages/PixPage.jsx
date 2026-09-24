import { useUser } from "../context/UserContext"
import { useTranslation } from 'react-i18next'
function PixPage() {
    const { t } = useTranslation()
    const { usuario } = useUser()

    return (
        <>
            <h1>Área Pix</h1>

            {usuario.statusConta === 'bloqueada' ?
                <span>{t('erros.conta_bloqueada')}</span>
                : <>
                    {usuario.chavesPixCadastradas.map(item =>
                        <span>{item.tipo} - {item.valor}</span>
                    )}
                </>}
        </>
    )
}

export default PixPage

// DESAFIO CONTEXT API + PAGE DINAMICA

// Quero que seja construída uma página de PIX. (OK)
// O objetivo da página é exibir as chaves pix do usuário.
//     - Pode ser com tags ul - li
//     - Pode ser com um outro componente chamado ChavePix.jsx

// Não devem ser exibidas as chaves SE a conta tiver BLOQUEADA.

// Então:

// Se a conta estiver bloqueada, vai ser exibido:
//     - Sua conta está bloqueada, não é possível visualizar as chaves.

// Se a conta estiver como ativa, será exibida todas as chaves pix do usuário.

// PERGUNTAS/RESPOSTAS
// - Como fazer "if/else/ternario" na parte HTML do react?
//     <>
//         {variavel === 'bloqueada' ? FAZ_ALGO : FAZ_OUTRA_COISA}
//     </>

// - Como exibir uma lista no react?
//     <>
//         {variavel.map(item =>
//             <span>{item}</span>
//         )}
//     </>