import CardInvestimento from '../components/CardInvestimento'
import { useInvestimentos } from '../hooks/useInvestimentos'

function Investimentos() {
    const { investimentos } = useInvestimentos()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Investimentos</h1>

            {/* maximo de colunas : 12 unidades */}
            <div className="grid gap-4 grid-cols-3">
                {investimentos.map((investimento) => (                    
                    <CardInvestimento key={investimento.id} investimento={investimento} />
                ))}
            </div>
        </div>
    )
}

export default Investimentos