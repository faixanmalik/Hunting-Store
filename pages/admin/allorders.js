import React from 'react'

// Admin pannel
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid,} from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance"


function AllOrders() {
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
        <ProductPerfomance />
      </Grid>
    </Grid>



      </FullLayout>
    </ThemeProvider>
  )
}

export default AllOrders