import Link from "next/link";
import { React, Fragment, useState, useRef } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { AiOutlineShoppingCart,AiOutlineShopping, AiOutlineCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar({logout , user, cart, subTotal }) {
  const [open, setOpen] = useState(false);


  return (
    <>
      <header className="text-gray-600 body-font border-b-2 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-blue-800">Hunting_Store</span>
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


            {/* Logined User */}
            <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex mt-2">
                  {user.value && <BiUserCircle className='text-2xl cursor-pointer' aria-hidden="true"/>}
                  </Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute md:right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm' )}>Account settings</a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (<Link href={'/order'} className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>Orders</Link>)}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (<a href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>License</a>)}
                    </Menu.Item>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <button onClick={logout}  className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm')}>Log Out</button>
                        )}
                      </Menu.Item>
                    </div>
                  </div>
                </Menu.Items>
                </Transition>
            </Menu>


            {!user.value && <button className=" bg-blue-700 text-white rounded-xl font-semibold border-0 py-2 px-7 focus:outline-none hover:bg-blue-800 text-base">
                  <Link href={"/login"}>Log In</Link>
                </button>}



            <AiOutlineShoppingCart onClick={() => setOpen(true)} className="text-xl cursor-pointer"/>
          </div>

          {/* template Cart */}
          <div>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                              <div className="flex items-start justify-between">
                                <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                  <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setOpen(false)}>
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                  </button>
                                </div>
                              </div>

                              <div className="mt-8">
                                <div className="flow-root">
                                  <ul role="list" className="-my-6 divide-y divide-gray-200">

                                  {Object.keys(cart).length == 0 && <div className='text-center text-lg'>Your Cart is Empty</div> }
                                  {Object.keys(cart).map((item)=>{
                                      return <li key={item} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img src={cart[item].img} alt="cart-image" className="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3 className="w-10/12">
                                                <Link href={`/product/${cart[item].slug}`}>{cart[item].name}</Link>
                                              </h3>
                                              <p className="ml-4">${cart[item].price}</p>
                                            </div>

                                            <p className="mt-1 text-sm text-gray-500">{cart[item].color}</p>
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty: {cart[item].qty}</p>
                                            {/* <div className="flex" ><AiFillMinusCircle onClick={()=>{removeFromCart(item,cart[item].name,1,cart[item].price,cart[item].size,cart[item].variant)}} className='my-auto text-lg cursor-pointer'/> <span className='mx-2 text-lg'>{cart[item].qty}</span> <AiFillPlusCircle onClick={()=>{addToCart(item,cart[item].name,1,cart[item].price,cart[item].size,cart[item].variant)}} className='my-auto text-lg cursor-pointer'/> </div> */}

                                            <div className="flex">
                                              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    })}




                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${subTotal}</p>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">
                                Shipping and taxes calculated at checkout.
                              </p>
                              <div className="mt-6">
                                <a href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                              </div>
                              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>or
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setOpen(false)}>Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>





        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap">
            <Link href={"/tshirt"} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">T_shirts</Link>
            <Link href={"/hoodies"} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">Hoodies</Link>
            <Link href={"/mugs"} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">Mugs</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
