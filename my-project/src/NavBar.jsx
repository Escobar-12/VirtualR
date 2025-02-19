import logo from "./assets/logo.png"
import { navItems } from "./constants/index.jsx";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () =>
{
    const [mobileStackOpen,setMobileStackOpen] = useState(false);

    const checkOut = (e) =>
    {
        const area = document.querySelector(".mobNav");
        if (area && !area.contains(e.target)) {
            setMobileStackOpen(false);
        }
    }
    useEffect(()=>
    {
        if(mobileStackOpen) document.addEventListener("mousedown",checkOut);
        else
        {
            document.removeEventListener("mousedown",checkOut)
        }
    },[mobileStackOpen])


    function toggleNavBar()
    {
        setMobileStackOpen(!mobileStackOpen);
    } 
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg py-4 border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logos" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex mx-14 flex items-center space-x-10">
                            {navItems.map((item, index) => 
                                <li key={index}>
                                    <a className=" hover:text-orange-500 " href={item.href}>{item.label}</a>
                                </li>
                            )}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-10">
                        <a href="" className="py-2 px-3 border rounded">Sing in</a>
                        <a href="" className="py-2 px-3 bg-gradient-to-r from-orange-400 to-orange-800 rounded">Create an account</a>
                    </div>
                    <div className="lg:hidden md:flex justify-end flex-col">
                        <button onClick={toggleNavBar}>
                            {mobileStackOpen ? <X/>:<Menu/>}
                        </button>
                    </div>
                </div>
                {mobileStackOpen && (
                    <div className="mobNav lg:hidden fixed p-10 w-full right-0 bg-neutral-900 flex flex-col justify-center items-center">
                        <ul className="py-5 space-y-5">
                            {navItems.map((items,index)=>(
                                <li key={index}>
                                    <a className=" hover:text-orange-500 " href={items.href}>{items.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center items-center space-x-5">
                            <a href="" className="py-2 px-3 border rounded">Sing in</a>
                            <a href="" className="py-2 px-3 bg-gradient-to-r from-orange-400 to-orange-800 rounded">Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}   
export default NavBar;