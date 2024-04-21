import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'ProductDetails', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];
      
    return (
        <nav className="bg-yellow-200 text-black p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <AiOutlineMenu className="" /> 
                }
            </div>
            <ul className={`md:flex duration-1000  absolute md:static
            ${open ? 'top-16' : '-top-60 '}
            md:flex-row px-4 bg-yellow-200`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;