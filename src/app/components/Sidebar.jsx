'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { UserButton } from '@clerk/nextjs'

const SidebarContext = createContext()

const Sidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(true)

    const toggleSidebar = () => {
        if (window.innerWidth <= 640) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }

    useEffect(() => {
        toggleSidebar(); 
        window.addEventListener("resize", toggleSidebar); 
        return () => {
            window.removeEventListener("resize", toggleSidebar); 
        };
    }, []);

    return (
        <div className={`overflow-hidden transition-all ${expanded ? 'h-full top-0 fixed left-0 z-50 flex flex-col bg-white text-black overflow-auto pb-10 overflow-y-hidden w-60 shadow-md' : 'h-full w-10 top-0 fixed left-0 z-50 flex flex-col bg-white text-black overflow-auto pb-10 overflow-y-auto shadow-md'}`}>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <Image src='/fire_logo.png' width={30} height={30} alt='fire_logo' className={`overflow-hidden transition-all ${expanded ? 'width={30} height={30}' : 'w-0'}`} />
                <button onClick={() => setExpanded(coll => !coll)} className={`${expanded ? 'rounded-lg bg-gray-50 p-1.5 text-2xl hover:bg-gray-100' : ' -ml-3 rounded-lg bg-gray-50 p-1.5 text-2xl hover:bg-gray-100'}`}>
                    {expanded ? <LuChevronFirst /> : <LuChevronLast />}
                </button>
            </div>
            <SidebarContext.Provider value={{ 
                expanded
            }}>
                <ul>{ children }</ul>
            </SidebarContext.Provider>
            <div className='border-t mt-10 flex p-3'>
                <div className={`${expanded ? 'mt-[315px]' : 'mt-[315px] -ml-2'}`}>
                    <UserButton afterSignOutUrl='/' />
                </div>
                <div className={`overflow-hidden transition-all ${expanded ? 'mt-80' : 'w-0'}`}>
                    <Link href="profile" className='ml-4 text-gray-800 hover:text-gray-600'>
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return(
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors cursor-pointer group ${active ? 
           "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : 'hover:bg-indigo-50 text-gray-600'
        }`}>
            <p className={`${expanded ? '' : 'ml-0'}`}>{icon}</p>
            <span className={`overflow-hidden transition-all ${expanded ? 'ml-3' : 'w-0'}`}>{text}</span>
            {alert && <div className={`absolute bg-indigo-400 w-2 h-2 right-2 rounded ${expanded ? '' : 'top-2 right-7 left-7'}`} />}
        </li>
    )
}
