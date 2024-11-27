import RegisterForm from '@/components/registerform'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
        <RegisterForm />
        <p className="my-3">
            Already have an account?
            <Link className="mx-2 underline" href="/">Login</Link>
        </p>
    </div>
  )
}

export default Register