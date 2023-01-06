import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function MyOrder () {

  const [orders, setOrders] = useState([])
  const router = useRouter

  useEffect(() => {

     // fetch the data from form to makes a file in local system
    const fetchOrder = async ()=>{
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
        })
        let response = await res.json()
        setOrders(response.orders)
      }

    if(!localStorage.getItem('token')){
      router.push('/')  
    }
    else{
      fetchOrder();
    }
      
  }, [])
  
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">My Orders:</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Order Id:</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>
          </tr>
        </thead>




        <tbody>


          {orders.map((item)=>{
            return <tr key={item._id}>
            <td className="px-4 py-3">#{item.orderId}</td>
            <td className="px-4 py-3">{item.cardHolder}</td>
            <td className="px-4 py-3">$ {item.amount}</td>
            <td className="px-4 py-3">
              <Link href={`/order?id=${item._id}`} className='text-blue-600 underline cursor-pointer' >Details</Link>
            </td>
          </tr>
          })}

         
        </tbody>
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>
</section>
  )
      }

export default MyOrder