import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-9/12 flex items-center justify-center border p-[1.3px] bg-linear-to-br from-blue-300 via-neutral-300 to-blue-600 rounded-4xl mt-6">
        <div className="flex-direction-row w-full flex justify-between bg-white p-2 px-6 gap-10 border rounded-4xl">
          <span className="flex items-center">
            <img src={"./logo.png"} alt="" className="w-16 h-14" />
          </span>
          <div className="text-white flex gap-8 items-center font-semibold">
            <a href="">Features</a>
            <a href="">How it works</a>
            <a href="">Pricing</a>
            <a href="">FAQ</a>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              className="bg-blue-400 rounded-3xl"
              onClick={() => navigate("/auth")}
            >
              Start a contribution
            </Button>
            {/* <Button className="bg-white border rounded-3xl px-6 text-black hover:bg-gray-100">
              Log in
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
