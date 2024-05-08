import React, { useState } from 'react';

export default function Header() {
    const [userStatus, setUserStatus] = useState(false);
    const [activeTab, setActiveTab] = useState('home'); 

    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='relative'>
            <div className='flex justify-between items-center pl-10 py-5 bg-gradient-to-r font-semibold'>
                <div className='w-[120px] md:w-[140px] lg:w-[155px] flex items-center'>
                    <img className='relative md:w-[130px] lg:w-[150px]' src="/logo.png" alt="" />
                </div>
                <div className='flex items-center'>
                    <ul className='flex justify-between item-center gap-5 md:w-[500px] pr-[30px]'>
                        <li className={`sm:block hidden cursor-pointer ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleTabClick('home')}>Home</li>
                        <li className={`sm:block hidden cursor-pointer ${activeTab === 'flashcard' ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleTabClick('flashcard')}>Flashcard</li>
                        <li className={`sm:block hidden cursor-pointer ${activeTab === 'contact' ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleTabClick('contact')}>Contact Us</li>
                        <li className={`sm:block hidden cursor-pointer ${activeTab === 'faq' ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleTabClick('faq')}>FAQ</li>
                    </ul>
                    {userStatus ? (
                        <button className='w-[80px] h-[40px] bg-gradient-to-t from-blue-600 to-blue-900 rounded-full ml-4 text-white'>Logout</button>
                    ) : (
                        <button className='w-[80px] h-[40px] bg-gradient-to-t from-blue-600 to-blue-900 rounded-full ml-4 text-white'>Login</button>
                    )}
                </div>
            </div>
            <div className="absolute bottom-[-10px] left-[-10px] w-full h-[20px] bg-white filter blur-[8px] opacity-50" />
            <div className="absolute bottom-[-10px] right-[-10px] w-full h-[20px] bg-white filter blur-[8px] opacity-50" />
        </div>
    );
}
