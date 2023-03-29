import { useRouter } from 'next/router'
import { useState } from 'react'
import mongoose from 'mongoose'
import Product from '../models/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function slug({ buyNow, addToCart, variant, products }) {

  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const CheckPin = async () => {

    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    let pinJson = await pins.json()
    if (pinJson.includes(parseInt(pin))) {
      toast.success('Your pincode is Serv!ce able', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setService(true)
    } else {
      setService(false)
      toast.error( 'Your pincode is not Serv!ceable', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }


    // console.log(service);
  }
  const onchange = (e) => {
    setPin(e.target.value)
  }
  const [color, setColor] = useState(products.color)
  const [size, setSize] = useState(products.size)
  const refreshVariant = (newcolor, newsize) => {

    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variant[newcolor][newsize]["slug"]}`
    window.location = url
  }


  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="root" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded" src={products.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">TASATATE</h2>
              <h1 className="text-gray-900 sm:text-3xl text-xl title-font  font-medium mb-1">{products.tittle} (<span className='uppercase'>{products.size}/</span>{products.color}) </h1>
              {/* <div className="flex mb-4">
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div> */}
              <p className="leading-relaxed">{products.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ">
                  <span className="mr-3 ">Color:</span>
                  {Object.keys(variant).includes("black") && Object.keys(variant['black']).includes(size) && <button onClick={() => refreshVariant('black', size)} className={`border-2 ${color === 'black' ? "border-black" : "border-gray-300"} ml-1 bg-black rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("red") && Object.keys(variant['red']).includes(size) && <button onClick={() => refreshVariant('red', size)} className={`border-2 ${color === 'red' ? "border-black" : "border-gray-300"} ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("white") && Object.keys(variant['white']).includes(size) && <button onClick={() => refreshVariant('white', size)} className={`border-2 ${color === 'white' ? "border-black" : "border-gray-300"} ml-1 bg-slate-200 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("fuchsia") && Object.keys(variant['fuchsia']).includes(size) && <button onClick={() => refreshVariant('fuchsia', size)} className={`border-2 ${color === 'fuchsia' ? "border-black" : "border-gray-300"} ml-1 bg-fuchsia-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("amber") && Object.keys(variant['amber']).includes(size) && <button onClick={() => refreshVariant('amber', size)} className={`border-2 ${color === 'amber' ? "border-black" : "border-gray-300"} ml-1 bg-amber-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("purple") && Object.keys(variant['purple']).includes(size) && <button onClick={() => refreshVariant('purple', size)} className={`border-2 ${color === 'purple' ? "border-black" : "border-gray-300"} ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("pink") && Object.keys(variant['pink']).includes(size) && <button onClick={() => refreshVariant('pink', size)} className={`border-2 ${color === 'pink' ? "border-black" : "border-gray-300"} ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("blue") && Object.keys(variant['blue']).includes(size) && <button onClick={() => refreshVariant('blue', size)} className={`border-2 ${color === 'blue' ? "border-black" : "border-gray-300"} ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("yellow") && Object.keys(variant['yellow']).includes(size) && <button onClick={() => refreshVariant('yellow', size)} className={`border-2 ${color === 'yellow' ? "border-black" : "border-gray-300"} ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variant).includes("rose") && Object.keys(variant['rose']).includes(size) && <button onClick={() => refreshVariant('rose', size)} className={`border-2 ${color === 'rose' ? "border-black" : "border-gray-300"} ml-1 bg-rose-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size:</span>
                  <div className="relative">
                    <select value={size} onChange={(e) => refreshVariant(color, e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-black text-base pl-3 pr-10">
                      {Object.keys(variant[color]).includes('s') && <option value={"s"}>S</option>}
                      {Object.keys(variant[color]).includes("m") && <option value={"m"}>M</option>}
                      {Object.keys(variant[color]).includes('lg') && <option value={"lg"}>Lg</option>}
                      {Object.keys(variant[color]).includes('xl') && <option value={"xl"}>XL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium ml-4 text-2xl text-gray-900">PKR {products.price}</span>
                <button onClick={() => buyNow(slug, 1, products.price, products.tittle, products.size, products.color)} className="ml-4 text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" >Buy Now</button>
                <button onClick={() => { addToCart(slug, 1, products.price, products.tittle, products.size, products.color) }} className="ml-4 text-white bg-red-700 from-orange-700 bg-gradient-to-bl border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" >Add to cart</button>
              </div>

              <div className="pin flex mt-6 space-x-2 text-sm">

                <input onChange={onchange} placeholder={"enter your pin code"} type="text" className=' border-black text-black mx-4  border-2' />
                <button onClick={CheckPin} className=" text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">check</button>
              </div>

              {(!service && service !== null) && <div className='text-red-700 tetx-sm mt-3'>
                Sorry | we not provide service in this area
              </div>}
       

              {(service && service !== null) && <div className='text-green-700 tetx-sm mt-3'>
                Congragulation | Request Possible Deliver as Soon
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.findOne({ slug: context.query.slug })
  // console.log(context.query);
  let variants = await Product.find({ tittle: product.tittle,category:product.category })
  // console.log(product.tittle);
  let colorSizeSlug = {}
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
    else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }




  return {
    props: { products: JSON.parse(JSON.stringify(product)), variant: JSON.parse(JSON.stringify(colorSizeSlug)) }
  }
}

export default slug
