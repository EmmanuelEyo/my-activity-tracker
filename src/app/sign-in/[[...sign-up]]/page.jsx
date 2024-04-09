import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center justify-between p-24'>
        <SignIn />
    </div>
  )
}

export default SignInPage