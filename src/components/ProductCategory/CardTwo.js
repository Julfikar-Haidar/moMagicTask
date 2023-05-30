import Image from "next/image";
import React from "react";

const CardTwo = ({ item }) => {
  const { title, price, image } = item;

  return (
    <>
      <div className="bg-white border w-full  h-1/2 flex justify-between cursor-pointer py-4">
        <div className="pl-6">
          <h3 className="text-[#C82020] font-lg leading-[30px] text-[25px]">
            Special <br />
            <span className="text-[#000000]">Offer</span>
          </h3>
          <div className="mt-2">
            <h3 className="text-[15px] font-normal leading-3 mb-2">
              {" "}
              {title.substring(0, 20)}
            </h3>

            <h3 className="text-[19px] font-normal text-[#D22727] mb-2">
              RS {price}
            </h3>
            <h3 className="text-[12px] leading-[13px] font-normal text-[#000000] line-through mb-3">
              RS 66,000
            </h3>

            <h3 className="text-[16px] font-normal text-[#0AAEB9] mb-3">
              Already Sold: 6
            </h3>
            <h3 className="text-[15px] leading-[13px] font-normal text-[#0AAEB9] ">
              Available: 30
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            // src="/images/pingSave.png"
            src="/images/pingSave.png"
            width={90}
            height={50}
            alt="pingSave"
            className="object-contain w-[90px] h-[50px]"
          />
          <Image
            // src="/images/earburds.png"
            src={image}
            width={152}
            height={100}
            alt="burd"
            className="object-contain w-[160px] h-[100px]"
          />
        </div>
      </div>
    </>
  );
};

export default CardTwo;
