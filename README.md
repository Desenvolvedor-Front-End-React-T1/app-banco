# React + Vite

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