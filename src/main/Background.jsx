import { useEffect, useState } from 'react';
import bg from '../assets/image/bg.jpg';
import ground from '../assets/image/ground.jpg';
import mus from '../assets/music/bmth.mp3';
import ReactAudioPlayer from 'react-audio-player';

const Background = () => {
    const [groundImageIndex, setGroundImageIndex] = useState(0);
    const gSpeed = 4;

    useEffect(()=> {
        const interval = setInterval(() => {
            setGroundImageIndex((prevPov) => prevPov - gSpeed);
            if (groundImageIndex <= -window.innerWidth) {
                setGroundImageIndex(0);
            }
        }, 900 / 60);

        return () => clearInterval(interval);
    }, [groundImageIndex]);
    return (
        <>
            <div className="fixed inset-0 z-0 flex items-center justify-center">
                <ReactAudioPlayer
                    src={mus}
                    autoPlay
                    loop
                    volume={0.3}
                />

                <img src={bg} alt="background"/> 
                {/* belum responsif */}
                    <img src={ground} className='absolute w-screen h-4/8 pt-12 bottom-0.5'
                    style={{ left: `${groundImageIndex}px` }}
                    alt='rumput'/>
                    <img src={ground} className='absolute w-screen h-4/8 pt-12 bottom-0.5'
                    style={{ left: `${groundImageIndex + window.innerWidth}px` }}
                    alt='rumput'/>
            </div>
        </>
    );
}
export default Background;