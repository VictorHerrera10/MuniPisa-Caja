import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContextApp';
import { useNavigate } from 'react-router-dom';
import { showInfoToast } from '../utils/showInfoToast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
export const RegisterApp = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const signUp = (data) => {
        if (!isLoading) {
            setIsLoading(true);
            if (data.password !== data.confirm_password) {
                showInfoToast('Las contraseñas no coinciden');
                setIsLoading(false);
                return;
            }
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then(async (res) => {
                    showInfoToast("Correo de verificación enviado. Por favor, revisa tu bandeja de entrada.");
                    navigate('/home');
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        showInfoToast("Correo electrónico en uso");
                    } else {
                        showInfoToast(error.code.split('/')[1].split('-').join(' '));
                    }
                    setIsLoading(false);
                });
        }
    };


    return (
        <div className='grid md:grid-cols-2 h-screen'>
            <div className='bg-slate-50'>
                <form onSubmit={handleSubmit(signUp)} className="bg-white mt-10 shadow max-w-lg mx-auto p-7 px-10 rounded">
                    <div className='flex justify-between'>
                        <span>CAJA - MiniPisa</span>
                        <span>¿No tienes una cuenta? <a href='#' onClick={() => navigate('/login')} className='underline'>Sign in</a></span>
                    </div>
                    <h1 className='text-center mt-10 text-4xl'>Registro</h1>
                    <div className='input-group'>
                        <input {...register('name', { required: true })} type="text" className='input-field' placeholder='' />
                        <label className='input-label'>Ingresa tu nombre y apellido</label>
                    </div>
                    <div className='input-group'>
                        <input {...register('email', { required: true })} type="text" className='input-field' placeholder='' />
                        <label className='input-label'>Ingresa tu correo electrónico</label>
                    </div>
                    <div className='input-group'>
                        <input {...register('password', { required: true })} type="password" className='input-field' placeholder='' />
                        <label className='input-label'>Ingresa una contraseña</label>
                    </div>
                    <div className='input-group'>
                        <input {...register('confirm_password', { required: true })} type="password" className='input-field' placeholder='' />
                        <label className='input-label'>Confirmar contraseña</label>
                    </div>
                    <button
                        className='bg-slate-600 w-full text-white py-3 mt-7 rounded transition hover:brightness-105'>
                        {isLoading ? 'Cargando..' : 'Registrar'}
                    </button>
                    <div className='grid grid-cols-4 gap-2 mt-10'>
                        <button className='col-span-2 bg-slate-300 py-2 rounded'>
                            <i className="fa-brands fa-google me-2"></i>Sign in with Google</button>
                        <button className='col-span-1 bg-slate-300 py-2 rounded'><i className="fa-brands fa-facebook text-xl"></i></button>
                        <button className='col-span-1 bg-slate-300 py-2 rounded'><i className="fa-brands fa-apple text-xl"></i></button>
                    </div>
                </form>
            </div>
            <div className='bg-slate-700 flex items-center justify-center'>
                <img src={require('../assets/llama2.png')} alt="llama" />
            </div>
        </div>
    )
}
