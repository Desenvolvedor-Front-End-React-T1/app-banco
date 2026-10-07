import {soma} from '../services/soma.js'
import { describe, it, expect } from 'vitest'

// describe -> agrupa os testes
// it -> descreve o teste ('estou testando se o usuário bloqueado pode sacar')
// expect -> faz a validação do teste
// toBe -> valida se o resultado é igual ao esperado
// toBeCloseTo -> valida se o resultado é próximo do esperado (para números decimais)

describe('Testando a função soma', () => {
    it('Deve retornar 5 quando somar 2 e 3', () => {
        // expect(x).toBe(y) -> valida se a resposta de X é igual a y
        expect(soma(2, 3)).toBe(5)
    })

    it('Soma com 0', () => {
        expect(soma(7, 0)).toBe(7)
    })

    it('Soma com números negativos', () => {
        expect(soma(-2, -3)).toBe(-5)
    })

    it('Soma com números decimais', () => {        
        expect(soma(0.1, 0.2)).toBeCloseTo(0.3)
    })

})