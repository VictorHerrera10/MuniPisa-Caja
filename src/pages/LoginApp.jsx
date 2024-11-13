import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { showInfoToast } from '../utils/showInfoToast';
import { AuthContext } from '../contexts/AuthContextApp';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export const LoginApp = () => {
    const { auth, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user])
    const onSubmit = (data) => {
        if (!isLoading) {
            setIsLoading(true);
            signInWithEmailAndPassword(auth, data.email.trim(), data.password.trim())
                .then((res) => {
                    if (res.user.emailVerified) {
                        navigate('/home');
                    } else {
                        showInfoToast("Por favor, verifica tu correo antes de iniciar sesión.");
                        setIsLoading(false)
                    }
                })
                .catch((error) => {
                    if (error.code === 'auth/invalid-login-credentials') {
                        showInfoToast("Las credenciales son inválidas");
                    } else if (error.code === 'auth/too-many-requests') {
                        showInfoToast("Demasiados intentos fallidos. Por favor, intenta más tarde.");
                    } else {
                        showInfoToast(error.code.split('/')[1].split('-').join(' '));
                    }
                    setIsLoading(false);
                });
        }
    };
    return (
        <div className='grid md:grid-cols-2 h-screen'>
            <div className='bg-slate-700 flex items-center justify-center'>
                <img src={require('../assets/llama.png')} alt="llama" />
            </div>
            <div className='bg-slate-50'>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white mt-10 shadow max-w-lg mx-auto p-7 px-10 rounded">
                    <div className='flex justify-between'>
                        <span>CAJA - MiniPisa</span>
                        <span>¿No tienes una cuenta? <a href="#" onClick={() => navigate('/register')} className='underline'>Sign up</a></span>
                    </div>
                    <h1 className='text-center mt-10 text-4xl'>Iniciar sesión</h1>
                    <br />
                    <div className='input-group'>
                        <input autoComplete='off' {...register('email')} type="text" className='input-field' placeholder='' />
                        <label className='input-label'>Ingresa tu correo electrónico</label>
                    </div>
                    <div className='input-group'>
                        <input type="password" {...register('password')} className='input-field' placeholder='' />
                        <label className='input-label'>Ingresa tu contraseña</label>
                    </div>

                    <div className='mt-3 text-end'>
                        <a href="/forgot" className='text-orange-500 underline text-sm'>¿Olvidaste tu contraseña</a>
                    </div>
                    <button className='bg-slate-600 w-full text-white py-3 mt-7 rounded transition hover:brightness-105'>
                        {isLoading ? 'Cargando..' : 'Entrar'}</button>
                    <div className='grid grid-cols-4 gap-2 mt-16'>
                        <button className='col-span-2 bg-slate-300 py-2 rounded'><i className="fa-brands fa-google me-2"></i>Sign in with Google</button>
                        <button className='col-span-1 bg-slate-300 py-2 rounded'><i className="fa-brands fa-facebook text-xl"></i></button>
                        <button className='col-span-1 bg-slate-300 py-2 rounded'><i className="fa-brands fa-apple text-xl"></i></button>
                    </div>
                </form>
            </div>

        </div>
    )
}
