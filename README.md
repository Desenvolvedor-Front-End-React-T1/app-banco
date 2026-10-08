# React + Vite (MODIFICADO)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Aplicação DE Banco

USUARIO ABC está com a conta bloquada. -> ContextAPI

- UserContext (nome, desde quando é cliente, foto, status da conta, email, cpf, chavesPixCadastradas, atualizarEmail(), atualizarFoto(), removerFoto(), alterarChavePix)
    - main.jsx
    - App.jsx
    - /components
        -> a menor parte de um sistema ou áreas reutilizáveis
        - renderizacao base de um cartao de credito
        - menu da aplicacao / toolbar
        - simulador do financiamento
        - card de investimentos (CDB banco do master - R$ 5000,00 - 2032)
        - card de cartoes (Bandeira, Validade, CVV, Numero do Cartao, Nome Vinculado)
    - /pages
        -> são espaços inteiros relacionados com as rotas (/cartoes, /financiamento)
        - /financiamento

        - /home
        - /meus-cartoes
        - /meus-investimentos




ATOMIC DESIGN
Button              → Atom
-SearchInput
 ├ Input
 └ Button            → Molecule
Header
 ├ Logo
 ├ SearchInput
 └ UserMenu          → Organism
HomeTemplate         → Template
HomePage             → Page

Feature Based Arch
/src
    /features
        /auth
            /pages            
                Login.jsx
                Cadastro.jsx
            /hooks
                useLogin.js
            /services
                authService.js
        /cart        
            /pages
                Carrinho.jsx            
            /hooks
            /services
        /pay 
            /pages
                PagamentoPage.jsx
                Sucesso.jsx
                Falha.jsx
            /hooks
                usePagamento.js

Component-Page Arch
/src
    /components
        /CartComponents
        /PagamentoComponents
    /Pages
        /Cart
        /Pagamento


i18n -> extra
build deploy
tdd
organizacao de projeto / scrum
tailwind + MUI
Conceito SOLID + testes avancados no react + CI/CD

recapitulei context api, protecao de rotas

vídeos extras:

Typescript *
Electron
React Native *

API + Banco de Dados


function BotaoAdicionar({ onAdicionar }) {
    return (
        <button onClick={onAdicionar}>Adicionar</button>
    )
}

function SearchBox({ onPesquisa }) {
    return (
        <input type="text" onChange={e => {onPesquisa(e.target.value)}} />
    )    
}

function App() {

    function adicionarProduto() {
        console.log('Produto adicionado')
    }

    function atualizarProdutos(produtoPesquisado) {
        console.log('usuario está pesquisando um produto')
    }

    return (
        <div>
            <SearchBox onPesquisa={atualizarProdutos}/>
            <h1>Produto X</h1>
             <BotaoAdicionar onAdicionar={adicionarProduto} />
        </div>
    )
}


código duplicado

// Código 1
const precoFinal = preco - preco * desconto / 100

// Código 2
const total = item.preco - item.preco * item.desconto / 100


IDEAL:

function calcularPrecoComDesconto(preco, desconto) {
    if (desconto < 0) {
        // console.error('Não é possível aplicar desconto negativo')
        return preco
    }
    const precoFinal = preco - preco * desconto / 100
    return precoFinal
}



No react

{isLoading && <p>Carregando aplicação</p>}
{listaFiltrada.length === 0 && return <span>Não tem itens para serem exibidos</span>}




1 Leio a tarefa da sprint
2 Abro uma branch
3 Executo a tarefa / codifico
4 Executar testes . Ex: vitest soma.test.js ou o github executa automaticamente
5 Fazer commits
6 Realizar PR / Merge Requests
7 De deixar a develop atualizada
8 Deploy da aplicação (main)

CI/CD



Construir uma funcao de saque para o cliente
- permitir o saque do dinheiro
- sob quais condições (if):
    1 - o cliente tem que ter o dinheiro ou limite disponivel
    2 - ele não pode sacar valor negativo (porque nao pode fazer isso?)
    3 - ele tem que estar com a conta ativa


TDD - Test drive development
Ao inves de construir a 'function', construimos inicialmente o teste
que valida a função.
Primeiro teste tem que falhar



-30
valor = dinheiros - saque

módulo na matematica -> é a distancia que um número tem em relação ao zero

-8 -> 8
8 -> 8

\/

valor = dinheiros - |saque|

if (saque < 0) {
    return erro
}
