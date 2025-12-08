import PlatformCard from "../platformCard";
import { IoMdWallet } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import { FaVoteYea } from "react-icons/fa";
export default function Contribution() {
  return (
    <div className="w-full flex h-screen flex-col justify-center items-center gap-7">
      <h1 className="text-5xl w-7/12 font-bold text-center">
        Secure, Transparent and Simple Contributions
      </h1>
      <p className="text-md font-semibold text-gray-500 text-center w-6/12">
        Our platform is built on three core priniciples to ensure every
        contribution is safe and every decision is clear
      </p>
      <div className="flex w-full gap-10 justify-center items-center">
        <PlatformCard
          icon={<IoMdWallet className="w-6 h-6 text-blue-600" />}
          heading="Secure Wallet Systems"
          description="Easily manage and contribute funds through your personal secure, digital wallet"
        />
        <PlatformCard
          icon={<GiPadlock className="w-6 h-6 text-blue-600" />}
          heading="Escrow Protected wallet"
          description="All contributions are held in a protected escrow account until the contribution goals are met"
        />
        <PlatformCard
          icon={<FaVoteYea className="w-6 h-6 text-blue-600" />}
          heading="Transparent OTP voting"
          description="Ensure democratic and transparent decision making with a secure one-time password (OTP) voting system"
        />
      </div>
    </div>
  );
}
