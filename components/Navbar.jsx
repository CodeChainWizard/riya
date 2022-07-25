import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import {
  AiOutlineShopping,
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };

  const ref = useRef();

  return (
    <div className="flex shadow-md flex-col md:flex-row md:justify-start justify-center items-center bg-[#f7eee798]">
      <div
        className="logo mx-[20px] md:width={100}
          md:height={100} cursor-pointer"
      >
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt=""
            width={70}
            height={70}
            className="rounded-full"
          />
        </Link>
      </div>

      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold text-[18px] md:text-[16px]">
          <Link href={'/upperWare'}>
            <a href="#">
              <li>Upper-Ware</li>
            </a>
          </Link>
          <Link href={'/lowerWare'}>
            <a href="#">
              <li>Lower-Ware</li>
            </a>
          </Link>
          <Link href={'/watches'}>
            <a href="#">
              <li>Watchs</li>
            </a>
          </Link>
          <Link href={'/shose'}>
            <a href="#">
              <li>Shoes</li>
            </a>
          </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-7">
        <FaShoppingCart className="text-2xl md:text-3xl cursor-pointer" />
      </div>

      {/* SideBar */}

      <div
        ref={ref}
        className="w-72 h-full sideCart absolute top-0 right-0 px-8 py-10  bg-pink-100  transition-transform  translate-x-full transform"
      >
        <h2 className="font-bold text-xl text-center flex mb-[15px]">
          <AiOutlineShopping className="mr-[10px] mt-[4px]" />
          Shopping Cart
        </h2>
        <span
          onClick={toggleCart}
          className="absolute top-6 right-5 cursor-pointer text-2xl "
        >
          <AiOutlineClose />
        </span>

        <ol className="list-decimal ml-[20px] font-thin">
          <li>
            <div className="item flex">
              <div className="w-2/3 ">GucciBags - Used the Bag</div>
              <div className="w-1/3 flex items-center font-semibold justify-center">
                <AiOutlineMinusCircle className="mx-1 text-lg cursor-pointer" />{' '}
                1{' '}
                <AiOutlinePlusCircle className="mx-1 text-lg cursor-pointer" />
              </div>
            </div>
          </li>
        </ol>
        <div className="w-full flex -ml-[15px] mt-[20px]">
          <button className="flex text-white bg-blue-400 border py-2 px-5 mx-[10px] focus:outline-none hover:bg-pink-500 hover:duration-500 rounded text-sm">
            <BsFillPatchCheckFill className="mt-[3px] mr-[4px]" />
            CheckOut
          </button>
          <button className="flex mx-auto text-white bg-blue-400 border py-2 px-9 focus:outline-none hover:bg-pink-500 hover:duration-500  rounded text-sm">
            <MdPayment className="mt-[2px] mr-[4px] text-base" />
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
