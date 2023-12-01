import "./App.css";
import Permit from "./page/Permit";
import { Route, Routes } from "react-router-dom";
import Dashboad from "./page/Dashboad";
// import Home from "./page/Home";
import Login from "./components/landingpage/components/Login";
import Signup from "./components/landingpage/components/Signup";
import ConfinedSpacePermit from "./components/confinedSpacePermit/confinedSpacePermit/src/App";
import PermitTM from "./page/PermitTM";
function App() {
  return (
    <Routes>
      <Route path="/permit/:id" element={<Permit />} />
      <Route path="/permit" element={<Permit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboad />} />
      <Route path="/formpending" element={<Dashboad />} />
      <Route path="/confinedSpacePermit" element={<ConfinedSpacePermit />} />
      <Route path="/confinedSpacePermit" element={<ConfinedSpacePermit />} />
      <Route path="/permitToMove/:id1?/:id?" element={<PermitTM/>} />

      {/* <Route path="/Dashboard" element={<Dashboad/>}/> */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
