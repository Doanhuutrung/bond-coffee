import React, { useEffect, useState } from 'react'

const Event = () => {

    const [days,setDays] = useState()

    let interval;
    const countDown = () => {
        const destination = new Date ('Dec 24, 2022').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destination - now 
            const days = Math.floor(different / (1000*60*60*24))

            if(destination < 0) clearInterval(interval.current)
            else{
                setDays(days)
            }
        });
    };

    useEffect(() => {
        countDown()
    })
  return <div className='event_content d-flex align-items-center gap-5'>
    <div className="event_data d-flex align-items-center gap-5">
        <div>
            <h1 className='text-black fs-2'>{days}</h1>
            <h5 className='text-black fs-6'>Days</h5>
        </div>
    </div>

    </div>
  
}

export default Event