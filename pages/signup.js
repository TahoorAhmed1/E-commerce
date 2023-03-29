import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
function signup() {
  let router=useRouter()
  const [signupForm, setSignup] = useState({ name:"", email:"", password: "" })
  
  
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      return
    }
    else{
      router.push("/shirt")
    }
  },[router.query])
  

  
  let onChange = (e) => {
    setSignup({ ...signupForm, [e.target.name]: e.target.value })
}
  const handel = async (e) => {

    e.preventDefault()
      let url = `${process.env.NEXT_PUBLIC_HOST}/api/signup`
      let param = {
        method: "POST",
        headers: {
          "Content-type": "application/json ", 
        },
        body: JSON.stringify({ name:signupForm.name,email:signupForm.email, password:signupForm.password})
      }
      let signup = await fetch(url, param)
      let data = await signup.json()
      console.log(data);
      if(data.success){
  
        localStorage.setItem('token',data.token)
         router.push("/")
       
      }
      
  
      // setSignup({ name:"", email:"", password:"" })
  }
  return (
    <section  className="h-screen ">
      <div className="container px-6 py-4 h-full">

      
        <div  className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div  className="md:w-8/12 lg:w-5/12 lg:ml-20 bg-white p-10 rounded-md shadow-lg">
            <div className='flex justify-center align-middle mb-6 mt-4'>
      
            </div>
          <h1 className='my-5 text-center text-2xl sm:text-3xl  font-bold  font-serif text-black'> Creact your account<span> <Link href={"/login"} className='text-red-700 mt-1 sm:text-lg justify-center font-medium flex flex-col text-base '>Or Signin ?</Link></span></h1>
            

            <form onSubmit={handel} >
              <div  className="mb-4">
                <input
                  type="text"
                   className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  name='name'
                  onChange={onChange}
                  value={signupForm.name}
               
                />
              </div>
           


              <div  className="mb-4">
                <input
                  type="email"
                   className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email"
                  name='email'
                  onChange={onChange}
                  value={signupForm.email}
             

                />
              </div>
              <div  className="mb-4">
                <input
                  type="password"
                   className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  name='password'
                  onChange={onChange}
                  value={signupForm.password}
               

                />
              </div>

            


           

                <button
                 
                   className="inline-block px-7 sm:py-3 py-2 bg-blue-600 text-white uppercase font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  w-full"
                 
                >
                  Sign up
                </button>


            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default signup
