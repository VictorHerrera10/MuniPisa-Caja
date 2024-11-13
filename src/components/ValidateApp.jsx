import React from 'react'
import { ModalViewApp } from './ModalViewApp'

export const ValidateApp = ({ data, onRegister, isLoading }) => {
    return (
        <div>
            <div className='max-w-xl mt-10 mx-auto mb-4'>
                <h1 className='font-bold text-xl text-center'>CAJA - MUNICIPALIDAD DISTRITAL DE PISACOMA</h1>
                <p className='mt-3 text-center text-sm'>Solo acceso a personal autorizado</p>
                <div className='shadow p-4 mt-4'>
                    <table className='table w-full'>
                        <tbody>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Numero de recibo:</td>
                                <td className='py-2 px-2 border'>{data.codigo}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='py-2 px-2 border font-bold'>DATOS DEL CONTRIBUYENTE</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Nombres completos:</td>
                                <td className='py-2 px-2 border'>{data.nombre}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>DNI:</td>
                                <td className='py-2 px-2 border'>{data.dni}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Telefono:</td>
                                <td className='py-2 px-2 border'>{data.telefono}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Direccion:</td>
                                <td className='py-2 px-2 border'>{data.domicilio}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='py-2 px-2 border font-bold'>DETALLE DE SERVICIO Y PAGO</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Codigo de pago:</td>
                                <td className='py-2 px-2 border'>{data.codigo}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Concepto de servicio:.</td>
                                <td className='py-2 px-2 border'>{data.concepto}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Cantidad:</td>
                                <td className='py-2 px-2 border'>{data.cantidad}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Valor unitario:</td>
                                <td className='py-2 px-2 border'>{data.valor_unitario}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Importe TOTAL:</td>
                                <td className='py-2 px-2 border'>{data.importe_total}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Fecha de registro:</td>
                                <td className='py-2 px-2 border'>{data.fecha}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Detalle del servicio:</td>
                                <td className='py-2 px-2 border'>{data.detalles}</td>
                            </tr>
                            <tr>
                                <td className='py-2 px-2 border font-bold text-gray-600'>Tipo de pago:</td>
                                <td className='py-2 px-2 border'>{data.tipo_pago}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button
                    className='w-full py-3 mt-5 bg-slate-600 text-white rounded'
                    onClick={() => onRegister()}>{isLoading ? 'Cargando...' : 'Guardar cambios'}</button>
                <p className="mt-5 text-sm text-center text-gray-500">
                    Verificar la informacion del contribyente muchas veces para garantizar su registro correcto
                </p>
            </div>
        </div>

    )
}
