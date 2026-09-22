function Cliente({ nome, email, statusConta, valorConta, funcaoSaque }) {
    return (
        <>
            <span>Componente Cliente</span>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Valor da Conta: R$ {valorConta.toFixed(2)}</p>
            <p>Status da Conta: {statusConta}</p>

            {/* <button onClick={funcaoSaque}>Saque</button> */}
            <button onClick={() => funcaoSaque(100)}>Sacar R$ 100,00</button>
            <button onClick={() => funcaoSaque(200)}>Sacar R$ 200,00</button>
        </>
    )   
}

export default Cliente