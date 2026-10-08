import '@testing-library/jest-dom/vitest';
import './i18n'
import { afterEach, vi } from 'vitest'
afterEach(() => {   
    localStorage.clear()
    vi.clearAllMocks()
})