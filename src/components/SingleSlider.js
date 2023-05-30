import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/Ai";

const slides = [
  {
    url: "/images/slider1.png",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },

  // {
  //   url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  // },
  // {
  //   url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  // },
];

const SingleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="h-[344px] w-full m-auto  relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        ></div>
        <div className="flex flex-col md:ml-[70px] ml-[20px] pt-[40px] gap-2 absolute left-0 bottom-[20%]">
          <h2 className="lg:text-[57px] text-[30px] leading-[30px] font-normal lg:leading-[53px] ">
            Shop Computer <br />{" "}
            <span className="text-[#0AAEB9]">& experience</span>
          </h2>
          <p className="uppercase font-normal lg:text-[13px] lg:leading-[16px] text-[10px] leading-[10px] text-justify">
            You cannot inspect quality into the product it is already <br />
            there.
          </p>
          <p className="uppercase font-normal lg:text-[13px] lg:leading-[16px] text-[10px] leading-[10px] text-justify	">
            {" "}
            I am not a product of my circumstances. I am a product of <br />
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
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex justify-center py-2 absolute bottom-0 m-auto left-0 right-0">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-[40px] ${
                currentIndex == slideIndex
                  ? "text-[#034E53]"
                  : " text-[#AA9393]"
              }  cursor-pointer rounder-full`}
            >
              <AiOutlineMinus />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleSlider;
