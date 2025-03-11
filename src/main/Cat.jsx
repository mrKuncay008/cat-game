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
        <div className="fixed left-4 bottom-2">
            <img src={catMap[currentImageIndex]} alt="cat" />
        </div>
        </>
    );
}

export default Cat;