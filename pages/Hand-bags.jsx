/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Product from '../models/Product';
import mongoose from 'mongoose';

const upperWare = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-[20px] py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center cursor-pointer">
            {Object.keys(products).map((item) => {
              return (
                <Link
                  passHref={true}
                  href={`/bags/${products[item].slug}`}
                  key={products[item]._id}
                >
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:ring-1 rounded-lg ">
                    <a className="block relative rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        className="md:h-[36vh] h-[30vh] m-auto block hover:scale-105 duration-700"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className="mt-1">
                        {products[item].size.includes('S') && (
                          <span className="border mx-1 px-1 border-gray-600">
                            S
                          </span>
                        )}
                        {products[item].size.includes('M') && (
                          <span className="border mx-1 px-1 border-gray-600">
                            M
                          </span>
                        )}
                        {products[item].size.includes('L') && (
                          <span className="border mx-1 px-1 border-gray-600">
                            L
                          </span>
                        )}
                        {products[item].size.includes('XL') && (
                          <span className="border mx-1 px-1 border-gray-600">
                            XL
                          </span>
                        )}
                        {products[item].size.includes('XXL') && (
                          <span className="border mx-1 px-1 border-gray-600">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].color.includes('red') && (
                          <button className="border-2 border-black ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('pink') && (
                          <button className="border-2 border-black ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('yellow') && (
                          <button className="border-2 border-black ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('white') && (
                          <button className="border-2 border-black ml-1 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('green') && (
                          <button className="border-2 border-black ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('blue') && (
                          <button className="border-2 border-black ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('black') && (
                          <button className="border-2 border-black ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('purple') && (
                          <button className="border-2 border-black ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('gray') && (
                          <button className="border-2 border-black ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('orange') && (
                          <button className="border-2 border-black ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('sky') && (
                          <button className="border-2 border-black ml-1 bg-sky-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('violet') && (
                          <button className="border-2 border-black ml-1 bg-violet-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('violet') && (
                          <button className="border-2 border-black ml-1 bg-violet-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('emerald') && (
                          <button className="border-2 border-black ml-1 bg-emerald-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('amber') && (
                          <button className="border-2 border-black ml-1 bg-amber-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('lime') && (
                          <button className="border-2 border-black ml-1 bg-lime-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('indigo') && (
                          <button className="border-2 border-black ml-1 bg-indigo-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes('teal') && (
                          <button className="border-2 border-black ml-1 bg-teal-700  rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
  let products = await Product.find({ category: 'hand-bags' });
  let handbags = {};
  for (let item of products) {
    if (item.title in handbags) {
      if (
        !handbags[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        handbags[item.title].color.push(item.size);
      }
      if (
        !handbags[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        handbags[item.title].size.push(item.size);
      }
    } else {
      handbags[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        handbags[item.title].color = [item.color];
        handbags[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default upperWare;
