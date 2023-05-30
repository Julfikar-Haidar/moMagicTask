import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border  bg-[#393939]">
        <div
          className="w-full flex  flex-wrap justify-between  md:pl-[100px] pl-[30px] pt-16 pb-2
  "
        >
          <div className="lg:w-1/4 w-1/2 ">
            <a className="flex">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="mb-2"
              />
            </a>
            <ul className="mb-2 space-y-2 text-sm list-none">
              <li className="mb-4">
                <a className="text-[#00CAD7] md:text-[18px] text-[14px] leading-[17px] font-normal  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Got questions? Call us 24/7!
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer  hover:text-sky-300 duration-100 transition">
                  03 111 666 144 <br /> 0317 1777015.
                </a>
              </li>
              <li>
                <a className="text-[#00CAD7] md:text-[18px] text-[15px] leading-[17px] font-normal ">
                  Contact info <br />
                  <span className="text-white text-[12px]  hover:text-sky-300 duration-100 transition">
                    info@winstore.pk
                  </span>
                </a>
              </li>
            </ul>

            <div className="flex justify-start md:mb-0 mb-3">
              <a>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="md:w-6 md:h-6 w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="md:w-6 md:h-6 w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="md:w-6 md:h-6 w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="md:w-6 md:h-6 w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 w-1/2 ">
            <h2 className="mb-2 font-normal tracking-widest text-[#00CAD7] md:text-[20px] text-[16px] leading-[25px]">
              Trending
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-white cursor-pointer  hover:text-sky-300 duration-100 transition">
                  Installments
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Electronics
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Grocery
                </a>{" "}
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Health & Beauty
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Home Appliances
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Mobile Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 w-1/2 ">
            <h2 className="mb-2 font-normal tracking-widest text-[#00CAD7] md:text-[20px] text-[16px] leading-[25px]">
              Information
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  FAQs
                </a>{" "}
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Shipping & Return
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/4 w-1/2">
            <h2 className="mb-2 font-normal tracking-widest text-[#00CAD7] md:text-[20px] text-[16px] leading-[25px]">
              Customer Care
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  My Account
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Track Your Order
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Wishlist
                </a>{" "}
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Recently Viewed
                </a>{" "}
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Compare
                </a>
              </li>
              <li>
                <a className="text-white  hover:text-sky-300 duration-100 transition cursor-pointer">
                  Become a Vendor
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex lg:justify-end justify-start px-[120px]  pb-10">
          <Image
            src="/images/paymentCard.png"
            width={425}
            height={91}
            alt="paymentCard"
            className="object-contain"
          />
        </div>
        <div className="flex  md:justify-start justify-center md:pl-[100px]  py-3 bg-[#000000]">
          <p className="text-base text-gray-400">
            All rights reserved by @ company 2021
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
