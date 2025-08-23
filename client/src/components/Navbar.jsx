import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

function Navbar() {

    const { openSignIn } = useClerk();
    const { user } = useUser();
    return (
        <div className='shadow py-4'>
            <div className='container flex justify-between items-center mx-auto px-4 2xl:px-20'>
                <img className='size-3/12 sm:size-2/12 md:size-1/12' src={assets.logo} alt="logo" />
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <Link to='/applications'>Applied Jobs</Link>
                            <p>|</p>
                            <p className='max-sm:hidden'>Hii, {user.fullName}</p>
                            <UserButton />
                        </div>
                        :
                        <div className='flex gap-4 max-sm:text-xs'>
                            <button className='text-gray-600'>Recruiter Login</button>
                            <button className='bg-blue-600 px-6 sm:px-9 rounded-full text-white' onClick={e => openSignIn()}>Login</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar
