import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cartIcon from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
// import {} from "@fortawesome/free-regular-svg-icons";

const Navbar = function (): JSX.Element {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-row justify-between py-8">
                    <div className="basis-8/12">
                        <a href="" className="font-bold text-3xl mx-5">sneakers</a>
                        <ul className="inline-block text-gray-500 ">
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><a href="">Collections</a></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><a href="">Men</a></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><a href="">Women</a></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><a href="">About</a></li>
                            <li className="inline mx-3 py-9 hover:border-b-2 hover:text-black border-orange"><a href="">Contact</a></li>
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