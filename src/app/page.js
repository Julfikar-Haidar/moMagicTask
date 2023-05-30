"use client";
import Image from "next/image";
import SliderMulti from "@/components/SliderMulti";
import ProductList from "@/components/product/ProductList";
import ProductBycategory from "@/components/product/ProductBycategory";
import SingleSlider from "@/components/SingleSlider";

export default function Home() {
  return (
    <>
      <section className="">
        <SingleSlider />
      </section>
      {/* second slider start */}
      <section className="bg-[#F6F1D5] from-yellow-300 to-transparentWhite ">
        <SliderMulti />
        {/* border line  */}
      </section>
      <div className="w-full flex flex-col justify-between  px-[70px] mt-10">
        <div className="border-b border-gray-200"></div>
      </div>

      {/* section add cart */}
      <section className="w-full px-7 md:mb-[100px] mb-7 mt-8">
        <h3 className="font-normal  text-[28px] leading-[34px] md:pl-[45px] md:text-left text-center capitalize mb-[30px] mt-[50px]">
          <span className="text-[#00CAD7] ">New</span> Arrivals
        </h3>
        <ProductList />
      </section>
      {/* sepecial product tab and search by catgeory  */}
      <section className="mb-10">
        <ProductBycategory />
        {/* <Loop /> */}
      </section>
    </>
  );
}
