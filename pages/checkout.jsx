import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import {
  AiOutlineShopping,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineClear,
} from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';

const Checkout = ({ cart, addtocart, removecart, subtotal }) => {
  return (
    <div className="container sm:m-auto">
      <h1 className="font-bold my-8 text-center text-3xl">CheckOut</h1>
      <h2 className="mx-[78px] mb-[5px] text-xl font-bold">
        1. Delivery Details
      </h2>
      <div className="mx-auto flex my-4">
        <div className="px-20 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[130px] md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-20 w-1/2 -ml-[40px]">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-[130px] md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-20 w-full">
        <div className="mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Address
          </label>

          <textarea
            name="address"
            id="address"
            className="w-full resize-none bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>

      <div className="mx-auto flex my-4">
        <div className="px-20 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              PhoneNumber
            </label>
            <input
              type="phone"
              id="name"
              name="name"
              className="w-[130px] md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-20 w-1/2 -ml-[40px]">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-[130px] md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-20 w-1/2 ">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-[130px] md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-20 w-1/2 -ml-[40px]">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              PinCode
            </label>
            <input
              type="phone"
              id="pincode"
              name="pincode"
              className="w-[130px] md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="mx-[78px] mb-[5px] text-xl font-bold">
        2. Review Cart Items And Pay
      </h2>
      <div className="rounded-md sideCart p-6 m-4 bg-[#FBEEE7]">
        <ol className="list-decimal font-semibold mx-[60px] mb-[5px]">
          {Object.keys(cart).length == 0 && (
            <div className="text-center font-medium text-sm text-red-600">
              No Item in Your Cart.
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="font-semibold">{cart[k].name}</div>
                  <div className="w-1/3 ml-[25%] md:ml-[20%] flex items-center font-semibold justify-center text-lg">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removecart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="mx-1 text-lg cursor-pointer"
                    />
                    {cart[k].qty}
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addtocart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="mx-1 text-lg cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
          <span className="subtotal">
            Your All Item Price Total is:- ₹{subtotal}
          </span>
        </ol>
      </div>
      <button className="flex text-white bg-blue-400 border py-2 px-6 mx-[7%] mt-[20px] focus:outline-none hover:bg-pink-500 hover:duration-500 rounded text-sm">
        <MdOutlinePayment className="mt-[3px] mr-[4px]" />
        Pay ₹{subtotal}
      </button>
    </div>
  );
};

export default Checkout;
