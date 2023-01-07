import { React, Fragment, useState } from "react";

import Link from "next/link";

import { Dialog, Transition, Menu, Popover } from "@headlessui/react";
import { XMarkIcon, Bars3Icon, BookmarkSquareIcon, CalendarIcon, ChartBarIcon, CursorArrowRaysIcon, LifebuoyIcon, PlayIcon, ShieldCheckIcon, } from "@heroicons/react/24/outline";
import { AiOutlineShoppingCart, AiOutlineShopping } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { TbShirt } from 'react-icons/tb';
import { GiClothes } from 'react-icons/gi';
import { SlCup } from 'react-icons/sl';


function Navbar({logout , user, cart, subTotal, deleteItemFromCart }) {

  const [open, setOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  const products = [
    {
      name: 'T-Shirts',
      description: 'A T-shirt is a style of fabric shirt named after the body and sleeves',
      href: '/tshirt',
      icon: TbShirt ,
    },
    {
      name: 'Hoodies',
      description: 'The hoodie is the perfect balanced combination of plushy.',
      href: '/hoodies',
      icon: GiClothes ,
    },
    { 
      name: 'Mugs', 
      description: "A mug is a type of cup typically used for drinking hot drinks, such as coffee.", 
      href: '/mugs', 
      icon: SlCup },
  ]
  const callsToAction = [
    { name: 'View All Items', 
    href: '/tshirt', 
    icon: AiOutlineShopping },
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: LifebuoyIcon,
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkSquareIcon,
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
  ]




  return (
    <>

  <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl pl-10">

        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start mr-auto lg:w-0 lg:flex-1">
            <Link href={'/'}>
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto sm:h-10 " src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center mr-10 rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className={classNames(open ? 'text-gray-900' : 'text-gray-500','group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}>
                    <span> Products</span>
                    <ChevronDownIcon className={classNames( open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}aria-hidden="true"/>
                  </Popover.Button>

                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {products.map((item) => (
                            <Link key={item.name} href={item.href} className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 justify-center sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link href={item.href} className="-m-3 flex items-center mx-auto rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>

                </>
              )}
            </Popover>

            <Link href={"/ourservices"} className="text-base font-medium text-gray-500 hover:text-gray-900">Our services</Link>
            <Link href={"/about"} className="text-base font-medium text-gray-500 hover:text-gray-900">About Us</Link>
            <Link href={"/contact"} className="text-base font-medium text-gray-500 hover:text-gray-900">Contact Us</Link>

          </Popover.Group>




      
    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-8 md:space-x-7">
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
                {({ active }) => ( <Link href={'/myaccount'} className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm' )}>Account settings</Link>)}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (<Link href={'/orders'} className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>My Orders</Link>)}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (<a href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>License</a>)}
              </Menu.Item>
              <div>
                <Menu.Item> 
                  {({ active }) => (<button onClick={logout}  className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm')}>Log Out</button>)}
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
                        {Object.keys(cart).length == 0 && <div className='text-center mt-10 text-lg'>Your Cart is Empty!</div> }
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
                                  <div className="flex">
                                    <button onClick={()=>{deleteItemFromCart(item,cart[item].name,1,cart[item].price,cart[item].size,cart[item].variant)}} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
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
  </div>


     {/* This is for mobile view */}
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </Link>

                <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>



  </Popover>


    </>
  );
}


export default Navbar;