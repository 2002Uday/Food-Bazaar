import React, { useState } from 'react';
import Logo from "../img/logo.png";
import {BsCart} from 'react-icons/bs';
import { MdAdd , MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Avatar from "../img/avatar.png";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user} , dispatch] = useStateValue();

    const [isMenu, setisMenu] = useState(false)

    const login = async() =>{
        if (!user) {
            const {user : {refreshToken,providerData}} = await signInWithPopup(firebaseAuth, provider)
            dispatch({
            type : actionType.SET_USER,
            user : providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        }else{
            setisMenu(!isMenu);
        }
    };

    const logout = () => {
        setisMenu(false)
        localStorage.clear()

        dispatch({
            type : actionType.SET_USER,
            user : null
        });
    };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* Desktop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt="Logo" />
                <p className="text-headingColor text-xl font-bold">Food बाजार</p>
            </Link>
            <div className='flex items-center gap-8'>
                <motion.ul initial={{opacity : 0 , x : 200}} 
                animate={{opacity : 1 , x : 0}}
                exit={{opacity : 0 , x : 200}}
                className="flex items-center gap-8">
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">Home</motion.li>
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</motion.li>
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</motion.li>
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">Service</motion.li>
                </motion.ul>
                <div className="relative flex items-center justify-center">
                    <BsCart className="text-xl cursor-pointer"/>
                    <div className=' absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center'>
                        <p className=' text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
            </div>
            <div className=' relative'>
                <motion.img whileTap={{scale: 0.7}}
                src={user ? user.photoURL : Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt="Userprofile" 
                onClick={login}
                />
                {
                    isMenu && (
                        <motion.div initial={{opacity: 0, scale: 0.6}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.6}} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>
                        {
                        user && user.email === "udaybharadwa2002@gmail.com" && (
                            <Link to={"/createItem"}>
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base '>New Item <MdAdd/> </p>
                            </Link>
                        )
                        }
                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                        onClick={logout}
                        >Logout <MdLogout/> </p>
                        </motion.div>
                    )
                }
            </div>
        </div>


        {/* mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
            
            <div className="relative flex items-center justify-center">
                <BsCart className="text-xl cursor-pointer"/>
                <div className=' absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center'>
                    <p className=' text-xs text-white font-semibold'>2</p>
                </div>
            </div>
            
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt="Logo" />
                <p className="text-headingColor text-xl font-bold">Food बाजार</p>
            </Link>

            <div className=' relative'>
                <motion.img whileTap={{scale: 0.7}}
                src={user ? user.photoURL : Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt="Userprofile" 
                onClick={login}
                />
                {
                    isMenu && (
                        <motion.div initial={{opacity: 0, scale: 0.6}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.6}} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>
                        {
                        user && user.email === "udaybharadwa2002@gmail.com" && (
                            <Link to={"/createItem"}>
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base '>New Item <MdAdd/> </p>
                            </Link>
                        )
                        }

                    <ul
                        className="flex flex-col">
                        <li className="text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Home</li>
                        <li className="text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Menu</li>
                        <li className="text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">About Us</li>
                        <li className="text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Service</li>
                    </ul>
                        <p className='m-2 p-2 rounded-lg shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base '
                            onClick={logout}
                        >Logout <MdLogout/> </p>
                        </motion.div>
                    )
                }
            </div>
        </div>
    </header>
    )
}

export default Header