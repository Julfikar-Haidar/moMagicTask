"use client";
import {
  useGetCategoryQuery,
  useGetProductByCategoryQuery,
} from "@/features/api/apiSlice";
import { useState } from "react";
import Error from "../Error";
import Image from "next/image";
import CardOne from "../ProductCategory/CardOne";
import CardTwo from "../ProductCategory/CardTwo";
import CardThree from "../ProductCategory/CardThree";
import CardFour from "../ProductCategory/CardFour";
import CardFive from "../ProductCategory/CardFive";

const ProductBycategory = () => {
  const [selectTab, setSelectTab] = useState(0);
  const [nameOfCategory, setNameofCategory] = useState("electronics");
  const {
    data: productByCategory,
    isLoading,
    isError,
  } = useGetProductByCategoryQuery({ categoryName: nameOfCategory, limit: 5 });
  const {
    data: category,
    isLoading: categoryLoader,
    isError: categoryError,
  } = useGetCategoryQuery();

  const handleTabSelect = (index, name) => {
    console.log("name,", name);
    setSelectTab(index);
    setNameofCategory(name);
  };

  // console.log("electronics", productByCategory);
  const prevSlide = (rcvArg) => {
    const isFirstSlide = selectTab === 0;
    const newIndex = isFirstSlide ? category?.length - 1 : selectTab - 1;
    setSelectTab(newIndex);
    const foundElement = category.find((element, i) => i === newIndex);
    handleTabSelect(newIndex, foundElement);
  };
  const nextSlide = () => {
    const isLastSlide = selectTab === category?.length - 1;
    const newIndex = isLastSlide ? 0 : selectTab + 1;
    setSelectTab(newIndex);
    const foundElement = category.find((element, i) => i === newIndex);
    handleTabSelect(newIndex, foundElement);
  };

  let content = null;
  // decide what to render
  if (isLoading) {
    content = <>Loading....</>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && productByCategory?.length === 0) {
    content = <Error message="No sepecial product found!" />;
  }

  // if (!isLoading && !isError && productByCategory?.length > 0) {
  //   content = productByCategory.map((book) => <Card key={book.id} book={book} />);
  // }
  let itemOne = null;
  let itemTwo = null;
  let itemThree = null;
  let itemFour = null;
  let itemFive = null;

  {
    productByCategory?.map((item, index) => {
      switch (index % 5) {
        case 0:
          itemOne = <CardOne key={item.id} item={item} />;

        case 1:
          itemTwo = <CardTwo key={item.id} item={item} />;

        case 2:
          itemThree = <CardThree key={item.id} item={item} />;

        case 3:
          itemFour = <CardFour key={item.id} item={item} />;

        case 4:
          itemFive = <CardFive key={item.id} item={item} />;

        default:
          return null;
      }
    });
  }

  return (
    <>
      {/* headind and tab view start*/}
      <div className="w-full lg:flex justify-start items-center gap-20  px-[70px] relative mb-4">
        <h1 className="md:text-[28px] font-normal md:leading-[33px] text-[17px] text-[#00CAD7] md:w-2/5 w-full md:text-left text-center mt-[-10px] md:mb-0 mb-10 ">
          Best <span className="text-[#000000]">Deals</span>
        </h1>
        <div className="overflow-x-auto scroll-smooth no-scrollbar mt-3">
          <div className="mb-4 w-full flex items-center ">
            <ul className="text-sm font-medium text-center flex gap-6">
              {category?.map((tabItem, i) => (
                <li key={i} className="mr-2 ">
                  <a
                    key={i}
                    onClick={() => handleTabSelect(i, tabItem)}
                    className={`  border-b-2 rounded-t-lg whitespace-nowrap	uppercase	 ${
                      selectTab == i ? "border-blue-500" : ""
                    } `}
                  >
                    {tabItem}
                  </a>
                </li>
              ))}

              <div className="absolute lg:right-[20px] right-[40px] lg:top-[10px] top-[4px]">
                <button onClick={() => prevSlide(category)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="lg:w-5 lg:h-5 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button onClick={nextSlide}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="lg:w-5 lg:h-5 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* product start */}

      {isLoading ? (
        <div className="flex justify-center items-center">Loading....</div>
      ) : isError ? (
        <Error message="There was an error" />
      ) : !isLoading && !isError && productByCategory?.length === 0 ? (
        <Error message="No sepecial product found!" />
      ) : (
        !isLoading &&
        !isError &&
        productByCategory && (
          <div className="overflow-hidden h-[500px]  overflow-y-auto">
            <div
              className="grid lg:grid-cols-3  grid-cols-1 gap-4  w-full lg:px-[50px] px-[10px] md:px-[50px] mb-3 "
              // key={index}
            >
              <div className="flex flex-col gap-3   w-full ">
                {itemOne}
                {itemTwo}
              </div>

              <div className="bg-[#FFFFFF] w-full py-2 border h-[510px]">
                {itemThree}
              </div>
              <div className=" flex flex-col gap-2  w-full h-[510px]">
                {itemFour}
                {itemFive}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ProductBycategory;
