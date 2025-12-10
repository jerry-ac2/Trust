import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function Login({
  setIsLogin,
}: {
  setIsLogin: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-[#083E9E]">Login</h1>
        <p className="text-gray-500 text-sm">Securely login to your account</p>
      </div>

      <form className="flex flex-col gap-5">
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
            className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all h-14 px-4"
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
            className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all h-14 px-4"
          />
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm text-[#083E9E] font-semibold hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button className="w-full bg-[#083E9E] hover:bg-[#062f7a] text-white font-bold h-10 cursor-pointer rounded-xl mt-2 text-lg">
          Log In
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => setIsLogin(false)}
            className="text-[#083E9E] font-bold hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}
