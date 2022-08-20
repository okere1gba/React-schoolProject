import "./App.css";
//import Siderbar from "./components/sidebar.comp.jsx";
import { Routes, Route } from "react-router-dom";
import DrawerFunc from "./components/drawer/drawer-comp";
import BirthForm from "./pages/forbirth/birthregister-form";
import Home from "./pages/home";
import Info from "./pages/info";
import BoxSx from "./pages/contacts";
import DeathReg from "./pages/deathregister-form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DrawerFunc />}>
        <Route path="home" element={<Home />} />
        <Route path="rigisterdeath" element={<DeathReg />} />
        <Route path="contact" element={<BoxSx />} />
        <Route path="info" element={<Info />} />
      </Route>
      <Route path="rigisterbirth" element={<BirthForm />} />
    </Routes>
  );
}

export default App;
