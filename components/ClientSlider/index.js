import React from 'react'
import { ClientSliderList } from './ClientSliderList'

const ClientSlider = () => {
    return (
        <div className='w-full'>
            <div className='flex'>
                {ClientSliderList.map((svg) => {
                    return (
                        <div className='w-1/4'>
                            <div className="w-1/2 m-auto">
                                {svg.svg}
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ClientSlider