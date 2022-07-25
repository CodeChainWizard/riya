import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';

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
        className="sideCart absolute top-0 p-10 right-0 bg-pink-100 flex transition-transform  translate-x-full transform"
      >
        <AiOutlineShopping className="mt-[4px] mr-[3px] text-xl" />
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-4 right-3">
          <AiOutlineClose className=" font-bold cursor-pointer text-xl text-black" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
