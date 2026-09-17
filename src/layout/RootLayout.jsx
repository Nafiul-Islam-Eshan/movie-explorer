
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Outlet/>
        </div>
    );
};

export default RootLayout;