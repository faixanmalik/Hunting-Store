import React from 'react'
import Order from '../models/Order';
import mongoose from 'mongoose'


function MyOrder ({ subTotal , order }) {
  

  const product = order.products;

  

  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Hunting_Store</h2>

      
        <h1 className="text-gray-900 text-3xl title-font font-medium">Order Id: #{order.orderId}</h1>
        <p className="leading-relaxed mb-4">Your Order has been placed!</p>
        <div className="flex mb-4">
          <a className="flex-grow text-center text-indigo-500 border-b-2 border-gray-300 py-2 text-lg font-medium px-1">Products</a>
          <a className="flex-grow text-center text-indigo-500 border-b-2 border-gray-300 py-2 text-lg font-medium px-1">Quantity</a>
          <a className="flex-grow text-center text-indigo-500 border-b-2 border-gray-300 py-2 text-lg font-medium px-1">Item Total</a>
        </div>


        <div className='mb-10'>

        {Object.keys(product).map((item)=>{
          return <div key={item} className="flex w-full border-b-2 border-gray-200 py-2">
            <div className="w-1/3 text-center font-medium text-gray-500">{product[item].name} ( {product[item].size}/{product[item].variant} )</div>  
            <div className="w-1/3 text-center font-medium text-gray-900">{product[item].qty}</div>
            <div className="w-1/3 text-center font-medium text-gray-900">${product[item].price}</div>
          </div>})} 
          
        </div>
        
       
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${subTotal}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>



      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
    </section>
  )
      }



      export async function getServerSideProps(context) {
        if (!mongoose.connections[0].readyState){
          await mongoose.connect(process.env.MONGO_URI)
        }
        let order = await Order.findById(context.query.id)
      
        // Pass data to the page via props
        return {
           props: { order: JSON.parse(JSON.stringify(order)) } 
          }
      }
  

export default MyOrder