import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image';
import LogoutForm from '@/components/logoutform';
import Get_Method_Data from '@/components/get_data';


const Home = async () => {
    const session = await auth();
    if (!session?.user) redirect("/");

  return (
    <div className="text-center  pt-12">
        {
            session?.user?.name && session?.user?.image ? (
                <>
                    <h1>Welcome, {session?.user?.name}</h1>
                    <Image 
                        src={session?.user?.image}
                        alt={sessin?.user?.name}
                        width={72}
                        height={72}
                        className="rounded-full"
                    />
                </>
            ) : (
                <div>
                    <h1 className="text-2xl">Welcome, <span className="text-blue-400 font-bold text-3xl"> {session?.user?.username || "Guest"}</span> </h1>
                    <div className="bg-slate-100 w-96 justify-center items-center mx-auto p-2 rounded-md ">
                        <Get_Method_Data />
                    </div>
                    <div>
                        <LogoutForm />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Home