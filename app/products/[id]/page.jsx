"use client";

import React, { useState } from "react";
import allProducts from "../../../data/allProducts.json";
import Image from "next/image";
import Link from "next/link";
export default function ProductId({ params }) {
  const [product, setProduct] = useState(
    allProducts.find((product) => product.id === parseInt(params.id))
  );
  const getDiscountPrice = (price, discountPercentage) => {
    return (price - (discountPercentage * price) / 100).toFixed(2);
  };

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={product.thumbnail}
              width={400}
              height={500}
              className=" mx-auto object-cover"
              alt=""
            />

            <div className="flex gap-4 mt-4  overflow-x-scroll">
              {product.images.map((image, index) => {
                return (
                  <Image
                    onClick={() => {
                      setProduct({ ...product, thumbnail: image });
                    }}
                    key={index}
                    width={100}
                    height={100}
                    src={image}
                    className=" mx-auto border object-cover"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {product.title}
            </h1>
            <span className="text-[#919090] my-3">
              <Link href={`/category/${product.category}`}>
                {product.category}
              </Link>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {Array(Math.round(product.rating))
                .fill()
                .map((star, index) => (
                  <Image
                    key={index}
                    src="/star.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${product.price}
                </span>
                <span className="font-bold text-2xl">
                  ${getDiscountPrice(product.price, product.discountPercentage)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{product.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {getDiscountPrice(product.price, product.discountPercentage)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
