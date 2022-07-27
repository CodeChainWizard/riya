/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CgTrack } from 'react-icons/cg';

const Order = ({ subtotal }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Gucci
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id:- #96632
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order has been successfully placed.
            </p>
            <div className="flex mb-4">
              <a className="flex-grow text-center  py-2 text-lg px-1">
                Item Description
              </a>
              <a className="flex-grow text-center py-2 text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow text-center py-2 text-lg px-1">
                Price Total
              </a>
            </div>

            <div className="flex border-t border-gray-200 py-2 text-center justify-center">
              <span className="text-gray-500">Chique Bags(Red)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹1599</span>
            </div>
            <div className="flex border-t border-gray-200 py-2 text-center justify-center">
              <span className="text-gray-500">Chique Bags(Red)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹2500</span>
            </div>
            <div className="flex border-t border-gray-200 py-2 text-center justify-center mb-[10%]">
              <span className="text-gray-500">Chique Bags(Red)</span>
              <span className="ml-auto text-gray-900">3</span>
              <span className="ml-auto text-gray-900">₹7500</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-xl mt-[7px] text-gray-900">
                Total Price: ₹9000
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 duration-700 rounded">
                <CgTrack className="text-lg mt-[4px] mr-[3px]" />
                Track Order
              </button>
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
  );
};

export default Order;
