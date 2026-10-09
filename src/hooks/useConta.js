/**
 * Retorna o saldo da conta (variavel)
 * Retorna funcoes como: sacar, depositar, transferir
 */

import { useState } from 'react'

export function useConta() {

    const [saldo, setSaldo] = useState(1000)

    function sacar(valor) {
        if (valor > saldo) {
            throw new Error('Saldo insuficiente')
        }
        setSaldo(saldo - valor)
    }

    function depositar(valor) {
        setSaldo(saldo + valor)
    }

    function transferir(valor, destino) {
        sacar(valor)
        // destino.depositar(valor)
    }

    return { saldo, sacar, depositar, transferir }
}