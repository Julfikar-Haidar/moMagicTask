import Image from "next/image";
import React from "react";

const CardFour = ({ item }) => {
  const { title, price, image } = item;

  return (
    <>
      <div className="bg-white w-full h-1/2 cursor-pointer">
        <div className="bg-[#FFFFFF] w-full p-4 flex  justify-between  border">
          <div className="w-1/2 ">
            <div>
              <h3 className="font-normal leading-4 text-[15px] text-[#000000]">
                {title.substring(0, 20)}
              </h3>
              <h3 className="text-[17px] font-normal text-[#14B1F0] ">
                RS {price}
              </h3>
              <span className="text-[13px] leading-[15px] font-normal text-[#000000] line-through">
                RS 66,000
              </span>
              <Image
                src="/images/orangeSave.png"
                width={160}
                height={91}
                alt="greenSave"
                className="object-contain mt-4"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#034E53] text-[25px] font-lg leading-[40px] ml-2">
              Special <br /> <span className="ml-6 text-[#00000]">Offer</span>
            </h2>
            <Image
              //   src="/images/women.png"
              src={image}
              width={150}
              height={117}
              alt="greenSave"
              className="object-contain mt-3 flex justify-self-center self-center w-[150px] h-[117px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFour;
