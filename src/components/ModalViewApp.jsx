import React from 'react'

export const ModalViewApp = ({ data, close }) => {
    return (
        <div className='modal-view' onClick={() => close()}>
            <div onClick={(e) => e.stopPropagation()} className='scroll-auto w-[600px]'>
                <div className='text-end me-3'>
                    <button onClick={() => close()}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className='shadow p-4'>
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
            </div>
        </div>
    )
}
