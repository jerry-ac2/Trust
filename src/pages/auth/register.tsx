import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

export default function Register({
  setIsLogin,
}: {
  setIsLogin: (value: boolean) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-3xl text-center font-bold text-[#083E9E]">
          Create Account
        </h1>
        <p className="text-gray-500 text-sm text-center">
          Join the platform for your secure and transparent contributions
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="e.g. John Doe"
            className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all h-12 px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            placeholder="e.g. user@example.com"
            className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all h-12 px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="••••••••"
            className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all h-12 px-4"
          />
        </div>

        <Button
          className="w-full bg-[#083E9E] hover:bg-[#062f7a] cursor-pointer text-white font-bold h-10 rounded-xl mt-4 text-lg"
          onClick={() => navigate("/auth/otp-verify")}
        >
          Create Account
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => setIsLogin(true)}
            className="text-[#083E9E] font-bold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
