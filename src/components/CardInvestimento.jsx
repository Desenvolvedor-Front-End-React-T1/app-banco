import { formatarMoeda } from "../utils/formatarMoeda";
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
function CardInvestimento({ investimento }) {
    return (
        // background: bg-blue-300
        // cor da fonte: text-gray-500
        // flex flex-col 
        // cantos arredondados: rounded-lg
        // text-xs, text-sm, text-md, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl
        <div key={investimento.id} className="flex flex-col gap-1 rounded-lg p-4 border shadow-sm">
            <span className="text-xs font-semibold uppercase text-gray-500">{investimento.tipo}</span>
            <h2 className="text-lg font-bold">{investimento.nome}</h2>
            <span>Banco: {investimento.banco.nome}</span>
            <span>Valor Minimo: {formatarMoeda(investimento.valorMinimo)}</span>
            <span>Rentabilidade 12 meses: {investimento.rentabilidade12meses}</span>
            <button className="mt-2 bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">Investir</button>
        </div>
    )
}

export default CardInvestimento