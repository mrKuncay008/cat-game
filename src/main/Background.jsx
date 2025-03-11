import bg from '../assets/image/bg.jpg';

const Background = () => {
    return (
        <>
            <div className="fixed inset-0 z-0">
                <img src={bg} alt="background"/>
            </div>
        </>
    );
}
export default Background;