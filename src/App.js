import "./App.css";
//import Siderbar from "./components/sidebar.comp.jsx";
import { Routes, Route } from "react-router-dom";
import DrawerFunc from "./components/drawer/drawer-comp";
import BirthForm from "./pages/forbirth/birthregister-form";
import Info from "./pages/info";
import BoxSx from "./pages/contacts";
import DeathReg from "./pages/forthdeath/deathregister-form";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@mui/system";
import Home from "./pages/homepage/home";

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<DrawerFunc />}>
          <Route path="contact" element={<BoxSx />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="rigisterbirth" element={<BirthForm />} />
        <Route path="rigisterdeath" element={<DeathReg />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
