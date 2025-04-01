import bg from '../assets/image/bg.jpg';

const Background = () => {
    return (
        <>
            <div className="fixed inset-0 z-0 flex items-center justify-center">
                    <img src={bg} alt="background" className='drop-shadow-lg'/>
            </div>
        </>
    );
}
export default Background;