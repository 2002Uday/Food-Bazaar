import React from 'react'
import {Route , Routes} from "react-router-dom";
import { CreateContainer, Header, MainContainer } from './components'
import {AnimatePresence} from "framer-motion" ;

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-slate-100">
        <Header />
        <main className=' mt-16 md:mt-20 px-4 md:px-14 py-4 w-full'>
            <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App