// Admin pannel
import { Grid } from "@mui/material";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";




export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>
  <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
    </Grid>
    </FullLayout>
  </ThemeProvider>

  );
}
