import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineClose, MdAccountCircle } from 'react-icons/md';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useState } from 'react';
function Navbar({ addToCart, removeFromCart, clearCart, cart, subTotal, user,logout }) {

  const ref = useRef()
  const [togel, togeldrop] = useState(false)
  const togelshow = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')

    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <>

      <div className='   flex py-3  shadow-md md:flex-row md:justify-start flex-col item-center  justify-center items-center sticky top-0 z-10 opacity-100 ' >
        <div className="logo mr-auto  md:mx-5 flex ">
 <div className='flex  items-center my-2'>

          <Link href={'/'}>  <Image src="/image/logo1.png" width={180} height={20} alt="Hellow" /></Link>

 </div>
        </div>
        <div className='nav   '>


          <ul className=' flex text-lg  my-5 md:my-0 sm:text-2xl md:mx-10   font-serif  items-center font-medium  justify-center cursor-pointer '>
            <Link href={'/shirt'}><li className=' md:mx-4 mx-2  hover:text-red-600 '>Shirts</li></Link>
            <Link href={'/Jacket'}><li className=' md:mx-4 mx-2 hover:text-red-600 '>Jackets</li></Link>
            <Link href={'/shoes'}><li className='md:mx-4  mx-2  hover:text-red-600'>Shoes</li></Link>
            <Link href={'/watches'}><li className='md:mx-4  mx-2  hover:text-red-600'>Watches</li></Link>


          </ul>

        </div>

        <div className='cart top-8 items-center absolute right-0 mx-5 flex '>
          {!user.value && <Link href={"/login"}> <span className='md:font-bold md:text-lg  mx-3 bg-red-800 rounded-md md:py-1 md:px-3 py-1 px-2'>Login</span>  </Link>}
 <div onMouseOver={()=>{
    togeldrop(true)
   }}
   
   onMouseLeave={()=>{
    togeldrop(false)
   }}>
   { togel && <div 
   className='absolute right-8 bg-red-200 top-6   cursor-pointer rounded-md shadow-xl px-5 w-40'>
            <ul className='font-bold text-center my-4'>
              <Link href={"/myAccount"}><li className='my-2 hover:text-red-900 text-black'>My Account</li></Link>
              <Link href={"/orders"}> <li className='my-2 hover:text-red-900 text-black'>Orders</li></Link>
              <a onClick={logout}><li className='my-2 hover:text-slate-900 text-black'>Log Out</li></a>
              <Link href={"/signup"}> <li className='my-2 hover:text-red-900 text-black'>Create Account</li></Link>

            </ul>
          </div>}
          
          {user.value &&  <MdAccountCircle  className=' md:text-3xl text-2xl mx-4 text-black ' />}
          </div>
          {/* {user.value && <buttom onClick={logout} className='font-bold cursor-pointer text-lg  mx-3 bg-red-800 from-orange-700 bg-gradient-to-tr rounded-md py-1 px-3'>Logout</buttom>} */}
          <button onClick={togelshow} className=' sm:text-2xl text-xl text-black'><FaShoppingCart /></button>
        </div>

        <div ref={ref} className={`top-0 right-0 overflow-y-scroll sidebar h-[100vh] absolute sm:w-96 w-full text-black   py-10 px-16 bg-slate-200   shadow-xl transform transition-transform ${Object.keys(cart).length !== 0 ? "translate-x-0 " : "translate-x-full"}`}>
          <h2 className='font-bold sm:text-2xl text-xl'>Shoping cart</h2>
          <span onClick={togelshow} className='top-4  text-2xl text-red-600 right-3 absolute cursor-pointer'><MdOutlineClose /></span>

          <ol className='list-decimal  '>
            {Object.keys(cart).length == 0 && <div className='mt-4 font-normal my-2'>No item in the cart</div>}
            {Object.keys(cart).map((key) => {
              return <li key={key}>
                <div className='item flex my-5  font-medium'>
                  <div className=' w-2/3  mx-1 text-sm  '>{cart[key].name}( <span className=' uppercase'>{cart[key].size}</span>/{cart[key].variant})</div>

                  <div className=' w-1/3  text-red-900   items-center  text-lg justify-center flex'><AiFillPlusCircle onClick={() => { addToCart(key, 1, cart[key].price, cart[key].name, cart[key].size, cart[key].variant) }} /><span className='mx-1 text-black'>{cart[key].qty}</span> <AiFillMinusCircle onClick={() => { removeFromCart(key, 1, cart[key].price, cart[key].name, cart[key].size, cart[key].variant) }} /></div>
                </div>
              </li>

            })}

          </ol>
          <div className="flex my-4">
            <Link href={"/checkout"}>   <button className="flex mr-2   bg-red-700 border-0 py-1 px-2 sm:px-6 focus:outline-none hover:bg-red-700 rounded text-lg"><BsBagCheckFill className='m-1' /><span className='mx-1 text-white font-normal'>checkout</span> </button></Link>
            <button onClick={clearCart} className="flex  mr-2 bg-red-700 border-0 py-1 px-2 sm:px-6 focus:outline-none hover:bg-red-700 rounded text-lg"><BsBagCheckFill className='m-1' /><span className='mx-1 text-white font-normal'>Clear</span> </button>

          </div>

        </div>
      </div>




    </>
  )
}

export default Navbar
