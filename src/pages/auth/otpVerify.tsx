import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#F2F5F8] flex flex-col">
      <div className="flex-1 flex justify-center items-center py-12 px-4">
        <div className="bg-white p-8 md:p-6 rounded-[2.5rem] flex flex-col items-center gap-8 w-full max-w-[500px] shadow-sm border border-gray-100">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold text-[#083E9E]">
              Enter Verification Code
            </h1>
            <p className="text-gray-500 text-center text-sm">
              We sent a 6-digit code to your registered mobile number ending in
              *****9983
            </p>
          </div>
          <form action="" className="flex items-center justify-center gap-4">
            <Input type="text" className="h-14 w-13 bg-gray-200" />
            <Input type="number" className="h-14 w-13 bg-gray-200" />
            <Input type="number" className="h-14 w-13 bg-gray-200" />
            <Input type="number" className="h-14 w-13 bg-gray-200" />
            <Input type="number" className="h-14 w-13 bg-gray-200" />
            <Input type="number" className="h-14 w-13 bg-gray-200" />
          </form>
          <Button
            className="w-full bg-[#083E9E] hover:bg-[#062f7a] text-white font-bold h-10 cursor-pointer rounded-xl mt-2 text-lg"
            onClick={() => navigate("/auth/welcome")}
          >
            Verify
          </Button>
          <span>
            Didn't receive the code? <a href="#">Resend Code</a>
          </span>
          <Button className="flex items-center gap-2 bg-transparent text-black hover:bg-gray-100 w-4/12 hover:text-black cursor-pointer">
            <FaArrowLeft />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
