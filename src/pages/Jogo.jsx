import { useState, useEffect } from "react";
function Jogador({ nome, pontos, adicionarPonto, cor }) {
  return (
    <div className={`flex-1 text-center ${cor} p-6 rounded-xl`}>

      <h2 className="text-2xl font-bold">
        {nome}
      </h2>

      <p className="text-7xl font-bold my-6">
        {pontos}
      </p>

      <button
        onClick={adicionarPonto}
        className="bg-slate-800 text-white px-6 py-3 rounded-lg"
      >
        +1 ponto
      </button>

    </div>
  );
}

function Jogo() {
   const [bola, setBola] = useState({
    x: 50,
    y: 50,
    velocidadeX: 1,
    velocidadeY: 1,
  });

  const [jogador1, setJogador1] = useState(40);
  const [jogador2, setJogador2] = useState(40);

  const [placar1, setPlacar1] = useState(0);
  const [placar2, setPlacar2] = useState(0);

  // Movimento das raquetes
  useEffect(() => {
    function movimentar(event) {
      // Jogador 1: W e S
      if (event.key === "w") {
        setJogador1((posicao) => Math.max(posicao - 5, 0));
      }

      if (event.key === "s") {
        setJogador1((posicao) => Math.min(posicao + 5, 80));
      }

      // Jogador 2: ArrowUp e ArrowDown
      if (event.key === "ArrowUp") {
        setJogador2((posicao) => Math.max(posicao - 5, 0));
      }

      if (event.key === "ArrowDown") {
        setJogador2((posicao) => Math.min(posicao + 5, 80));
      }
    }

    window.addEventListener("keydown", movimentar);

    return () => {
      window.removeEventListener("keydown", movimentar);
    };
  }, []);

  // Movimento da bola
  useEffect(() => {
    const intervalo = setInterval(() => {
      setBola((bolaAtual) => {
        let novaX = bolaAtual.x + bolaAtual.velocidadeX;
        let novaY = bolaAtual.y + bolaAtual.velocidadeY;

        let velocidadeX = bolaAtual.velocidadeX;
        let velocidadeY = bolaAtual.velocidadeY;

        // Bateu em cima ou embaixo
        if (novaY <= 0 || novaY >= 96) {
          velocidadeY *= -1;
        }

        // Colisão com jogador 1
        if (
          novaX <= 6 &&
          novaY >= jogador1 &&
          novaY <= jogador1 + 20
        ) {
          velocidadeX = Math.abs(velocidadeX);
        }

        // Colisão com jogador 2
        if (
          novaX >= 92 &&
          novaY >= jogador2 &&
          novaY <= jogador2 + 20
        ) {
          velocidadeX = -Math.abs(velocidadeX);
        }

        // Jogador 2 marcou
        if (novaX < 0) {
          setPlacar2((placar) => placar + 1);

          return {
            x: 50,
            y: 50,
            velocidadeX: 1,
            velocidadeY: 1,
          };
        }

        // Jogador 1 marcou
        if (novaX > 100) {
          setPlacar1((placar) => placar + 1);

          return {
            x: 50,
            y: 50,
            velocidadeX: -1,
            velocidadeY: 1,
          };
        }

        return {
          x: novaX,
          y: novaY,
          velocidadeX,
          velocidadeY,
        };
      });
    }, 30);

    return () => clearInterval(intervalo);
  }, [jogador1, jogador2]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">
        🏓 Pong em React
      </h1>

      <div className="flex gap-10 text-3xl font-bold mb-4">
        <p>Jogador 1: {placar1}</p>
        <p>Jogador 2: {placar2}</p>
      </div>

      <div className="relative w-[800px] h-[500px] bg-green-700 border-4 border-white overflow-hidden">

        {/* Linha central */}
        <div className="absolute left-1/2 top-0 h-full border-l-4 border-dashed border-white/50" />

        {/* Jogador 1 */}
        <div
          className="absolute left-4 w-4 h-24 bg-white rounded"
          style={{
            top: `${jogador1}%`,
          }}
        />

        {/* Jogador 2 */}
        <div
          className="absolute right-4 w-4 h-24 bg-white rounded"
          style={{
            top: `${jogador2}%`,
          }}
        />

        {/* Bola */}
        <div
          className="absolute w-6 h-6 bg-yellow-300 rounded-full"
          style={{
            left: `${bola.x}%`,
            top: `${bola.y}%`,
          }}
        />
      </div>

      <div className="mt-6 text-center">
        <p>
          Jogador 1: <strong>W / S</strong>
        </p>

        <p>
          Jogador 2: <strong>↑ / ↓</strong>
        </p>
      </div>
    </div>
  );
}

export default Jogo