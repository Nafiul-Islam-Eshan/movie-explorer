
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default RootLayout;