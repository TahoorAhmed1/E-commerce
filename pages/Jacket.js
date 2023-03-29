import React, { useEffect } from 'react'
import mongoose from "mongoose";
import Link from 'next/link'
import Product from './models/Product';
import { useRouter } from 'next/router';
function denimJacket({ products }) {

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center ">

            {Object.keys(products).length == 0 && <p>This product is out of stock . New product avalibal soon </p> }
            {Object.keys(products).map((item) => {
              return <div key={Math.random()} className="lg:w-1/5 md:w-1/2 p-4 w-full m-5 shadow-lg cursor-pointer">
                <a className="block relative rounded overflow-hidden ">
                  <img alt="ecommerce" className=" md:h-[36vh] block  m-auto h-[30vh] " src={products[item].image} />
                </a>
                <Link  passHref={true} href={`/product/${products[item].slug}`}>
                  <div key={Math.random()} className="mt-4 text-center md:text-left ">
                    <h3 className="text-black text-xs tracking-widest title-font animate-pulse mb-1">{products[item].tittle}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].discription}</h2>
                    <p className="mt-1 text-slate-900 "><span className='font-bold text-xs'>PKR</span> {products[item].price}</p>
                    <div className="mt-1  ">
                      {products[item].size.includes('s') && <span className='border mx-1 rounded-sm border-black px-1'>S</span>}
                      {products[item].size.includes('m') && <span className='border mx-1 rounded-sm border-black px-1'>M</span>}
                      {products[item].size.includes('lg') && <span className='border mx-1 rounded-sm border-black px-1'>Lg</span>}
                      {products[item].size.includes('xl') && <span className='border mx-1 rounded-sm border-black px-1'>XL</span>}



                    </div>

                    <div className='mt-1'>
                      {products[item].color.includes('red') && <button className={`border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes('black') && <button className={`border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes('white') && <button className={`border-2 border-gray-300 ml-1 bg-slate-50 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes('yellow') && <button className={`border-2 border-gray-300 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes('purple') && <button className={`border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes('blue') && <button className={`border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes("fuchsia") && <button className={`border-2 border-gray-300 ml-1 bg-fuchsia-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes("brown") && <button className={`border-2 border-gray-300 ml-1 bg-amber-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
                      {products[item].color.includes("pink") && <button className={`border-2 border-gray-300 ml-1 bg-pink-600 rounded-full w-6 h-6 focus:outline-none`}></button>}

                    </div>
                  </div>
                </Link>
              </div>

            })}
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
  let products = await Product.find({ category: "denimJacket" })

  let denimJacket = {}
  for (let item of products) {
    if (item.tittle in denimJacket) {
      if (!denimJacket[item.tittle].color.includes(item.color) && item.avalibalQuantity > 0) {
        denimJacket[item.tittle].color.push(item.color)
      }
      if (!denimJacket[item.tittle].size.includes(item.size) && item.avalibalQuantity > 0) {
        denimJacket[item.tittle].size.push(item.size)
      }
    }
    else {
      denimJacket[item.tittle] = JSON.parse(JSON.stringify(item))
      if (item.avalibalQuantity > 0) {
        denimJacket[item.tittle].color = [item.color]
        denimJacket[item.tittle].size = [item.size]
        console.log([item.color]);
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(denimJacket)) }
  }
}
export default denimJacket


