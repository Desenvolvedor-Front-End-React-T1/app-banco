import { apiGet } from './api'

export function listarInvestimentos() {
    return apiGet('investimentos')
}