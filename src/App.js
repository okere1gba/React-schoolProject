import "./App.css";
//import Siderbar from "./components/sidebar.comp.jsx";
import { Routes, Route } from "react-router-dom";
import DrawerFunc from "./components/drawer/drawer-comp";
import BirthForm from "./pages/forbirth/birthregister-form";
import Info from "./pages/info";
import DeathReg from "./pages/forthdeath/deathregister-form";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@mui/system";
import Home from "./pages/homepage/home";
import Testing from "./pages/contacts";
import Error from "./pages/errorPage/error";
import ErrorMessage from "./pages/errorPage/error-message";
import Contacts from "./pages/contacts";

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<DrawerFunc />}>
          <Route path="contact" element={<Contacts />} />
          <Route path="home" element={<Home />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="rigisterbirth" element={<BirthForm />} />
        <Route path="rigisterdeath" element={<DeathReg />} />
        {/* <Route path="home1" element={<Home />} /> */}
        <Route path="*" element={<Error />} />
        <Route path="error" element={<ErrorMessage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
