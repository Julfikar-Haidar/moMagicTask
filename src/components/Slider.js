import React from "react";

const Slider = () => {
  return (
    <>
      <div className="h-[344px] w-full m-auto  relative group">
        <div
          //   style={{ backgroundImage: `url('/images/slider1.png')` }}
          className="w-full h-full  bg-center bg-cover duration-500 bg-[url('/images/slider1.png')]"
        >
          <div className="flex flex-col ml-[70px] pt-[40px] gap-2">
            <h2 className="text-[57px] font-normal leading-[53px] ">
              Shop Computer <br />{" "}
              <span className="text-[#0AAEB9]">& experience</span>
            </h2>
            <p className="uppercase font-normal text-[13px] leading-[16px]">
              You cannot inspect quality into the product; it is already <br />
              there.
            </p>
            <p className="uppercase font-normal text-[13px] leading-[16px]">
              {" "}
              I am not a product of my circumstances. I am a product of <br />{" "}
              my decisions.
            </p>
            <a
              href="#"
              className="bg-[#14B1F0] px-5 py-3 w-[152px] text-white text-center text-[15px] font-normal  rounded-md cursor-pointer hover:text-gray-400"
            >
              {" "}
              View More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
