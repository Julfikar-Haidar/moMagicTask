import Image from "next/image";
import React from "react";

const CardThree = ({ item }) => {
  const { title, price, image } = item;

  return (
    <>
      <div className="flex justify-center items-center w-full cursor-pointer ">
        <Image
          //   src="/images/watch.png"
          src={image}
          width={317}
          height={230}
          alt="s"
          className="object-fill w-[317px] h-[400px]"
        />
      </div>
      <div className="pl-6">
        <h3 className="text-[15px] font-normal leading-3">
          {title.substring(0, 20)}
        </h3>
        <div className="flex items-center gap-2 mb-3 mt-2">
          <span className="text-[19px] font-normal text-[#D22727] ">
            RS {price}
          </span>
          <span className="text-[12px] leading-[13px] font-normal text-[#000000] line-through">
            RS 66,000
          </span>
        </div>
        <div className="flex items-center  gap-[60px]">
          <span className="text-[16px] font-normal text-[#0AAEB9] ">
            Already Sold: 6
          </span>
          <span className="text-[15px] leading-[13px] font-normal text-[#0AAEB9] ">
            Available: 30
          </span>
        </div>
      </div>
    </>
  );
};

export default CardThree;
