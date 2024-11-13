import axios from 'axios'
import React, { useState } from 'react'
import { CONFIG } from '../config'
import { showInfoToast } from '../utils/showInfoToast'

export const TabConfirmApp = ({ id, close, fnThen }) => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteRegister = () => {
        if (!isLoading) {
            setIsLoading(true);
            axios.delete(`${CONFIG.uri}/api/cashes/${id}`)
                .then(res => {
                    showInfoToast('Se elimino correctamente');
                    close();
                    fnThen();
                })
                .catch(error => {
                    setIsLoading(false);
                    showInfoToast('Error en el servidor');
                })
        }
    }
    return (
        <div className='modal-view' onClick={() => close()}>
            <div className='w-[400px] shadow p-4' onClick={(e) => e.stopPropagation()}>
                <h1 className='text-center text-2xl'>¿Esta seguro de eliminar este registro?</h1>
                <div className='flex justify-center gap-4 mt-4'>
                    <button onClick={() => close()} className='px-4 py-2 bg-gray-50 shadow rounded'>Cancelar</button>
                    <button onClick={() => deleteRegister()} className='px-4 py-2 bg-red-600 text-white rounded'>
                        {isLoading ? 'Cargando..' : 'Aceptar'}</button>
                </div>
            </div>
        </div>
    )
}
