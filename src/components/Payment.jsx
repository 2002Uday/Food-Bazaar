import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [msg, setMsg] = useState(null);
    const [tmsg, setTMsg] = useState(null);
    const [fields, setFields] = useState(false);
    const [but, setBut] = useState(false);
    const Msg = () => {
        setFields(true);
        setBut(true);
        setMsg("YOUR ORDER WILL BE DELIVERED SOON!! 😊");
        // setTimeout(() => {
        //     setFields(false);
        // }, 7000);
    }
  return (
    <div className='box-border p-10 mb-20 bg-white rounded-3xl border-4 border-white shadow-xl'>
        <p className='text-[1.5rem] lg:text-[2.5rem] font-bold tracking-wide text-headingColor relative before:absolute before:rounded-lg before:content before:w-2/12 before:h-2 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-purple-400 to-purple-600'>
            SELECT PAYMENT METHOD
        </p>
        
        
            {fields && (
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`w-full lg:p-24 p-10 mt-20 mb-20 rounded-lg text-center lg:text-5xl text-2xl font-bold tracking-wide ${
                    "bg-emerald-400 text-white"
                }`}
            >
                {msg}
            </motion.p>
            )}
           
            
                
            {but ? (
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                        <Link to={"/"}>
                        Countinue Shopping
                        </Link>
                    </motion.button>
                </div>
            ) : (
                <>
                <div className="border-b border-gray-900/10 pb-12">
                <p className="mt-6 text-xl leading-6 text-gray-600">Select your Payment Option</p>
                <div className="flex items-center gap-x-3 pt-10">
                <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-everything" className="block text-lg font-medium leading-6 text-gray-900 ">
                UPI
                </label>
            </div>
            <div className="flex items-center gap-x-3 pt-10">
                <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-everything" className="block text-lg font-medium leading-6 text-gray-900">
                Cash on Delivery
                </label>
            </div>
            <div className="flex items-center gap-x-3 pt-10">
                <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-everything" className="block text-lg font-medium leading-6 text-gray-900">
                Cradit Card
                </label>
            </div>
            <div className="flex items-center gap-x-3 pt-10">
                <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-everything" className="block text-lg font-medium leading-6 text-gray-900">
                Dabit Card
                </label>
            </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                
            
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    onClick={Msg}
                >
                    Order
                </motion.button>
                </div></>
                
            )}
            </div>
  )
}

export default Payment;
