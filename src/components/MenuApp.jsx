import React from 'react'

export const MenuApp = ({ steps, changeStep }) => {
    return (
        <div className='max-w-sm p-3'>
            {
                steps.map((x, index) => (
                    <div key={x.id} onClick={() => changeStep(index)} className='menu-item border-item'>
                        <div className={`menu-tag ${steps[index].active ? 'menu-active' : ''}`}>
                            <i className="fa-solid fa-check"></i>
                            {
                                !steps[index].active && (<div className="menu-point"></div>)
                            }
                        </div>
                        <div className='menu-data'>
                            <h1 className='font-bold'>{x.title}</h1>
                            <p>{x.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
