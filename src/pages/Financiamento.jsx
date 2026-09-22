import { useUser } from '../context/UserContext'
function Financiamento() {
    const {  usuario } = useUser()

    return (
        <>
        <h1>Área de Financiamento</h1>
        <h2>Oi, {usuario.nome}, confira os novos financiamentos disponíveis</h2>
        </>
    )
}

export default Financiamento