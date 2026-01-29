import HomePage from "./pages/homepage";
import Welcome from "./pages/welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
