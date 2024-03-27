"use client";
import React, { useEffect, useState } from "react";
import ProductSection from "./ProductSection";
import Product from "./Product";
import allProducts from "../data/allProducts.json";
export default function Products() {
  return (
    <div>
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {allProducts.map((product, index) => {
            if (index < 12) {
              return <Product product={product} key={product.id}></Product>;
            }
          })}
        </div>
      </section>
      <ProductSection></ProductSection>
    </div>
  );
}
