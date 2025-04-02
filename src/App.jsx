import { useEffect, useState } from 'react'
import './App.css'
import Cat from './main/Cat'
import Background from './main/Background'
import { use } from 'react';
import { FaArrowsRotate } from 'react-icons/fa6';

function App() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checktOriant = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', checktOriant);
    checktOriant();

    return () => {
      window.removeEventListener('resize', checktOriant);
    };
  }, []);

  return (
    <>
      {isPortrait && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white p-4 rounded-md shadow-md">
        Please rotate your device to landscape mode to play the game.
        <FaArrowsRotate />
      </div>
      )}
      {!isPortrait && (
        <>
          <Background />
          <Cat />
        </>
      )}
    </>
  )
}

export default App
