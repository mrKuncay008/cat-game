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
    const [postition, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [isJumping, setIsJumping] = useState(false);

    useEffect(() => {
        let animationFrame;

        const updateJump = () => {
            setPosition((prev) => {
                const newPos = prev + velocity;
                if (newPos >= 0) {
                    setVelocity(0);
                    setIsJumping(false);
                    return 0;
                }
                return newPos;
            });

            setVelocity((v) => v + 1);
            animationFrame = requestAnimationFrame(updateJump);
        };

        if (isJumping) {
            animationFrame = requestAnimationFrame(updateJump);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [isJumping, velocity]);

    const handleJump = (event) => {
        if (event.code === "Space" && !isJumping) {
            setVelocity(-15);
            setIsJumping(true);
        }
    };
    const handelaTouchJump = () => {
        if (!isJumping) {
            setVelocity(-15);
            setIsJumping(true);
        }
        return 0;
    }
    useEffect(() => {
        window.addEventListener("keydown", handleJump);
        window.addEventListener("touchstart", handelaTouchJump);

        return () => { 
            window.removeEventListener("keydown", handleJump);
            window.removeEventListener("touchstart", handelaTouchJump);
        }
    }, [isJumping]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catMap.length);
        }, 100);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative right-6 top-7 w-2/3 flex items-start justify-start">
                <img src={catMap[currentImageIndex]} 
                alt="cat" 
                style={{ transform: `translateY(${postition}px)` }}
                />
                <img src={catMap[currentImageIndex]} 
                alt="cat-shadow"
                style={{ transform: `translateY(${postition * 0.2}px)` }}
                className="absolute lg:top-28 mt-7 left-0 scale-y-[-2] -skew-x-[-12] opacity-30 grayscale brightness-0 contrast-75"/>
            </div>
        </>
    );
}

export default Cat;