import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, UserButton } from '@clerk/nextjs'

const Header = () => {
  const { userId } = auth()

  return (
    <>
      {userId ? (
        <div className="fixed top-4 right-5 z-20 p-4 left-5">
          <div className="container mx-auto flex justify-around items-center">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href='/'>
                <div className="flex -mt-5">
                  <Image src='/app-logo.png' alt='app-logo' width={120} height={120} className=' lg:w-28 lg:h-20 w-24 h-16' />
                  <div className='lg:text-2xl lg:mt-6 md:text-xl mt-5 text-lg uppercase font-bold hover:text-gray-700 text-gray-600'>
                    E-FITNESS
                  </div>
                </div>
              </Link>
            </div>
            <div className='text-white flex items-center'>
              {!userId && (
                <>
                  <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
                    Sign In
                  </Link>
                  <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
                    Sign Up
                  </Link>
                </>
              )}
              {userId && (
                <Link href="profile" className='mr-4 -mt-5 text-xl text-gray-300 hover:text-white'>
                  Profile
                </Link>
              )}
              <div className="lg:ml-auto mr-5 -mt-5">
                <UserButton afterSignOutUrl='/' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-4 right-5 z-20 p-4 left-5">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href='/'>
                <div className="flex">
                  <Image src='/app-logo.png' alt='app-logo' width={120} height={120} />
                  <div className='lg:text-2xl lg:mt-6 md:text-xl text-lg uppercase font-bold hover:text-gray-700 text-gray-600'>
                    E-FITNESS
                  </div>
                </div>
              </Link>
            </div>
            <div className='text-white flex items-center'>
              {!userId && (
                <>
                  <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
                    Sign In
                  </Link>
                  <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
                    Sign Up
                  </Link>
                </>
              )}
              {userId && (
                <Link href="profile" className='mr-4 text-gray-300 hover:text-white'>
                  Profile
                </Link>
              )}
              <div className="ml-auto">
                <UserButton afterSignOutUrl='/' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header;

    // <div className="fixed top-4 right-5 z-20 p-4 left-5">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="flex items-center space-x-2 md:space-x-4">
    //         <Link href='/'>
    //             <div className='lg:text-xl md:text-xl text-lg uppercase font-bold hover:text-gray-700 text-gray-600'>
    //                 E-FITNESS
    //             </div>
    //         </Link>
    //     </div>
    //     <div className='text-white flex items-center'>
    //     {!userId && (
    //         <>
    //             <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
    //                 Sign In
    //             </Link>
    //             <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
    //                 Sign Up
    //             </Link>
    //         </>
    //     )}
    //     {userId && (
    //         <Link href="profile" className='mr-4 text-gray-300 hover:text-white'>
    //             Profile
    //         </Link>
    //     )}
    //     <div className="ml-auto">
    //         <UserButton afterSignOutUrl='/' />
    //     </div>
    //     </div>
    //   </div>
    // </div>