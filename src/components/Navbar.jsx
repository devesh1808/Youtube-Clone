import { Stack, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const theme = createTheme({
  typography: {
    h5: {
      color: "white",
      marginLeft: "10px",
    },
  },
});

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        {/* <Box bgcolor="white" ml={1} p={1}> */}
        <ThemeProvider theme={theme}>
          <Typography variant="h5">YouTube</Typography>
        </ThemeProvider>
        {/* </Box> */}
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
