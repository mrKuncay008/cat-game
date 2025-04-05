import { useEffect, useState } from 'react'
import './App.css'
import Cat from './main/Cat'
import Background from './main/Background'
import { FaArrowsRotate } from 'react-icons/fa6';
import TitleDemo from './main/Title';

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
        <div className="absolute gap-3 grid justify-center items-center
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white p-4 rounded-md">
          <span>
            Please rotate your device.
          </span>
        <FaArrowsRotate className="rotate-icon text-3xl mt-3 ml-18"/>
      </div>
      )}
      {!isPortrait && (
        <>
        <div className='fixed inset-0 w-screen h-screen overflow-hidden flex flex-col items-center justify-center'>
          <Background />
            <TitleDemo />
          <Cat />
        </div>
        </>
      )}
    </>
  )
}

export default App
