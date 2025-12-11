import PlatformCard from "../components/platformCard";
import { IoIosWallet } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { MdHowToVote } from "react-icons/md";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-x-hidden min-h-screen items-center justify-center bg-[#F2F5F8] flex flex-col">
      <div className="bg-white p-8 md:p-6 items-center justify-center rounded-[2.5rem] flex flex-col gap-8 w-full max-w-[990px] shadow-sm border border-gray-100">
        <h2 className="text-3xl text-center font-bold text-[#083E9E]">
          Welcome! Here's how Trust protects you.
        </h2>
        <div className="flex items-center justify-center gap-6">
          <PlatformCard
            icon={<IoIosWallet className="w-8 h-8" />}
            description="Manage and fund your contributions securely all in one place"
            heading="Your Secure Wallet"
            welcome={true}
          />
          <PlatformCard
            icon={<MdVerifiedUser className="w-8 h-8" />}
            description="Funds are held safely until campagin goals are met, ensuring accountability."
            heading="Escrow Protection"
            welcome={true}
          />
          <PlatformCard
            icon={<MdHowToVote className="w-8 h-8" />}
            description="Our OTP system ensures every vote is secure, transparent, and unique"
            heading="Verified voting"
            welcome={true}
          />
        </div>
        <Button
          className="w-3/12 cursor-pointer rounded-3xl p-4 bg-blue-500"
          onClick={() => navigate("/dashboard")}
        >
          Explore your dashboard
        </Button>
        <p className="underline">Learn more</p>
      </div>
    </div>
  );
}
