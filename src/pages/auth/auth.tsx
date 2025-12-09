import { useState } from "react";
import Login from "./login";
import Register from "./register";
import Navbar from "../../components/navbar";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#F2F5F8] flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center py-12 px-4">
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col gap-6 w-full max-w-[450px] shadow-sm border border-gray-100">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
}
