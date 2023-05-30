import React from "react";

const CardOne = ({ item }) => {
  const { title, price, image } = item;
  console.log();
  return (
    <>
      <div className="bg-[#FFFFFF] w-full p-4 flex h-1/2  justify-between cursor-pointer border">
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
            <img
              src="/images/greenSave.png"
              width={137}
              height={91}
              alt="greenSave"
              className="object-contain mt-4"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <h2 className="text-[#00CAD7] text-[25px] font-lg leading-[30px] ml-[34px]">
            Special <br /> <span className="text-[#000000]">Offer</span>
          </h2>
          <img
            // src="/images/laptop.png"
            src={image}
            width={190}
            height={81}
            alt="greenSave"
            className="object-contain mt-3 flex justify-self-center self-center w-[190px] h-[81px]"
          />
        </div>
      </div>
    </>
  );
};

export default CardOne;
