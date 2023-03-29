import { useRouter } from "next/router";
import React, { useEffect } from "react";

function order({ cart }) {
  const rout = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return;
    } else {
      rout.push("/login");
    }
  }, [rout.query]);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                TATEWEAR.COM
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id : #33001
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow  py-2 text-lg px-1">Item</a>
                <a className="flex-grow  py-2 text-lg px-1">Quantity</a>
                <a className="flex-grow 0 py-2 text-lg px-1">price</a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">T-shirt</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">880 PKR</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Denim </span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">1600 PKR</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div>
              <div className="flex flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {" "}
                  subTotal: 58.00 PKR
                </span>
                <div className="my-5">
                  <button className="flex mx-0 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default order;
