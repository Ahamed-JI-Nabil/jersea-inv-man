import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import mainLogo from '../../../../images/Main LOGO ONG.png'
import { Link } from "react-router-dom";
import CustomLink from "../../Login/CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    const menuItems = <>
        {user ?
            <>
                <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/additems'>Add Items</Link>
                <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/manageitems'>Manage Items</Link>
                <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" onClick={handleSignOut} to='/login'>Logout</Link>

            </>
            :
            <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/login'>Login</Link>
        }
    </>

    return (
        <div>
            <div>
                <nav className="bg-slate-900">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="lg:flex flex items-center justify-between lg:justify-evenly h-20 ">
                            <div className="navbar lg:flex lg:flex-wrap lg:justify-around">
                                <div className="sm:navbar-start">
                                    <div className="dropdown">

                                        <ul id='navbar' tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                                            <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/home'>Home</Link>
                                            <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/inventory'>Inventory</Link>
                                            <Link as={CustomLink} className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/blogs'>Blogs</Link>
                                            {menuItems}
                                        </ul>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link to='/'><img
                                            className="w-20"
                                            src={mainLogo}
                                            alt="Jersea"
                                        /></Link>
                                    </div>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal p-0">
                                        <Link className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/home'>Home</Link>
                                        <Link className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/inventory'>Inventory</Link>
                                        {menuItems}
                                    </ul>

                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-6 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/home'>Home</Link>
                                    <Link className="text-gray-300 hover:text-rose-600  px-3 py-2 text-sm font-medium" to='/inventory'>Inventory</Link>
                                    {menuItems}
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>

            </div>
        </div>
    );
};

export default Header;

