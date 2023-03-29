import React from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import axios from "axios";
import getStripe from "./getStripe";
function checkout({ cart, clearCart, addToCart, removeFromCart, subTotal }) {
  const initaiatePayment = async () => {
    const { data: id } = axios.post("/api/StripeCheckout", {
      item: Object.keys(cart).map((key) => {
        console.log(key);
      }),
    });
    const stripe = await getStripe();
    await stripe.initaiatePayment({ checkoutSesoin: sessionId.id });
  };
  return (
    <>
      <div className="container sm:m-auto px-2  ">
        <h1 className="font-bold text-4xl my-12 text-center  ">Check out</h1>
        <h1 className="text-xl font-semibold mx-4">1 Deliery Details</h1>
        <div className="mx-auto  flex my-4 ">
          <div className="px-5 w-1/2 ">
            <div className=" mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-5 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="name"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto textarea  flex my-2">
          <div className="px-5 w-full">
            <div className=" mb-4">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-900"
              >
                Address
              </label>
              <textarea
                type="text"
                id="address"
                name="address"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                cols="30"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mx-auto   flex my-1">
          <div className="px-5 w-full">
            <div className=" mb-4">
              <label
                htmlFor="number"
                className="leading-7 text-sm text-gray-900"
              >
                Number
              </label>

              <input
                type="text"
                id="number"
                name="number"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-5 w-full">
            <div className=" mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-900">
                City
              </label>

              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto  flex my-2">
          <div className="px-5 w-full">
            <div className=" mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-900"
              >
                State
              </label>

              <input
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-5 w-full">
            <div className=" mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-900"
              >
                Pincode
              </label>

              <input
                type="text"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <h1 className="text-xl font-semibold mx-4">
          2. Review Cart Item & pay
        </h1>
        <div className=" sidebar   p-6 m-2 bg-pink-100  shadow-xl ">
          <ol className="list-decimal  ">
            {Object.keys(cart).length == 0 && (
              <div className="mt-4 font-normal my-2">No item in the cart</div>
            )}
            {Object.keys(cart).map((key) => {
              return (
                <li key={key}>
                  <div className="item flex my-5  font-medium">
                    <div className="   mx-1 text-lg  ">
                      {cart[key].name} (
                      <span className=" uppercase">{cart[key].size}</span>/
                      {cart[key].variant})
                    </div>

                    <div className=" w-1/3  text-red-900   items-center  text-xl justify-center flex">
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            key,
                            1,
                            cart[key].price,
                            cart[key].name,
                            cart[key].size,
                            cart[key].variant
                          );
                        }}
                      />
                      <span className="mx-1 text-black">{cart[key].qty}</span>{" "}
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            key,
                            1,
                            cart[key].price,
                            cart[key].name,
                            cart[key].size,
                            cart[key].variant
                          );
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
            <span className="subTotal font-bold">SubTotal: {subTotal} PKR</span>
          </ol>
        </div>
        <div className="flex my-4 mx-4">
          <Link href={"/checkout"}>
            {" "}
            <button
              onClick={initaiatePayment}
              className="flex mr-4   bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg"
            >
              <BsBagCheckFill className="m-1" />
              <span className="mx-1 text-black font-normal">
                Pay : {subTotal}PKR
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default checkout;
