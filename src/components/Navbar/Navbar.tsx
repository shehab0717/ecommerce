import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cartIcon from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import { Link } from "react-router-dom";
// import {} from "@fortawesome/free-regular-svg-icons";

const Navbar = function (): JSX.Element {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-row justify-between py-8">
                    <div className="basis-8/12">
                        <Link to="/products" className="font-bold text-3xl mx-5">sneakers</Link>
                        <ul className="inline-block text-gray-500 ">
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/products">Collections</Link></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/products">Men</Link></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/products">Women</Link></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/about">About</Link></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><Link to="/about">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-row justify-end items-center'>
                        <a href="">
                            <img className="w-4" src={cartIcon} />
                        </a>
                        <a href="">
                            <img className="w-10 ml-10" src={avatar} />
                        </a>

                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Navbar;