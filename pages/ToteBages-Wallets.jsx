/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Product from '../models/Product';
import mongoose from 'mongoose';

const Tote = ({ product }) => {
  return (
    <div>
      <section className="text-gray-600 body-font p-3">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center cursor-pointer">
            {product.map((item) => {
              return (
                <Link passHref={true} key={item._id} href={'/bags/bags'}>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:ring-1 rounded-lg">
                    <a className="block relative rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        className="md:h-[30vh] h-[45vh] m-auto md:m-0 block hover:scale-105  duration-700"
                        src={item.img}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                      <p className="mt-1">{item.size}</p>
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
    return handler(req, res);
  } catch (error) {
    console.log(error);
  }
  let product = await Product.find({ category: 'totebages-wallets' });
  return {
    props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  };
}

export default Tote;
