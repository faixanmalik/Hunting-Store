import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
import mongoose from "mongoose";

function Mugs({ product }) {
  

  return (
    <div className="bg-white">
      <div className="container min-h-screen mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>



        {Object.keys(product).length === 0 && <div className="font-semibold text-center">Sorry! Currently Stock Unavailble right now. Please wait for the new Stock.!</div>}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {Object.keys(product).map((item)=>{
            return <Link key={product[item]._id} href={`/product/${product[item].slug}`} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={product[item].img}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
              <h3 className="mt-4 text-sm text-gray-700">{product[item].title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product[item].price}</p>
          </Link>
          })}
        </div>
      </div>
    </div>
      )
    }



    export async function getServerSideProps() {
      if (!mongoose.connections[0].readyState){
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI)
      }
      let products = await Product.find({category: 'mugs'})
    
      let mugs= {}
        for (let item of products){
            if (item.title in tshirts) {
                if (!mugs[item.title].color.includes(item.color) && item.avilableQty > 0) {
                    mugs[item.title].color.push(item.color)
                }
                if (!mugs[item.title].size.includes(item.size) && item.avilableQty > 0) {
                    mugs[item.title].size.push(item.size)
                }
            }
            else {
                // mugs[item.title] is key and its value is whole object(item)
                mugs[item.title] = JSON.parse(JSON.stringify(item))
                if(item.avilableQty > 0) {
                    mugs[item.title].color = [item.color]
                    mugs[item.title].size = [item.size]
                }
                else {
                    mugs[item.title].color = []
                    mugs[item.title].size = []
                }
    
            }
        };
    
       
      // Pass data to the page via props
      return {
         props: { product: JSON.parse(JSON.stringify(mugs)) } 
        }
    }

export default Mugs