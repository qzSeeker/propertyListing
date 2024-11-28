import React, { useRef, useState } from 'react'
import Logo from "../../assets/Logo.png"
import { HeartHandshake, House, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const hoverTimerRef = useRef(null);

    // Handle manual expand and collapse
    function toggleSidebar() {
        setIsExpanded(!isExpanded);
    };

    // Handle expand and collaspe using mouse enter and leave
    function handleMouseEnter() {
        hoverTimerRef.current = setTimeout(() => {
            setIsExpanded(true);
        }, 600);
    };

    function handleMouseLeave() {
        if(hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current)
        };
        setIsExpanded(false);
    };

    return (
        <div className={`h-full bg-[#fc9b2d6a] flex items-center justify-center transition-all duration-200 ease-in rounded-3xl p-4 relative ${isExpanded ? 'w-[16rem]' : 'w-[7.7rem]'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`bg-[#ff9d2d] h-full w-full rounded-[16px] flex flex-col items-center gap-8 p-3`}>
                <div className='bg-white h-16 w-16 rounded-full flex justify-center items-center shadow-md'>
                    <h1 className='font-semibold text-[#ff9d2d]'>
                    Logo
                    </h1>
                </div>
                <nav className='mt-12'>
                    <ul>
                        <li className='flex flex-col gap-10'>
                            <Link to='/' className='flex items-center hover:opacity-80 transition-all ease-in duration-150 gap-2 text-sm font-semibold text-white'>
                                <House className='text-white' />
                                {isExpanded && <p className='transition-all duration-150 ease-in'>Home</p>}
                            </Link>
                            <Link to='/dashboard' className='flex items-center hover:opacity-80 transition-all ease-in duration-150 gap-2 text-sm font-semibold text-white'>
                                <LayoutDashboard className='text-white' />
                                {isExpanded && <p className='transition-all duration-150 ease-in'>Dashboard</p>}
                            </Link>
                            <Link to='/service' className='flex items-center hover:opacity-80 transition-all ease-in duration-150 gap-2 text-sm font-semibold text-white'>
                                <HeartHandshake className='text-white' />
                                {isExpanded && <p className='transition-all duration-150 ease-in'>Service</p>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div onClick={toggleSidebar} className='h-[38px] w-[5px] absolute right-1.5 bg-white rounded-t-2xl rounded-b-2xl cursor-pointer outline outline-[#fc9c2d81]'></div>
        </div>
    )
}

export default Sidebar
