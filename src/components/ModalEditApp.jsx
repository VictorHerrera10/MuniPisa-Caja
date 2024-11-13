import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/showInfoToast';
import moment from 'moment';

export const ModalEditApp = ({ data, close, fnThen }) => {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onUpdate = (_data) => {
        if (!isLoading) {
            setIsLoading(true)
            axios.put(`${CONFIG.uri}/api/cashes/${data._id}`, _data)
                .then(res => {
                    close()
                    fnThen();
                })
                .catch(error => {
                    showInfoToast('Error en el servidor');
                    setIsLoading(false);
                })
        }
    }
    return (
        <div className='modal-view overflow-y-auto' onClick={() => close()}>
            <div onClick={(e) => e.stopPropagation()} className='w-[600px] mt-48 mb-4'>
                <div className='text-end me-3'>
                    <button onClick={() => close()}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <form onSubmit={handleSubmit(onUpdate)} className='shadow p-4'>
                    <table className='table w-full'>
                        <tbody>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Numero de recibo:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('codigo', { required: true })} type="text" defaultValue={data.codigo} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='py-2 px-2 border font-bold'>DATOS DEL CONTRIBUYENTE</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Nombres completos:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('nombre', { required: true })} type="text" defaultValue={data.nombre} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>DNI:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('dni', { required: true })} type="text" defaultValue={data.dni} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Telefono:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('telefono', { required: true })} type="text" defaultValue={data.telefono} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Direccion:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('domicilio', { required: true })} type="text" defaultValue={data.domicilio} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='py-2 px-2 border font-bold'>DETALLE DE SERVICIO Y PAGO</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Codigo de pago:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('codigo', { required: true })} type="text" defaultValue={data.codigo} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Concepto de servicio:.</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('concepto', { required: true })} type="text" defaultValue={data.concepto} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Cantidad:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('cantidad', { required: true })} type="text" defaultValue={data.cantidad} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Valor unitario:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('valor_unitario', { required: true })} type="text" defaultValue={data.valor_unitario} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Importe TOTAL:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('importe_total', { required: true })} type="text" defaultValue={data.importe_total} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Fecha de registro:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('fecha', { required: true })} type="date" defaultValue={moment(data.fecha).format('YYYY-MM-DD')} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Detalle del servicio:</td>
                                <td className='py-2 px-2 border'>
                                    <input {...register('detalles', { required: true })} type="text" defaultValue={data.detalles} className='outline-none py-1 px-2 w-full' />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Tipo de pago:</td>
                                <td className='py-2 px-2 border'>
                                    <div>
                                        <select
                                            defaultValue={data.tipo_pago}
                                            {...register('tipo_pago', { required: true })}
                                            className="block w-full py-2 px-2 outline-none border-gray-300 border rounded-md shadow-sm">
                                            <option value="">Tipo de pago</option>
                                            <option value="Efectivo">Efectivo</option>
                                            <option value="Yape">Yape</option>
                                            <option value="Deposito">Deposito</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='submit' className='w-full bg-blue-900 text-white py-3 mt-3 rounded'>
                        {isLoading ? 'Cargando..' : 'Guardar cambios'}</button>
                </form>
            </div>
        </div>
    )
}
