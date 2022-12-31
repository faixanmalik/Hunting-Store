import React, { useState } from 'react'

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function Checkout({cart , subTotal, removeFromCart, addToCart }) {

  const [email, setEmail] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [products, setProducts] = useState(cart)


  const handleChange = (e) => {

    if ( e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if ( e.target.name === 'cardHolder') {
      setCardHolder(e.target.value)
    }
    else if ( e.target.name === 'cardNumber') {
      setCardNumber(e.target.value)
    }
    else if ( e.target.name === 'cardExpiry') {
      setCardExpiry(e.target.value)
    }
    else if ( e.target.name === 'cardCvc') {
      setCardCvc(e.target.value)
    }
    else if ( e.target.name === 'streetAddress') {
      setStreetAddress(e.target.value)
    }
    else if (e.target.name === 'state') {
      setState(e.target.value)
    }
    else if (e.target.name === 'zip') {
      setZip(e.target.value)
    }
  }





  const submit = async (e) => {
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system
    const data = { firstName, lastName, email, country , products , streetAddress, city, state, zip };
    console.log(data);
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
        setEmail('')
        setCardHolder('')
        setCardNumber('')
        setCardExpiry('')
        setCardCvc('')
        setState('')
        setStreetAddress('')
        setZip('')

        if (response.success === true) {
            toast.success(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

        else {
            toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

  }






  return (
    <div>

    {/* React tostify */}
    <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>

    <div className="flex flex-col items-center border-b bg-white py-4 md:my-96  sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <a href="#" className="text-2xl font-bold text-gray-800">sneekpeeks</a>
    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLineCap="round" strokeLineJoin="round" d="M5 13l4 4L19 7" /></svg>
            </a>
            <span className="font-semibold text-gray-900">Shop</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLineCap="round" strokeLineJoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
            <span className="font-semibold text-gray-900">Shipping</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLineCap="round" strokeLineJoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
            <span className="font-semibold text-gray-500">Payment</span>
          </li>
        </ul>
      </div>
    </div>
    </div>

    
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div className="px-4 pt-8">
      <p className="text-xl font-medium">Order Summary</p>
      <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">


        {Object.keys(cart).length == 0 && <div>Your Cart is Empty</div> }
        {Object.keys(cart).map((item)=>{ return <div key={item} className="flex flex-col rounded-lg bg-white sm:flex-row">
          <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={cart[item].img} alt="" />
          <div className="flex w-full flex-col px-4 py-4">
            <span className="font-semibold">{cart[item].name}</span>
            <span className="float-right text-gray-400">({cart[item].size}/{cart[item].variant})</span>
            <p className="text-lg font-bold">${cart[item].price}</p>
          </div>
        </div>
        })} 

      </div>

      <p className="mt-8 text-lg font-medium">Shipping Methods</p>
      <form className="mt-5 grid gap-6">
        <div className="relative">
          <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
          <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
            <img className="w-14 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN420PXvQjOtSkJalqXFZ-FXrjBZH3eRvCsS1H80K&s\" alt="" />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Fedex Delivery</span>
              <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
        <div className="relative">
          <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
          <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
            <img className="w-14 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN420PXvQjOtSkJalqXFZ-FXrjBZH3eRvCsS1H80K&s" alt="" />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Fedex Delivery</span>
              <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
      </form>
    </div>


    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">Complete your order by providing your payment details.</p>




      <form method='POST' onSubmit={submit} className="">
        <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div className="relative">
          <input onChange={handleChange} value={email} type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLineCap="round" strokeLineJoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
        <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div className="relative">
          <input onChange={handleChange} value={cardHolder} type="text" id="cardHolder" name="cardHolder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLineCap="round" strokeLineJoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
        </div>
        <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
        <div className="flex">
          <div className="relative w-7/12 flex-shrink-0">
            <input onChange={handleChange} value={cardNumber} type="number" id="cardNumber" name="cardNumber" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
              </svg>
            </div>
          </div>
          <input onChange={handleChange} value={cardExpiry} type="number" name="cardExpiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
          <input onChange={handleChange} value={cardCvc} type="number" name="cardCvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
        </div>
        <label for="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-7/12">
            <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          </div>
          <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="State" />
          <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
        </div>

      
        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">$399.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">$8.00</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">$408.00</p>
        </div>
        <button type='submit' className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
      </form>
    </div>
    </div>
  </div>
  
  )
}

export default Checkout