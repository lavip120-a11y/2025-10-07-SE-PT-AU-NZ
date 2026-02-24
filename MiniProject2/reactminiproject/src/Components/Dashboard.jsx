import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
//import AppNavbar from "./AppNavbar";
import Header from "./DashComps/Header";
import MainGrid from "./DashComps/MainGrid";
//import SideMenu from "./SideMenu";
import AppTheme from "./DashComps/AppTheme";
import { chartsCustomizations } from "./DashComps/themeCustomisations/charts";
import { dataGridCustomizations } from "./DashComps/themeCustomisations/dataGrid";
import { datePickersCustomizations } from "./DashComps/themeCustomisations/datePickers";
import { treeViewCustomizations } from "./DashComps/themeCustomisations/treeView";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        {/* <SideMenu />
        <AppNavbar /> */}
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
