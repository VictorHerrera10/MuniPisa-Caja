import React from 'react'
import { useForm } from 'react-hook-form';

export const RegisterServiceApp = ({ onRegister, body }) => {
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
                    <input
                        defaultValue={body && body.codigo}
                        {...register('codigo', { required: true })} type="text" className='input-field' placeholder='' />
                    <label className='input-label'>Código de pago</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.concepto}
                        {...register('concepto', { required: true })} type="text" className='input-field' placeholder='' />
                    <label className='input-label'>Concepto de servicio</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.cantidad}
                        type="number" className='input-field' {...register('cantidad', { required: true })} placeholder='' />
                    <label className='input-label'>Cantidad</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.valor_unitario}
                        type="number" step={0.01} className='input-field' {...register('valor_unitario', { required: true })} placeholder='' />
                    <label className='input-label'>Valor unitario</label>
                </div>
                <div className='input-group'>
                    <input
                        step={0.01}
                        defaultValue={body && body.importe_total}
                        type="number" className='input-field' placeholder='' {...register('importe_total', { required: true })} />
                    <label className='input-label'>Importe total</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.fecha}
                        type="date" className='input-field' placeholder='' {...register('fecha', { required: true })} />
                    <label className='input-label'>Fecha</label>
                </div>
                <div className='input-group'>
                    <input
                        defaultValue={body && body.detalles}
                        type="text" className='input-field' placeholder='' {...register('detalles', { required: true })} />
                    <label className='input-label'>Detalles del servicio</label>
                </div>
                <div className='mt-4'>
                    <select
                        defaultValue={body && body.tipo_pago}
                        {...register('tipo_pago', { required: true })}
                        className="block w-full py-4 border-gray-300 border rounded-md shadow-sm focus:border-blue-500 outline-none">
                        <option value="">Tipo de pago</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Yape">Yape</option>
                        <option value="Deposito">Deposito</option>
                    </select>
                </div>
                <button className='w-full py-3 mt-5 bg-slate-600 text-white rounded'>SIGUIENTE</button>
                <p className="mt-5 text-sm text-center text-gray-500">
                    Verificar la informacion del contribyente muchas veces para garantizar su registro correcto
                </p>
            </form>
        </div>

    )
}
