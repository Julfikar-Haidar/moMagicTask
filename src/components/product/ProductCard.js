import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { id, title, description, image, price, rating, category } = product;

  return (
    <>
      <div className="w-[196px] max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">
        <h2 className="ml-2 font-normal text-[12px] leading-[15px] text-[#000000] mb-2">
          {title.substring(0, 20)}
        </h2>
        <h2 className="ml-2 font-normal text-[14px] leading-[18px] text-[#034E53] mb-2">
          {description.substring(0, 20)}...
        </h2>
        <Link href={`/productDetails/${id}`} className="">
          <Image
            className="mb-2 rounded-t-lg w-[158px] h-[129px] object-contain"
            src={image}
            alt="product image"
            width={158}
            height={129}
          />
        </Link>
        <div className="">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[13px] font-normal text-[#697475] line-through">
              RS 60.000
            </span>
            <span className="text-[15px] leading-[15px] font-normal text-[#0AAEB9] ">
              RS {price}
            </span>
          </div>
          <Link
            href={`/productDetails/${id}`}
            className="border bg-[#15ADB7] px-9 py-2 flex items-center text-white cursor-pointer hover:text-blue-200 duration-100"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
