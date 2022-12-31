import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
import mongoose from "mongoose";

function Hoodies({ product }) {
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">


        {Object.keys(product).length === 0 && <div className="font-semibold mx-auto">Sorry! Currently Stock Unavailble right now. Please wait for the new Stock.!</div>}
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


    
export default Hoodies