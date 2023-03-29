import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import '@/styles/globals.css'
import { Carter_One } from '@next/font/google'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
export default function App({ Component, pageProps }) {

 const router=useRouter()
 const [progress, setProgress] = useState(0)
   const [cart ,setCart]=useState({})
   const [subTotal,setSubTotal]=useState(0)
   const [user,setUser]=useState({value:null})
   const [key,setKey]=useState()
useEffect(()=>{
  router.events.on('routeChangeStart', ()=>{
    setProgress(40)
  })
  router.events.on('routeChangeComplete', ()=>{
    setProgress(100)
  })
try{
  if(localStorage.getItem("cart")){
    setCart(JSON.parse(localStorage.getItem("cart")))
    saveCart(JSON.parse(localStorage.getItem("cart")))
  }

  
}catch(err){
  console.log(err);
}
const token=localStorage.getItem("token")
if(token){
  setUser({value:token})
  setKey(Math.random())
}

},[router.query])



  const saveCart=(cart)=>{
    try {
      
      localStorage.setItem("cart",JSON.stringify( cart))
      let subt=0;
      let keys=Object.keys(cart)
      for (let index = 0; index< keys.length; index++) {
        console.log(keys);
         subt +=  cart[keys[index]].price *  cart[keys[index]].qty
        
      }
      setSubTotal(subt)
    } catch (error) {
      console.log(error);
    }
   
}

  const addToCart=(itemCode,qty,price,name,size,variant)=>{
   try{
    let mycart=cart;


    if(itemCode in cart){
      mycart[itemCode].qty=cart[itemCode].qty + qty
    }else{
      mycart[itemCode]={qty:1,price,name,size,variant}

    }
    setCart(mycart)
    saveCart(mycart)
    console.log(mycart);
   } catch(err){
  console.log(err);
   }

  }


  const buyNow=(itemCode,qty,price,name,size,variant)=>{
    let newCart={itemCode:{qty:1,price,name,size,variant}}
   
    setCart(newCart)
    saveCart(newCart)
    console.log(newCart);
    router.push('/checkout')
    }





  const removeFromCart=(itemCode,qty,price,name,size,variant)=>{
   
   try{
    let mycart=cart;
    if(itemCode in cart){
      mycart[itemCode].qty=cart[itemCode].qty - qty
    }
    if(mycart[itemCode]["qty"] <=0 ){
      delete mycart[itemCode]
    }
    setCart(mycart)
    saveCart(mycart)
 console.log(mycart);
  } catch(err){

   console.log(err);
  }
}


  const clearCart=()=>{
    setCart({})
    saveCart({})
  }

  const logout = (e) => {
    
    localStorage.removeItem("token")
    setUser({value:null})
    setKey(Math.random())
    
    router.push("/login")
  
  }

  return <>
  <Head>
        <title>TasaTate</title>
        <meta name="description" content="tasatate TasaTate Tasa Ttate  fashion " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="image/logos.png" />

     </Head>
     <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={100}
        onLoaderFinished={() => setProgress(0)}
      />

   {key && <Navbar key={key} user={user} logout={logout} buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} ></Navbar>}
    <Component cart={cart}  buyNow={buyNow} logout={logout}  addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}  subTotal={subTotal}  {...pageProps} />
    <Footer></Footer>

  </>
}
