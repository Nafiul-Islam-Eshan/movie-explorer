import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className='text-5xl font-bold font-mono text-gray-950'>
            This is Home page
        </div>
        <Footer/>
        </>
    );
};

export default Home;