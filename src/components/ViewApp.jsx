import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/showInfoToast';
import { AuthContext } from '../contexts/AuthContextApp';
import { ModalViewApp } from './ModalViewApp';
import { TabConfirmApp } from './TabConfirmApp';
import { ModalEditApp } from './ModalEditApp';

export const ViewApp = () => {
    const [results, setresults] = useState();
    const { user } = useContext(AuthContext);
    const [selected, setSelected] = useState(null);
    const [current, setCurrent] = useState(null);
    const [currentEdit, setCurrentEdit] = useState(null);
    const close = () => setSelected(null);
    const closeConfirm = () => setCurrent(null);
    const closeEdit = () => setCurrentEdit(null);
    const getCashes = () => {
        axios.get(`${CONFIG.uri}/api/cashes/all/${user.uid}`)
            .then(res => {
                setresults(res.data.docs);
            })
            .catch(error => {
                showInfoToast('Error al cargar los datos');
            })
    }
    useEffect(() => {
        getCashes();
    }, [])
    return (
        <div>
            <div className='max-w-4xl mx-auto shadow p-3 mt-10'>
                <table className='w-full text-center'>
                    <tbody>
                        <tr className='bg-slate-300'>
                            <td className='py-2'>N°</td>
                            <td className='py-2'>Nombre del contribuyente</td>
                            <td className='py-2'>Código</td>
                            <td className='py-2'>total</td>
                            <td className='py-2'></td>
                        </tr>
                        {
                            results && results.map((x, index) => (
                                <tr key={x._id} className=''>
                                    <td className='py-2'>{index + 1}</td>
                                    <td className='py-2'>{x.nombre}</td>
                                    <td className='py-2'>IVA-501987</td>
                                    <td className='py-2'>150</td>
                                    <td className='py-2'>
                                        <button
                                            onClick={() => setSelected(x)}
                                            className='px-3 py-1 bg-blue-900 text-white rounded'>
                                            <i className="fa-solid fa-magnifying-glass"></i></button>
                                        <button
                                            onClick={() => setCurrentEdit(x)}
                                            className='ms-1 px-3 py-1 bg-slate-500 text-white rounded'>
                                            <i className="fa-solid fa-pen-to-square"></i></button>
                                        <button onClick={() => setCurrent(x._id)} className=' ms-1 px-3 py-1 bg-red-500 text-white rounded'>
                                            <i className="fa-solid fa-xmark"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    results && results.length == 0 && (<p className='mt-2 text-center'>No se encontraron registros</p>)
                }
            </div>
            {
                selected && (<ModalViewApp data={selected} close={close} />)
            }
            {
                current && (<TabConfirmApp id={current} close={closeConfirm} fnThen={getCashes} />)
            }
            {
                currentEdit && (<ModalEditApp data={currentEdit} close={closeEdit} fnThen={getCashes} />)
            }
        </div>
    )
}
