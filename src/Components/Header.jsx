import React from "react";
import {
  IoSearchOutline,
  IoLocationSharp,
  IoCartOutline,
} from "react-icons/io5";

import {
  MdKeyboardArrowDown,
  MdOutlineAccountCircle,
} from "react-icons/md";

function Header() {
    return (
        <>
            {/* ================= DESKTOP HEADER ================= */}
            <header className="hidden lg:block sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="grid grid-cols-12 items-center h-20">

                    {/* Logo */}
                    <div className="col-span-2 border-r border-gray-200 h-full flex items-center justify-center">
                        <img
                            src="/Images/Logo.png"
                            alt="Blinkit"
                            className="w-32"
                        />
                    </div>

                    {/* Delivery */}
                    <div className="col-span-2 px-5">
                        <h2 className="font-bold text-xl">
                            Delivery in 11 minutes
                        </h2>

                        <div className="flex items-center text-sm text-gray-600">
                            <IoLocationSharp className="mr-1" />
                            Jaipur, Rajasthan
                            <MdKeyboardArrowDown className="text-xl" />
                        </div>
                    </div>

                    {/* Search */}
                    <div className="col-span-5">
                        <div className="flex items-center bg-gray-100 rounded-xl px-4 h-12">
                            <IoSearchOutline className="text-2xl text-gray-500" />

                            <input
                                type="text"
                                placeholder='Search "milk"'
                                className="bg-transparent outline-none w-full ml-3"
                            />
                        </div>
                    </div>

                    {/* Account */}
                    <div className="col-span-1 flex justify-center">
                        <button className="flex flex-col items-center">
                            <MdOutlineAccountCircle className="text-3xl cursor-pointer" />
                            <span className="text-sm font-medium cursor-pointer">
                                Account
                            </span>
                        </button>
                    </div>

                    {/* Cart */}
                    <div className="col-span-2 flex justify-center">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold cursor-pointer">
                            <IoCartOutline className="text-2xl cursor-pointer" />
                            My Cart
                        </button>
                    </div>
                </div>
            </header>
            {/* ================= MOBILE HEADER ================= */}
            <header className="lg:hidden sticky top-0 z-50 bg-white shadow-sm">

                {/* Top Section */}
                <div className="flex items-start justify-between px-4 pt-3">

                    {/* Delivery */}
                    <div>
                        <h2 className="text-[18px] font-bold text-black leading-5">
                            Delivery in 12 minutes
                        </h2>

                        <div className="mt-1 flex items-center text-[12px] text-gray-700">
                            <IoLocationSharp className="mr-1 text-sm" />

                            <span className="truncate max-w-47.5">
                                Sanganer Thana Flyover, Jaipur...
                            </span>

                            <MdKeyboardArrowDown className="ml-1 text-lg" />
                        </div>
                    </div>

                    {/* Profile Icon */}
                    <button className="flex items-center justify-center">
                        <MdOutlineAccountCircle className="text-[34px] text-black" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-3">
                    <div className="flex items-center h-12 rounded-xl border border-gray-200 bg-[#F8F8F8] px-4">

                        <IoSearchOutline className="text-[22px] text-gray-500" />

                        <input
                            type="text"
                            placeholder='Search "milk"'
                            className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
                        />
                    </div>
                </div>

            </header>

        </>
    );
}

export default Header;