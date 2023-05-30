import React from "react";

const SliderCard = ({ category }) => {
  return (
    <div className="relative  lg:w-[290px] w-[190px]  pl-2">
      <img
        // src={slide?.url}
        src="/images/slider2.png"
        alt="Image 1"
        className="w-full "
      />
      <div className="w-5/6 px-2 flex gap-5 py-2 bg-[#FDF8F8] border text-[19px] absolute left-0 bottom-[5%] shadow-lg ">
        <h2 className="text-[#000000] cursor-pointer">{category}</h2>
        <h2 className="text-[#14B1F0] cursor-pointer ">Shop</h2>
      </div>
    </div>
  );
};

export default SliderCard;
