import { doLogout } from '@/app/actions'
import React from 'react'

const LogoutForm = () => {
  return (
    <div className="bg-red-500 w-24 mx-auto p-2 m-1 rounded-md text-xl text-white font-semibold">
        <form action={doLogout}>
            <button type="submit">Logout</button>
        </form>
    </div>
  )
}

export default LogoutForm