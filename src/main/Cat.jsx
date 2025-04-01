import React, { useEffect, useState } from 'react';
import catOne from '../assets/image/1.png';
import catTwo from '../assets/image/2.png';
import catThree from '../assets/image/3.png';
import catFour from '../assets/image/4.png';
import catFive from '../assets/image/5.png';
import catSix from '../assets/image/6.png';

const Cat = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const catMap = [
        catOne, catTwo, catThree, catFour, catFive, catSix
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catMap.length);
        }, 100);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative right-6 top-6 w-3/4 flex items-start justify-start">
                <img src={catMap[currentImageIndex]} alt="cat" />
                <img src={catMap[currentImageIndex]} alt="cat-shadow"
                className="absolute top-[100%] w-auto left-0 scale-y-[-2] opacity-30 grayscale brightness-0 contrast-75"/>
            </div>
        </>
    );
}

export default Cat;