import "./App.css";
import HomePage from "./pages/homepage";
import Auth from "./pages/auth/auth";
import OtpVerify from "./pages/auth/otpVerify";
import Welcome from "./pages/welcome";
import { Routes, Route } from "react-router-dom";
import Campaigns from "./pages/dashboard/campaigns";
import Wallet from "./pages/dashboard/wallet";
import Settings from "./pages/dashboard/settings";
import HomeDashboard from "./pages/dashboard/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/otp-verify" element={<OtpVerify />} />
      <Route path="/auth/welcome" element={<Welcome />} />
      <Route path="/dashboard" element={<HomeDashboard />} />
      <Route path="/dashboard/campaigns" element={<Campaigns />} />
      <Route path="/dashboard/wallet" element={<Wallet />} />
      <Route path="/dashboard/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
