import "./App.css";
import HomePage from "./pages/homepage";
import Auth from "./pages/auth/auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
