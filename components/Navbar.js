import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart ,AiOutlineCloseCircle } from "react-icons/ai";
import { useRef } from "react";

function Navbar() {

  const togglecart = ()=> {
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }
  const ref = useRef()

  return (
    <>
    <header className="text-gray-600 body-font border-b-2 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl font-bold text-blue-800">
            Hunting_Coder
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center list-none space-x-8 md:space-x-3 lg:space-x-8">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/Ourservices"}>
            <li>Our Services</li>
          </Link>
          <Link href={"/about"}>
            <li>About Us</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact Us</li>
          </Link>
        </nav>
        <div className="inline-flex items-center mt-4 md:mt-0 space-x-8 md:space-x-5 lg:space-x-8">
          <button className=" bg-blue-700 text-white rounded-xl font-semibold border-0 py-2 px-7 focus:outline-none hover:bg-blue-800 text-base">
            <Link href={"/login"}>Log in</Link>
          </button>
          <AiOutlineShoppingCart onClick={togglecart} className="text-xl cursor-pointer" />
        </div>



        <div ref={ref}  className="cart rounded-lg absolute top-0 right-0 bg-blue-100 px-7 w-80 h-96 transform transition-transform translate-x-full">
          
          <div className="pt-3">
            <h1 className="font-bold text-xl text-center text-blue-800 tracking-wider">Shopping Cart</h1>
            <span onClick={togglecart} className="absolute top-7 right-5 text-xl"><AiOutlineCloseCircle className="cursor-pointer text-blue-600"/></span>
            <h1 className="font-bold text-base text-center text-blue-800 tracking-wide">Hunting_Store</h1>
          <div>
            <ol className="pt-7 list-decimal font-medium text-red-800 space-y-2">

              <li className="text-lg">
                <div className="flex justify-between">
                  <div className="w-1/2">T-shirts</div>
                  <div className="w-1/3 bg-slate-100 text-blue-800 font-bold text-center">1</div>
                </div>
              </li>
              <li className="text-lg">
                <div className="flex justify-between">
                  <div className="w-1/2">Hoodies</div>
                  <div className="w-1/3 bg-slate-100 text-blue-800 font-bold text-center">1</div>
                </div>
              </li>
              <li className="text-lg">
                <div className="flex justify-between">
                  <div className="w-1/2">Mugs</div>
                  <div className="w-1/3 bg-slate-100 text-blue-800 font-bold text-center">1</div>
                </div>
              </li>
               

            </ol>
          </div>
          </div>
          
        </div>
      </div>
    </header>
    <section class="text-gray-600 body-font">
    <div class="container px-5  mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap">
        <Link href={'/tshirt'} class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
          T_shirts
        </Link>
        <Link href={'/hoodies'} class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
          Hoodies
        </Link>
        <Link href={'/mugs'} class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
          Mugs
        </Link>
        
      </div>
    </div>
  </section>
  </>
  );
}

export default Navbar;
