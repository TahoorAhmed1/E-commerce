import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

  
function login() {
  

  let rout=useRouter()
  const [loginForm, setLoginForm] = useState({ name:"", email: "", password: "" })
  
  
  
  useEffect(()=>{
    if(localStorage.getItem("token")){
     rout.push("/")
    }


},[])
  
 let onChange = (e) => {
   setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
}
 const handel = async (e) => {3000
  e.preventDefault()

  

   let url = `${process.env.NEXT_PUBLIC_HOST}/api/login`
   let param = {
     method: "POST",
     headers: {
       "Content-Type": "application/json ", 
     },
     body: JSON.stringify({email:loginForm.email, password:loginForm.password})
   }
   let signup = await fetch(url, param)
   let data = await signup.json()
   if(data.success){
  
     localStorage.setItem('token',data.token)
     setTimeout(async() => {
     rout.push("/")
    }, 1000);
   }
   
     setLoginForm({password:"", email: ""})
    
   
      console.log(data);
      
   

   
 


 }
  return (
    <>
    
  
   
    <section  className="h-screen">
      <div  className="container px-6 py-12  h-full">
        <div  className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
 
         
          <div  className="md:w-8/12 lg:w-5/12 lg:ml-20   p-10 rounded-md shadow-lg">
          <div className='flex justify-center align-middle mb-6 mt-4'>
            <Image src={"/image/logo11.png"} width={200} height={2}></Image>
            </div>
               <h1 className='my-5 text-center text-2xl sm:text-3xl  font-bold  font-serif text-black'> Sign in to your acount   <span> <Link href={"/signup"} className='text-red-700 mt-1 sm:text-lg justify-center font-medium flex flex-col text-base '>Or sign up ?</Link></span></h1>
            
            <form onSubmit={handel}>
              <div  className="mb-4">
                <input
                  type="text"
                   className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  onChange={onChange}
                  value={loginForm.email}
                  name="email"
                />
              </div>


              <div  className="mb-4">
                <input
                  type="password"
                   className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={onChange}
                  value={loginForm.password}
                  name="password"
                />
              </div>

              <div  className="flex justify-between items-center mb-4">
                <div  className="form-group form-check">
                  <input
                    type="checkbox"
                     className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="check"
                
                  />
                  <label  className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                  >Remember me</label
                  >
                </div>

              <Link href={"/forgotPassword"}> 
                <div
                  href="#!"
                   className="text-red-700 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out" >Forgot password?</div>
                
                </Link>
              </div>


        
          
              <button
                type="submit"
                 className="inline-block px-7 sm:py-3 py-2 bg-blue-600 text-white uppercase font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
               
               
              >
             Sign in
              </button>
              <div
                 className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p  className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <a
                 className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{backgroundColor: "#3b5998"}}
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                   className="w-3.5 h-3.5 mr-2"
                >

                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  /></svg>Continue with Facebook
              </a>
           
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default login
