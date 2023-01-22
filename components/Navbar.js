import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Popover, Tab, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { BiUserCircle } from 'react-icons/bi';



const products = {
  categories: [
    {
      id: 'Products',
      name: 'Products',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'T-Shirts',
          name: 'T-Shirts',
          items: [
            { name: 'T-Shirts', href: '/tshirt' },
            { name: 'Dresses', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Browse All', href: '/tshirt' },
          ],
        },
        {
          id: 'Hoodies',
          name: 'Hoodies',
          items: [
            { name: 'Hoodies', href: '/hoodies' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'Browse All', href: '/hoodies' },
          ],
        },
        {
          id: 'Sneakers',
          name: 'Sneakers',
          items: [
            { name: 'Sneakers', href: '/sneakers' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Significant Other', href: '#' },
            { name: 'Browse All', href: '/sneakers' },
          ],
        },
     
      ],
    },
  ],


  pages: [
    { name: 'Our Services', href: '/ourservices' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],

  
  
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({logout , user, cart, subTotal, deleteItemFromCart }) {
  const [open, setOpen] = useState(false)
  const [OpenCart, setOpenCart] = useState(false)


  return (
    <div className="bg-white">

      
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-indigo-600">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {products.categories.map((category) => (
                        <Tab key={category.name} className={({ selected }) => classNames( selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent','flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium')}>
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {products.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name} show={open}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul role="list" aria-labelledby={`${category.id}-${section.id}-heading-mobile`} className="mt-6 flex flex-col space-y-6">
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {products.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <Link href={'/login'} className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href={'/signup'} className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </Link>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>





      <header className="relative bg-white">

        {/* Laptop View */}
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button type="button" className="rounded-md bg-white p-2 text-gray-400 lg:hidden" onClick={() => setOpen(true)}>
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href={'/'}>
                  <span className="sr-only">Hunting_Store</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {products.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex ">
                            <Popover.Button className={classNames(open ? 'border-indigo-600 text-indigo-600 outline-none' : ' text-gray-700 hover:text-gray-800 outline-none','relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out')}>
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Popover.Panel className="absolute z-10 inset-x-0 top-full text-sm text-gray-500">

                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center"/>
                                          </div>
                                          <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </Link>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul role="list" aria-labelledby={`${section.name}-heading`} className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className=" hover:text-gray-800">
                                                  {item.name}
                                                </a>
                              
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {products.pages.map((page) => (
                    <Link key={page.name} href={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{page.name}</Link>
                  ))}

                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">


                {!user.value && <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link href={'/login'} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link href={'/signup'} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </Link>
                </div>}
                        
                <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex mt-2">
                  {user.value && <BiUserCircle className='text-xl md:text-2xl cursor-pointer hover:text-gray-700' aria-hidden="true"/>}
                  </Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => ( <Link href={'/admin'} className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm' )}>Admin Account</Link>)}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => ( <Link href={'/myaccount'} className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm' )}>Account settings</Link>)}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (<Link href={'/orders'} className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>My Orders</Link>)}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (<Link href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>License</Link>)}
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



              
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <ShoppingBagIcon onClick={() => setOpenCart(true)} className="h-5 md:h-6 cursor-pointer items-center flex-shrink-0 text-black group-hover:text-gray-700" aria-hidden="true"/>
                </div>


                <div>
                  <Transition.Root show={OpenCart} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpenCart}>
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
                                      <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setOpenCart(false)}>
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
                                    <Link href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</Link>
                                  </div>
                                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>or
                                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setOpenCart(false)}>Continue Shopping
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
          </div>
        </nav>

      </header>
    </div>
  )
}
