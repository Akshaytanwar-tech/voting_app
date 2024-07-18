import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Myprofile from "./components/Authentication/Myprofile";
import ChangePassword from "./components/Authentication/ChangePassword";
import Dashboard from "./components/admin/Dashboard";
import ManageCandidates from "./components/admin/ManageCandidates";
import CongratulationMod from "./components/Modal/CongratulationMod";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/profile" element={<Myprofile />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/dashboard/candidate"
            element={<ManageCandidates />}
          />
          <Route exact path="/test" element={<CongratulationMod />} />
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
