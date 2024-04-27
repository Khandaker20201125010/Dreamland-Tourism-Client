import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Mainpages = () => {
    return (
        <div className='fonty'>
             <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainpages;