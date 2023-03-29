import React, { useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function forgotPassword() {
 
  const route=useRouter()
  useEffect(()=>{
    if(localStorage.getItem("token")){
   route.push("/login")
    }
  })
  return (
    <section  className="h-screen">
    <div className="container px-6 py-12 h-full">

      <div  className="flex justify-center items-center sm:flex-row flex-col">
       
        <div  className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <h1 className='mt-8 text-center text-2xl text-black sm:text-4xl font-bold  font-serif'>Forgot Password<span> <Link href={"/login"} className='text-red-600 mt-1 sm:text-lg justify-center font-normal flex flex-col text-base '>or login ?</Link></span></h1>
          <form>
       
            <div  className="mb-4 mt-5">
              <input
                type="text"
                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                name='email'
              />
            </div>


           



            <Link href={"/signin"}>

              <button
                type="submit"
                 className="inline-block px-7 py-3 bg-blue-600 text-white  font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Contineu
              </button></Link>


          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default forgotPassword
