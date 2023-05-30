"use client";
import Error from "@/components/Error";
import { useGetProductQuery } from "@/features/api/apiSlice";
import React from "react";
import CardProductDetails from "./cardProductDetails";

const ProductDetails = ({ params: { id } }) => {
  const { data: producDetail, isLoading, isError } = useGetProductQuery(id);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && producDetail?.id) {
    content = <CardProductDetails producDetail={producDetail} />;
  }
  console.log("producDetail", producDetail);
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        {content}
      </section>
    </>
  );
};

export default ProductDetails;
