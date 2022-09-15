import { Link } from "react-router-dom";


const Sidebar = ({ isOpen, close }: any): JSX.Element => {

    return (
        isOpen
            ? <div className="fixed w-full bg-black/50  h-full">
                <div className="min-w-[200px] max-w-[300px] bg-white h-full p-5">
                    <span
                        className="font-semibold mb-16 inline-block cursor-pointer text-2xl text-red-500"
                        onClick={close}
                    >x</span>
                    <ul className="text-xl ">
                        <li className="mb-3" key={1}><Link className="hover:underline hover:font-semibold " to="/">Collections</Link></li>
                        <li className="mb-3" key={2}><Link className="hover:underline hover:font-semibold " to="/">Men</Link></li>
                        <li className="mb-3" key={3}><Link className="hover:underline hover:font-semibold " to="/">Women</Link></li>
                        <li className="mb-3" key={4}><Link className="hover:underline hover:font-semibold " to="/">About</Link></li>
                        <li className="mb-3" key={5}><Link className="hover:underline hover:font-semibold " to="/">Contact</Link></li>
                    </ul>
                </div>
            </div>
            : <div></div>
    )
}

export default Sidebar;