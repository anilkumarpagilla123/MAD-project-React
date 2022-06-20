import "./App.css";
import "./components/header/Header.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contactus from "./components/Contactus";
import Userdashboard from "./components/userdashboard/Userdashboard";
import Userprofile from "./components/user-profile/Userprofile";
import Donate from "./components/Donate/Donate";
import Payment from "./components/Payment/Payment";

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/userdashboard" element={<Userdashboard />}>
          <Route path="profile" element={<Userprofile />} />
          <Route path="donate" element={<Donate/>}/>
          <Route path="" element={<Navigate to="profile" replace={true} />} />
        </Route>
        <Route path="/payment" element={<Payment/>} />
      </Routes>
      <div className="footer">
        <Footer />  
      </div>
    </div>
  );
}

export default App;
