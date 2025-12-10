import "./App.css";
import HomePage from "./pages/homepage";
import Auth from "./pages/auth/auth";
import OtpVerify from "./pages/auth/otpVerify";
import Welcome from "./pages/welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/otp-verify" element={<OtpVerify />} />
      <Route path="/auth/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
