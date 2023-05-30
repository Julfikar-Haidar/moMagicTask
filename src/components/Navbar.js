import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="w-full">
        <nav className="w-full bg-[#03484D] flex justify-between items-center px-7">
          <div className="flex gap-[41px] items-center">
            <div>
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  // width={100}
                  // height={100}
                  className="w-[80px] h-[80px] object-contain cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden lg:block ">
              <form>
                <div className="flex">
                  <select
                    id="countries"
                    className="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>All categories</option>
                    <option value="US">TV & Videos</option>
                    <option value="CA">Cell Phones</option>
                    <option value="FR">Kitchen Appliances</option>
                    <option value="DE">Grocery</option>
                  </select>

                  <div className="relative w-full">
                    <input
                      type="search"
                      className="block p-2.5 w-[370px] z-20 text-sm text-gray-900 bg-[#FFFFFF] rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Search Product..."
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#B6B6B6] rounded-r-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-white leading-0 hidden lg:block">
              <small className="text-[9px]">Call Us Now</small>
              <div className="flex gap-1 text-[10px]">
                <svg
                  width={19}
                  height={12}
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.72727 9.1218V7.88064C1.72727 3.5947 5.21412 0.10791 9.5 0.10791C13.7859 0.10791 17.2727 3.5947 17.2727 7.88064V9.1218C18.3208 9.91041 19 11.1644 19 12.574C19 14.955 17.0629 16.8922 14.6818 16.8922C14.2049 16.8922 13.8182 16.5055 13.8182 16.0285V9.11944C13.8182 8.64248 14.2049 8.2558 14.6818 8.2558C14.9775 8.2558 15.2663 8.2858 15.5455 8.34274V7.88069C15.5455 4.54723 12.8335 1.83524 9.5 1.83524C6.16654 1.83524 3.45455 4.54723 3.45455 7.88069V8.34274C3.73367 8.2858 4.02247 8.2558 4.31818 8.2558C4.79514 8.2558 5.18182 8.64248 5.18182 9.11944V16.0285C5.18182 16.5055 4.79514 16.8922 4.31818 16.8922C1.93714 16.8922 0 14.955 0 12.574C0 11.1643 0.679163 9.91041 1.72727 9.1218Z"
                    fill="white"
                  />
                </svg>
                +011 5827918
              </div>
              <a
                href=""
                className="text-[10px] cursor-pointer  hover:text-sky-300 duration-100 transition"
              >
                Sign In
              </a>
            </div>
            <div className="">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="">
              <svg
                className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex relative">
              <svg
                className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22.0547C9.55228 22.0547 10 21.607 10 21.0547C10 20.5024 9.55228 20.0547 9 20.0547C8.44772 20.0547 8 20.5024 8 21.0547C8 21.607 8.44772 22.0547 9 22.0547Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22.0547C20.5523 22.0547 21 21.607 21 21.0547C21 20.5024 20.5523 20.0547 20 20.0547C19.4477 20.0547 19 20.5024 19 21.0547C19 21.607 19.4477 22.0547 20 22.0547Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1.05469H5L7.68 14.4447C7.77144 14.9051 8.02191 15.3187 8.38755 15.613C8.75318 15.9073 9.2107 16.0637 9.68 16.0547L14.54 12.0547L19.4 16.0547C19.8693 16.0637 20.3268 15.9073 20.6925 15.613C21.0581 15.3187 21.3086 14.9051 21.4 14.4447L23 6.05469"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="absolute text-[10px] lg:top-[-7px] lg:left-[10px] top-[-7px] left-[7px] right-0 text-white">
                3
              </div>

              <span className="text-white ml-1 lg:text-[12px] text-[9px]">
                Cart
              </span>
            </div>
            <div className="lg:hidden">
              {!open && (
                <button type="submit" onClick={handleOpen}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              )}
              {open && (
                <button type="submit" onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </nav>
        {/* section subheader */}

        <div
          className={`bg-[#0E3B3E] w-full lg:flex lg:justify-between lg:items-center px-7 py-4 ${
            open ? "" : "hidden"
          } `}
        >
          <div className="lg:flex  gap-6 text-white lg:items-center lg:mb-0 mb-4">
            <div className="mt-3 mb-3 lg:hidden md:w-1/2">
              <form>
                <div className="flex">
                  <select
                    id="countries"
                    className="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>All categories</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>

                  <div className="relative w-full">
                    <input
                      type="search"
                      className="block p-2.5  z-20 text-sm text-gray-900 bg-[#FFFFFF] rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Search Product..."
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#B6B6B6] rounded-r-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <a herf="" className="font-normal text-[17px] leading[21px]">
                Brouse By Category
              </a>
            </div>

            <ul className="lg:flex lg:justify-start gap-3 ">
              <li>
                {" "}
                <a
                  herf="#"
                  className="font-normal cursor-pointer text-[13px] leading-[16px] hover:text-sky-300 duration-100 transition"
                >
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a
                  herf="#"
                  className="font-normal cursor-pointer text-[13px] leading-[16px]  hover:text-sky-300 duration-100 transition"
                >
                  Easy Monthly Installments
                </a>
              </li>
              <li>
                {" "}
                <a
                  herf="#"
                  className="font-normal cursor-pointer text-[13px] leading-[16px]  hover:text-sky-300 duration-100 transition"
                >
                  Shop by Brands
                </a>
              </li>
              <li>
                {" "}
                <a
                  herf="#"
                  className="font-normal cursor-pointer text-[13px] leading-[16px]  hover:text-sky-300 duration-100 transition"
                >
                  Become a Vendor
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <div className="cursor-pointer">
              <svg
                className="lg:w-5 lg:h-5 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                viewBox="0 0 11 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99175 4.15292H11V0.654917C10.6535 0.60725 9.46196 0.5 8.07424 0.5C5.17874 0.5 3.19523 2.32142 3.19523 5.66908V8.75H0V12.6605H3.19523V22.5H7.11274V12.6614H10.1787L10.6654 8.75092H7.11182V6.05683C7.11274 4.92658 7.41705 4.15292 8.99175 4.15292Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="lg:w-5 lg:h-5 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2.63092C21.1819 2.99231 20.3101 3.23185 19.4012 3.34815C20.3362 2.786 21.0499 1.90262 21.3854 0.837846C20.5136 1.36123 19.5511 1.73092 18.5254 1.93723C17.6976 1.04969 16.5179 0.5 15.2309 0.5C12.7339 0.5 10.7236 2.54092 10.7236 5.04292C10.7236 5.40292 10.7539 5.74908 10.8281 6.07862C7.0785 5.89446 3.76063 4.08477 1.53175 1.328C1.14262 2.00785 0.914375 2.786 0.914375 3.62369C0.914375 5.19662 1.71875 6.59092 2.91775 7.39815C2.19312 7.38431 1.48225 7.17246 0.88 6.83877C0.88 6.85262 0.88 6.87062 0.88 6.88862C0.88 9.09569 2.44337 10.9289 4.4935 11.3512C4.12637 11.4523 3.72625 11.5008 3.311 11.5008C3.02225 11.5008 2.73075 11.4842 2.45712 11.4232C3.0415 13.2218 4.69975 14.5442 6.6715 14.5871C5.137 15.7958 3.18863 16.5242 1.07938 16.5242C0.7095 16.5242 0.35475 16.5075 0 16.4618C1.99787 17.7592 4.36563 18.5 6.919 18.5C15.2185 18.5 19.756 11.5769 19.756 5.576C19.756 5.37523 19.7491 5.18139 19.7395 4.98892C20.6346 4.34923 21.3867 3.55031 22 2.63092Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="lg:w-5 lg:h-5 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.901 22.4532V22.4523H21.9065V14.4181C21.9065 10.4877 21.0604 7.46008 16.4655 7.46008C14.2566 7.46008 12.7743 8.67224 12.1691 9.82141H12.1052V7.82702H7.74857V22.4523H12.285V15.2104C12.285 13.3036 12.6465 11.4598 15.0078 11.4598C17.3344 11.4598 17.3691 13.6359 17.3691 15.3327V22.4532H21.901Z"
                  fill="white"
                />
                <path
                  d="M0.361511 7.82788H4.90344V22.4532H0.361511V7.82788Z"
                  fill="white"
                />
                <path
                  d="M2.6306 0.546753C1.17838 0.546753 0 1.72514 0 3.17735C0 4.62956 1.17838 5.83259 2.6306 5.83259C4.08281 5.83259 5.26119 4.62956 5.26119 3.17735C5.26028 1.72514 4.0819 0.546753 2.6306 0.546753V0.546753Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="lg:w-5 lg:h-5 w-4 h-4 cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7103 6.99621C22.6591 5.83451 22.4713 5.03585 22.2021 4.3438C21.9245 3.60921 21.4974 2.95153 20.9378 2.4048C20.3911 1.84956 19.7291 1.41811 19.003 1.14483C18.307 0.875721 17.5125 0.687861 16.3508 0.636641C15.1804 0.581084 14.8088 0.568237 11.8404 0.568237C8.87205 0.568237 8.5005 0.581084 7.33446 0.632303C6.17276 0.683523 5.37411 0.87155 4.68222 1.14049C3.94747 1.41811 3.28979 1.84522 2.74306 2.4048C2.18782 2.95153 1.75654 3.61355 1.48309 4.33963C1.21398 5.03585 1.02612 5.83017 0.974898 6.99187C0.919341 8.16224 0.906494 8.53379 0.906494 11.5022C0.906494 14.4706 0.919341 14.8421 0.97056 16.0082C1.02178 17.1699 1.20981 17.9685 1.47892 18.6606C1.75654 19.3952 2.18782 20.0528 2.74306 20.5996C3.28979 21.1548 3.9518 21.5863 4.67789 21.8595C5.37411 22.1287 6.16843 22.3165 7.33029 22.3677C8.49616 22.4191 8.86788 22.4318 11.8363 22.4318C14.8047 22.4318 15.1762 22.4191 16.3423 22.3677C17.504 22.3165 18.3026 22.1287 18.9945 21.8595C20.4638 21.2915 21.6255 20.1298 22.1936 18.6606C22.4626 17.9644 22.6506 17.1699 22.7018 16.0082C22.753 14.8421 22.7659 14.4706 22.7659 11.5022C22.7659 8.53379 22.7616 8.16224 22.7103 6.99621ZM20.7415 15.9228C20.6944 16.9905 20.5151 17.5671 20.3656 17.9515C19.9982 18.904 19.2423 19.6599 18.2898 20.0273C17.9054 20.1768 17.3246 20.3562 16.261 20.403C15.1078 20.4544 14.762 20.4671 11.8448 20.4671C8.92761 20.4671 8.57741 20.4544 7.42839 20.403C6.36062 20.3562 5.78403 20.1768 5.39963 20.0273C4.92564 19.8521 4.4942 19.5745 4.144 19.2115C3.78096 18.8569 3.50334 18.4298 3.32816 17.9559C3.17867 17.5715 2.99932 16.9905 2.95244 15.9271C2.90105 14.7739 2.88837 14.4279 2.88837 11.5107C2.88837 8.59352 2.90105 8.24333 2.95244 7.09447C2.99932 6.0267 3.17867 5.45011 3.32816 5.06571C3.50334 4.59156 3.78096 4.16028 4.14834 3.80992C4.50271 3.44688 4.92981 3.16926 5.40397 2.99424C5.78837 2.84475 6.3693 2.6654 7.43273 2.61835C8.58592 2.56713 8.93194 2.55429 11.849 2.55429C14.7705 2.55429 15.1163 2.56713 16.2653 2.61835C17.3331 2.6654 17.9097 2.84475 18.2941 2.99424C18.7681 3.16926 19.1995 3.44688 19.5497 3.80992C19.9128 4.16445 20.1904 4.59156 20.3656 5.06571C20.5151 5.45011 20.6944 6.03088 20.7415 7.09447C20.7927 8.24766 20.8055 8.59352 20.8055 11.5107C20.8055 14.4279 20.7927 14.7696 20.7415 15.9228Z"
                  fill="white"
                />
                <path
                  d="M11.8405 5.88574C8.73982 5.88574 6.22406 8.40134 6.22406 11.5022C6.22406 14.6031 8.73982 17.1187 11.8405 17.1187C14.9414 17.1187 17.457 14.6031 17.457 11.5022C17.457 8.40134 14.9414 5.88574 11.8405 5.88574ZM11.8405 15.1455C9.82895 15.1455 8.19726 13.5139 8.19726 11.5022C8.19726 9.49046 9.82895 7.85895 11.8405 7.85895C13.8523 7.85895 15.4838 9.49046 15.4838 11.5022C15.4838 13.5139 13.8523 15.1455 11.8405 15.1455V15.1455Z"
                  fill="white"
                />
                <path
                  d="M18.9904 5.66373C18.9904 6.38781 18.4033 6.97491 17.679 6.97491C16.9549 6.97491 16.3678 6.38781 16.3678 5.66373C16.3678 4.93948 16.9549 4.35254 17.679 4.35254C18.4033 4.35254 18.9904 4.93948 18.9904 5.66373Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="text-white leading-0 mt-4 lg:hidden">
            <small className="text-[9px] ">Call Us Now</small>
            <div className="flex gap-1 text-[10px] mt-2">
              <svg
                width={19}
                height={12}
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.72727 9.1218V7.88064C1.72727 3.5947 5.21412 0.10791 9.5 0.10791C13.7859 0.10791 17.2727 3.5947 17.2727 7.88064V9.1218C18.3208 9.91041 19 11.1644 19 12.574C19 14.955 17.0629 16.8922 14.6818 16.8922C14.2049 16.8922 13.8182 16.5055 13.8182 16.0285V9.11944C13.8182 8.64248 14.2049 8.2558 14.6818 8.2558C14.9775 8.2558 15.2663 8.2858 15.5455 8.34274V7.88069C15.5455 4.54723 12.8335 1.83524 9.5 1.83524C6.16654 1.83524 3.45455 4.54723 3.45455 7.88069V8.34274C3.73367 8.2858 4.02247 8.2558 4.31818 8.2558C4.79514 8.2558 5.18182 8.64248 5.18182 9.11944V16.0285C5.18182 16.5055 4.79514 16.8922 4.31818 16.8922C1.93714 16.8922 0 14.955 0 12.574C0 11.1643 0.679163 9.91041 1.72727 9.1218Z"
                  fill="white"
                />
              </svg>
              +011 5827918
            </div>
            <a
              href=""
              className="text-[10px] cursor-pointer  hover:text-sky-300 duration-100 transition hover:fill-current"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
