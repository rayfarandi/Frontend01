import React from 'react'
import { useSelector } from 'react-redux'


const ResultBox = () => {

    const result = useSelector(state => state.order.result)
    return (
        <> 
        <div clasName="">
        <div className='bg-blue-100 border border-gray-800 w-[300px] rounded-lg p-4'>
            <h2 className='mb-8 font-semibold text-sm'>Results:</h2>
            {result.map((item,index) =>(
                <div className=' flex flex-row justify-between' key={index}>
                    <span>{item.type},{item.item}</span>  
                    <span>Rp.{item.price}</span>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default ResultBox