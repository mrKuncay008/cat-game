import { useEffect, useState } from 'react';
import bg from '../assets/image/bg.jpg';
import ground from '../assets/image/ground.png';

const Background = () => {
    const [groundImageIndex, setGroundImageIndex] = useState(0);
    const gSpeed = 4;

    useEffect(()=> {
        const interval = setInterval(() => {
            setGroundImageIndex((prevPov) => prevPov - gSpeed);
            if (groundImageIndex <= -window.innerWidth) {
                setGroundImageIndex(0);
            }
        }, 900 / 70);

        return () => clearInterval(interval);
    }, [groundImageIndex]);
    return (
        <>
            <div className="fixed inset-0 z-0 flex items-center justify-center">
                <img src={bg} alt="background"/> 
                    <img src={ground} className='fixed w-screen h-4/8 pt-2 lg:pt-6 bottom-0.5'
                    style={{ left: `${groundImageIndex}px` }}
                    alt='rumput'/>
                    <img src={ground} className='fixed w-screen h-4/8 pt-2 lg:pt-6 bottom-0.5'
                    style={{ left: `${groundImageIndex + window.innerWidth}px` }}
                    alt='rumput'/>
            </div>
        </>
    );
}
export default Background;