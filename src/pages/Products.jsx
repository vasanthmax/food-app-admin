import React, { useState } from "react";
import { ProductCard, AddProductModal } from "../components";
const Products = () => {
  const [addmodal, setAddModal] = useState(false);
  return (
    <div>
      <div className="flex h-10 align-middle justify-between w-full mb-8">
        <h3 className="text-4xl font-bold text-gray-600">Products</h3>
        <p
          className="h-12 w-12 rounded-full bg-purple-400 flex align-middle justify-center items-center text-3xl text-white cursor-pointer"
          onClick={() => setAddModal(true)}
        >
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
      <AddProductModal modal={addmodal} setAddModal={setAddModal} />
    </div>
  );
};

export default Products;
