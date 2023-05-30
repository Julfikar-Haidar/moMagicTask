import Image from "next/image";
import React from "react";

const CardFive = ({ item }) => {
  const { title, price, image } = item;

  return (
    <>
      <div className="bg-white border flex flex-col  w-full  h-1/2 py-2 cursor-pointer">
        <div className="flex justify-self-center self-center	">
          <Image
            src={image}
            width={300}
            height={170}
            alt="greenSave"
            className="object-contain  w-[200px] h-[140px]  "
          />
        </div>
        <div className="pl-6 mt-3">
          <h3 className="text-[15px] font-normal leading-3">
            {title.substring(0, 20)}
          </h3>
          <div className="flex items-center gap-2 mb-1 mt-2">
            <span className="text-[19px] font-normal text-[#B8A023] ">
              RS {price}
            </span>
            <span className="text-[12px] leading-[13px] font-normal text-[#000000] line-through">
              RS 66,000
            </span>
          </div>
          <div className="flex items-center  gap-[60px]">
            <span className="text-[16px] font-normal text-[#C82020] ">
              Already Sold: 6
            </span>
            <span className="text-[15px] leading-[13px] font-normal text-[#C82020] ">
              Available: 30
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFive;
