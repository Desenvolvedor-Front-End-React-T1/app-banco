// Construir uma funcao de saque para o cliente
// - permitir o saque do dinheiro
// - sob quais condições (if):
//     1 - o cliente tem que ter o dinheiro ou limite disponivel
            // - permite sacar um valor se ele tiver dinheiro suficiente ([dinheiro+limite] >= valorSaque)
//     2 - ele não pode sacar valor negativo (porque nao pode fazer isso?)
//     3 - ele tem que estar com a conta ativa

import { describe, it, expect } from 'vitest'

// describe -> agrupa os testes
// it -> descreve o teste ('estou testando se o usuário bloqueado pode sacar')
// expect -> faz a validação do teste
// toBe -> valida se o resultado é igual ao esperado
// toBeCloseTo -> valida se o resultado é próximo do esperado (para números decimais)
function saque(valorSaque) {
    const saldo = 500 // saldo do cliente
    const limite = 200 // limite do cliente

    const totalDisponivel = saldo + limite

    if (valorSaque < 0) {
        // return 'Valor de saque inválido'
        throw new Error('Valor de saque inválido')
    }

    if (valorSaque > totalDisponivel) {
        // return 'Saldo insuficiente'
        throw new Error('Saldo insuficiente')
    }

    return 'Saque realizado com sucesso'
}

describe('Testando a função saque', () => {
    
    it('Não permite sacar valor negativo', () => {
        // expect(saque(-100)).toBe('Valor de saque inválido')
        expect(() => saque(-100)).toThrow('Valor de saque inválido')
    })

    it('Não permite sacar se o cliente não tiver dinheiro suficiente', () => {
        // expect(saque(1000)).toBe('Saldo insuficiente')
        expect(() => saque(1000)).toThrow('Saldo insuficiente')
    })

    it('Permite sacar se o cliente tiver dinheiro suficiente', () => {
        expect(saque(500)).toBe('Saque realizado com sucesso')
    })

})