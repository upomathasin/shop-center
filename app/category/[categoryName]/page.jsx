"use client";
import ProductSection from "@/components/ProductSection";
import { usePathname } from "next/navigation";
import allProducts from "../../../data/allProducts.json";
import Product from "@/components/Product";
import CustomLink from "@/components/CustomLink";
export default function Page() {
  const path = usePathname();
  const categoryName = path.split("/")[2];

  const products = allProducts.filter((product) => {
    if (categoryName === "all") {
      return product;
    } else {
      return product.category === categoryName;
    }
  });

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <button className="hover:border-b border-black block h-6 box-border mt-4">
            <CustomLink path="/category/all"> All</CustomLink>
          </button>

          <button className="hover:border-b border-black block h-6 box-border mt-5">
            <CustomLink path="/category/smartphones"> Smartphones</CustomLink>
          </button>
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            <CustomLink path="/category/laptops"> Laptops</CustomLink>
          </button>
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            <CustomLink path="/category/fragrances"> Fragrances</CustomLink>
          </button>
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            <CustomLink path="/category/skincare"> Skincare</CustomLink>
          </button>
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            <CustomLink path="/category/groceries"> Groceries</CustomLink>
          </button>
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </section>

      <ProductSection></ProductSection>
    </main>
  );
}
