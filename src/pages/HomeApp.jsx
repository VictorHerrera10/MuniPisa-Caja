import React, { useContext, useEffect, useState } from 'react'
import '../styles/Home.css'
import { RegisterDataApp } from '../components/RegisterDataApp'
import { MenuApp } from '../components/MenuApp'
import { RegisterServiceApp } from '../components/RegisterServiceApp'
import { ValidateApp } from '../components/ValidateApp'
import { ViewApp } from '../components/ViewApp'
import axios from 'axios'
import { CONFIG } from '../config'
import { showInfoToast } from '../utils/showInfoToast'
import { AuthContext } from '../contexts/AuthContextApp'
import { useNavigate } from 'react-router-dom'
export const HomeApp = () => {
    const [current, setcurrent] = useState(0);
    const changeStep = (index) => {
        setcurrent(index)
    }
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [service, setService] = useState(null);
    const { user, auth } = useContext(AuthContext);
    const saveData = () => {
        if (!isLoading) {
            setIsLoading(true);
            axios.post(`${CONFIG.uri}/api/cashes`, { ...data, ...service, uid: user.uid })
                .then(res => {
                    showInfoToast('Se agregó correctamente');
                    setcurrent(3);
                    setIsLoading(false);
                    setData(null);
                    setService(null);
                })
                .catch(error => {
                    setIsLoading(false);
                    if (error.response.data) {
                        showInfoToast(error.response.data.error);
                        return;
                    }
                    showInfoToast('Error');

                })
        }
    }
    const steps = [
        {
            id: 1,
            component: <RegisterDataApp key={1} onRegister={setData} body={data} />,
            title: 'REGISTRO DE DATOS',
            description: 'Registrar la infomacion completa del contribuyente.',
            active: data !== null
        },
        {
            id: 2,
            component: <RegisterServiceApp key={2} onRegister={setService} body={service} />,
            title: 'REGISTRO DEL SERVICIO',
            description: 'Informacion detallada del servicio a cancelar por parte del contrubuyente.',
            active: service !== null
        },
        {
            id: 3,
            component: <ValidateApp key={3} data={{ ...data, ...service }} onRegister={saveData} isLoading={isLoading} />,
            title: 'VALIDACIÓN DE INFORMACIÓN',
            description: 'Verificar la informacion colocada en la plataforma para su registro exitoso.',
            active: current == 2
        },
        {
            id: 4,
            component: <ViewApp key={4} />,
            title: 'VISTA GENERAL DE REGISTROS',
            description: 'Tabla para verificar la informacion registrada en la plataforma.',
            active: false
        },
    ];

    useEffect(() => {
        if (data) {
            setcurrent(1);
        }
    }, [data]);

    useEffect(() => {
        if (service) {
            setcurrent(2);
        }
    }, [service]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])

    return (
        <div className='grid grid-cols-[2fr,1fr]'>
            <div>
                <nav className='px-10 py-2 flex justify-between'>
                    <div className='flex items-center'>
                        <img src={require('../assets/logo.png')} alt="logo" className='w-[60px]' />
                        <span className='ms-3'>MUNI-PISA “Gestion 2023 - 2026”</span>
                    </div>
                    <div className='flex items-center'>
                        <span><span className='font-bold'>Binvenido </span>{user.email.split('@')[0]}</span>
                        <button
                            onClick={() => auth.signOut()}
                            className='px-8 text-sm py-2 transition-all hover:bg-gray-600 hover:text-white ms-3 border border-gray-500 rounded'>SALIR</button>
                    </div>
                </nav>
                {
                    steps.map((x, index) => (
                        index == current && x.component
                    ))
                }
            </div>
            <div className='bg-slate-800 w-[30%] h-screen fixed right-0 flex justify-center items-center'>
                <MenuApp steps={steps} changeStep={changeStep} />
            </div>
        </div>
    )
}
