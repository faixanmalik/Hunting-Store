import {React, useEffect} from 'react'
import Product from '../../models/Product';
import mongoose from 'mongoose';

// Admin pannel
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid,} from "@mui/material";
import Products from "../../src/components/dashboard/Products"

function Allproducts({products}) {


  return (
    <ThemeProvider theme={theme}>
    <FullLayout>

    <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>


    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <Products products={products}/>
      </Grid>
    </Grid>



      </FullLayout>
    </ThemeProvider>
  )
}


export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState){
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI)
  }

    let products = await Product.find()


  // Pass data to the page via props
  return {
      props: { products: JSON.parse(JSON.stringify(products)) } 
    }

  }

export default Allproducts