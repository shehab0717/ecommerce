import menuIcon from '../../assets/icons/icon-menu.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";


type propsType = {
    onCartClick?: Function,
    onAvatarClick?: Function
    className?: string,
}

const Navbar = function ({ className = '', onAvatarClick = () => { }, onCartClick = () => { } }: propsType): JSX.Element {


    const [openSidebar, setOpenSidebar] = useState(true);

    function closeSidebar(){
        setOpenSidebar(false);
    }
    return (
        <>
            <Sidebar isOpen={openSidebar} close={closeSidebar} />
            <div>
                <div className={"container mx-auto " + className}>
                    <div className="flex flex-row justify-between py-8">
                        <div className="basis-8/12">
                            <span className='inline-block cursor-pointer lg:hidden' onClick={()=>setOpenSidebar(true)}>
                                <img src={menuIcon} />
                            </span>
                            <Link to="/products" className="font-bold text-3xl mx-5">sneakers</Link>
                            <ul className="text-gray-500 hidden lg:inline-block">
                                <li key={1} className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/products">Collections</Link></li>
                                <li key={2} className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/products">Men</Link></li>
                                <li key={3} className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/products">Women</Link></li>
                                <li key={4} className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/about">About</Link></li>
                                <li key={5} className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/about">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-row justify-end items-center'>
                            <span className="cursor-pointer" onClick={() => { onCartClick() }}>
                                <img className="w-4" src={cartIcon} />
                            </span>
                            <span className="cursor-pointer" onClick={() => { onAvatarClick() }}>
                                <img className="w-10 ml-10" src={avatar} />
                            </span>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Navbar;