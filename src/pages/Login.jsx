import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// TAILWIND

function Login() {
    const { t } = useTranslation()

    return (  
    //Como definir linha no CSS: display: flex;
      <div className='flex min-h-screen'>
      
        {/* COLUNA A */}
        {/* Background no css: background: nome_cor 
            Definir background no tailwind: bg-NOMECOR-INTENSIDADE */}
        <div className='w-1/2 bg-blue-700 text-white p-16'>
        {/* font-size: 32px; -> text-3xl */}
            <h1 className='text-3xl font-bold'>ReactBank</h1>
            <div>
                <h2 className='text-5xl font-bold leading-tight'>
                    Seu banco.
                    <br/>
                    Simples.
                    <br/>
                    Digital
                </h2>

                <p className='mt-6 max-w-md text-blue-100'>Controle sua conta, seus cartões e investimentos em um só lugar.</p>
            </div>
            
        </div>

        {/* COLUNA B */}
        <div className='flex flex-1 items-center justify-center bg-slate-50 p-6'>
            <div className='w-full max-w-md'>
                <h1 className='text-3xl font-bold'>Entrar</h1>
                <p className='text-slate-500 mb-8'>Entre na sua conta React Bank</p>

                {/* FORM */}
                <form className='space-y-5'>
                    <div>
                        <label className='block text-sm font-medium mb-2'>E-mail</label>
                        <input className='w-full border border-slate-300 p-4 rounded-lg outline-none focus:border-blue-500'
                            type="email" placeholder='Digite seu e-mail' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-2'>Senha</label>
                        <input className='w-full border border-slate-300 p-4 rounded-lg outline-none focus:border-blue-500'
                            type="password" placeholder='Digite sua senha' required />
                    </div>
                    
                    <button className='bg-blue-600 text-white w-full py-4 rounded-lg font-semibold hover:bg-blue-700'>Entrar</button>
                </form>

                <p className='mt-6 text-center text-sm text-slate-500'>
                    Ainda nao possui conta? <span className='font-medium text-blue-600'>Cadastre-se</span>
                </p>
            </div>

            {/*  Cadastre-se */}
        </div>
      </div>
    )
}

export default Login