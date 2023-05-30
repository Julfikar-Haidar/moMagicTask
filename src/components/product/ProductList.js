import React from "react";
import { useGetProductsQuery } from "@/features/api/apiSlice";
import Error from "../Error";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  let content = null;
  // decide what to render
  if (isLoading) {
    content = <>Loading....</>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = <Error message="No product found!" />;
  }

  if (!isLoading && !isError && products?.length > 0) {
    content = products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  return (
    <>
      <div className="flex flex-wrap w-full justify-center gap-6">
        {content}
      </div>
    </>
  );
};

export default ProductList;
