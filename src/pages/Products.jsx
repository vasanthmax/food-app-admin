import React from "react";
import { ProductCard } from "../components";
const Products = () => {
  return (
    <div>
      <div className="flex h-10 align-middle justify-between w-full mb-4">
        <h3 className="text-4xl font-bold">Products</h3>
        <p className="h-10 w-10 rounded-full bg-purple-400 flex align-middle justify-center items-center text-2xl text-white cursor-pointer">
          +
        </p>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-12">
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
        <div className="lg:col-span-3 md:col-span-6 xl:col-span-3 col-span-1">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
