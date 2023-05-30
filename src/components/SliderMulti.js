"use client";
import { useGetCategoryQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Error from "./Error";
import SliderCard from "./SliderCard";

const SliderMulti = () => {
  const { data: category, isLoading, isError } = useGetCategoryQuery();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // const productData = [
  //   {
  //     id: 1,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "Colorful sneakers",
  //     price: "$19.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 2,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //     name: "Sport sneakers",
  //     price: "$21.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 3,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "iWatch",
  //     price: "$99.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 4,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "Water Bottle",
  //     price: "$14.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 5,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "Vans sneakers",
  //     price: "$38.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 6,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "Coco Noir",
  //     price: "$149.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 7,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "Sunglasses",
  //     price: "$38.99",
  //     description: "Some text about the product..",
  //   },
  //   {
  //     id: 8,
  //     imageurl:
  //       "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "Dove cream",
  //     price: "$49.99",
  //     description: "Some text about the product..",
  //   },
  // ];
  let content = null;
  // decide what to render
  if (isLoading) {
    content = <>Loading....</>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && category?.length === 0) {
    content = <Error message="No product found!" />;
  }

  if (!isLoading && !isError && category?.length > 0) {
    content = category.map((categoryItem, i) => (
      <SliderCard key={i} category={categoryItem} />
    ));
  }
  return (
    <div className=" w-full">
      <Carousel responsive={responsive}>
        {content}
        {/* by default image sliding caling */}
        <div>
          {" "}
          <div className="relative  lg:w-[290px] w-[190px]  pl-2">
            <img
              // src={slide?.url}
              src="/images/fashion.png"
              alt="Image 1"
              className="w-full "
            />
            <div className="w-5/6 px-2 flex gap-5 py-2 bg-[#FDF8F8] border text-[19px] absolute left-0 bottom-[5%] shadow-lg ">
              <h2 className="text-[#000000] cursor-pointer">Fashion</h2>
              <h2 className="text-[#14B1F0] cursor-pointer ">Shop</h2>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <div className="relative  lg:w-[290px] w-[190px]  pl-2 pr-2">
            <img
              // src={slide?.url}
              src="/images/baby.png"
              alt="Image 1"
              className="w-full "
            />
            <div className="w-5/6 px-2 flex gap-5 py-2 bg-[#FDF8F8] border text-[19px] absolute left-0 bottom-[5%] shadow-lg ">
              <h2 className="text-[#000000] cursor-pointer">Babys</h2>
              <h2 className="text-[#14B1F0] cursor-pointer ">Shop</h2>
            </div>
          </div>
        </div>

        {/* demo purpose use this slider */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </Carousel>
    </div>
  );
};

export default SliderMulti;
