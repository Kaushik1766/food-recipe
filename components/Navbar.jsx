'use client'
import React from 'react'
import { Lobster } from 'next/font/google'
import Link from 'next/link';

const pacifico = Lobster({
    subsets: ["latin"],
    weight: ['400']
});


function Navbar() {
    function changeTheme(theme) {
        let root = document.getElementById('main')
        root.setAttribute('data-theme', theme)
    }
    return (
        <div className="navbar fixed z-50 bg-base-100">
            <div className="flex-1">
                <Link href={'/'} className={`btn btn-ghost text-3xl ${pacifico.className}`}>Luscious</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost mr-8">Theme</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <li className='p-2 cursor-pointer btn btn-ghost' onClick={() => changeTheme('garden')}>Light Mode</li>
                        <li className='p-2 cursor-pointer btn btn-ghost' onClick={() => changeTheme('dim')}>Dark Mode</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar