import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
import mongoose from "mongoose";

function Tshirt({ product }) {


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Object.keys(product).map((item)=>{
            return <Link key={product[item].id} href={product[item].href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product[item].imageSrc}
                  alt={product[item].imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
                <h3 className="mt-4 text-sm text-gray-700">{product[item].name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product[item].price}</p>
            </Link>
            })}
        </div>
      </div>
    </div>
      )
    }



    export async function getServerSideProps() {
      if (!mongoose.connections[0].readyState){
        await mongoose.connect(process.env.MONGO_URI)
      }
      let products = await Product.find({category: 'tshirts'})
    
      let tshirts= {}
        for (let item of products){
            if (item.title in tshirts) {
                if (!tshirts[item.title].color.includes(item.color) && item.avilableQty > 0) {
                    tshirts[item.title].color.push(item.color)
                }
                if (!tshirts[item.title].size.includes(item.size) && item.avilableQty > 0) {
                    tshirts[item.title].size.push(item.size)
                }
            }
            else {
                // tshirts[item.title] is key and its value is whole object(item)
                tshirts[item.title] = JSON.parse(JSON.stringify(item))
                if(item.avilableQty > 0) {
                    tshirts[item.title].color = [item.color]
                    tshirts[item.title].size = [item.size]
                }
    
            }
        };
    
    
    
    
     
      // Pass data to the page via props
      return {
         props: { product: JSON.parse(JSON.stringify(tshirts)) } 
        }
    }
export default Tshirt