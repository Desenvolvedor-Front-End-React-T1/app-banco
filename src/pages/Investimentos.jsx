import { useState, useEffect } from 'react'
// Modelagem de Dados para Investimentos
// {
//     id: 0,
//     nome: 'CDB do Banco Master',
//     tipo: 'CDB',
//     valorMinimo: 10,
//     rentabilidade12meses: 680,
//     banco: {
//         id: 0,
//         nome: 'Banco Master'
//     }
// }
function Investimentos() {

    const [investimentos, setInvestimentos] = useState([
        {
            id: 0,
            nome: 'CDB do Banco Master',
            tipo: 'CDB',
            valorMinimo: 10,
            rentabilidade12meses: 680,
            banco: {
                id: 0,
                nome: 'Banco Master'
            }
        }
    ])

    // array de dependencias vazio
    // Faz com que seja executado apenas 1 vez, quando o componente for montado
    useEffect(() => {

        // para realizar o fetch / GET na api
        // eu jogo o dado para dentro de uma variável
        // verifico que o dado é valido 
        // salvo este dado em um useState para que seja renderizado na tela

        async function fetchInvestimentos() {
            // await
            console.log('buscando investimentos na api')

            try {
                const response = await fetch('http://localhost:3000/investimentos')

                // O fetch não da erro quando for 404/500 , então faz a verificação no if abaixo
                if (!response.ok) {
                    throw new Error('Erro ao buscar investimentos na API ' + response.status)
                }

                const dados = await response.json()

                console.log('Resposta da API de investimentos')
                console.log(dados)

                setInvestimentos(dados)


            } catch (error) {
                console.error('Erro ao buscar investimentos:', error)
            }
        }

        fetchInvestimentos()

    }, [])

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Investimentos</h1>

            {/* maximo de colunas : 12 unidades */}
            <div className="grid gap-4 grid-cols-3">
                {investimentos.map((investimento) => (
                    // background: bg-blue-300
                    // cor da fonte: text-gray-500
                    // flex flex-col 
                    // cantos arredondados: rounded-lg
                    // text-xs, text-sm, text-md, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl
                    <div key={investimento.id} className="flex flex-col gap-1 rounded-lg p-4 border shadow-sm">
                        <span className="text-xs font-semibold uppercase text-gray-500">{investimento.tipo}</span>
                        <h2 className="text-lg font-bold">{investimento.nome}</h2>
                        <span>Banco: {investimento.banco.nome}</span>
                        <span>Valor Minimo: {investimento.valorMinimo}</span>
                        <span>Rentabilidade 12 meses: {investimento.rentabilidade12meses}</span>
                        <button className="mt-2 bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Investir</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Investimentos