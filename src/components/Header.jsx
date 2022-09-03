import React from 'react';
import Logo from "./img/logo.png";
import {BsCart} from 'react-icons/bs';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Avatar from "./img/avatar.png";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user} , dispatch] = useStateValue()

    const login = async() =>{
        const {user : {refreshToken,providerData}} = await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type : actionType.SET_USER,
            user : providerData[0],
        });
    }

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
        {/* Desktop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt="Logo" />
                <p className="text-headingColor text-xl font-bold">Food Baazar</p>
            </Link>
            <div className='flex items-center gap-8'>
                <ul className="flex items-center gap-8">
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">Home</motion.li>
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</motion.li>
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</motion.li>
                    <motion.li whileTap={{scale: 0.7}} className=" text-base text-textcolor hover:textheadingColor duration-100 transition-all ease-in-out cursor-pointer">Service</motion.li>
                </ul>
                <div className="relative flex items-center justify-center">
                    <BsCart className="text-xl cursor-pointer"/>
                    <div className=' absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center'>
                        <p className=' text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
            </div>
            <div className=' relative'>
                <motion.img whileTap={{scale: 0.7}}
                src={Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" alt="Userprofile" 
                onClick={login}
                />
            </div>
        </div>


        {/* mobile */}
        <div className="flex md:hidden w-full h-full"></div>
    </header>
    )
}

export default Header