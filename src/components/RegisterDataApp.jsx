import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterDataApp = ({ onRegister, body }) => {
    const { register, handleSubmit } = useForm();
    const onSave = (data) => {
        onRegister(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSave)} className='shadow p-4 max-w-lg mt-10 mx-auto mb-4'>
                <h1 className='font-bold text-xl text-center'>CAJA - MUNICIPALIDAD DISTRITAL DE PISACOMA</h1>
                <p className='mt-3 text-center text-sm mb-8'>Solo acceso a personal autorizado</p>
                <div className='input-group'>
                    <input {...register('nombre', { required: true })} type="text" className='input-field' placeholder='' defaultValue={body && body.nombre} />
                    <label className='input-label'>Nombre completo</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.dni}
                        type="text" {...register('dni', { required: true })} className='input-field' placeholder='' />
                    <label className='input-label'>Número de documento</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.domicilio}
                        type="text" {...register('domicilio', { required: true })} className='input-field' placeholder='' />
                    <label className='input-label'>Domicilio actualizado</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.telefono}
                        type="text" className='input-field' {...register('telefono')} placeholder='' />
                    <label className='input-label'>Telefono celular</label>
                </div>
                <button className='w-full py-3 mt-5 bg-slate-600 text-white rounded'>SIGUIENTE</button>
                <p className="mt-5 text-sm text-center text-gray-500">
                    Verificar la informacion del contribyente muchas veces para garantizar su registro correcto
                </p>
            </form>
        </div>

    )
}
