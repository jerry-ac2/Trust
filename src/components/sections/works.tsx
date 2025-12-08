import { MdEditDocument } from "react-icons/md";
import { LiaDonateSolid } from "react-icons/lia";
import { FaThumbsUp } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Works() {
  return (
    <div className="w-full h-screen p-10 mt-4 gap-6  flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">How It Works</h1>
      <div className="flex flex-col items-start gap-8">
        <div className="flex items-center gap-6 justify-center">
          <MdEditDocument className="w-10 h-10 text-blue-600 bg-blue-100 p-2 rounded-full" />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">1. Create Campaign</h1>
            <h3 className="text-gray-500">
              Start by defining your cause, setting clear goals and outlining
              the milestone for your project
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <LiaDonateSolid className="w-10 h-10 text-blue-600 bg-blue-100 p-2 rounded-full" />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">2. Fund Securely</h1>
            <h3 className="text-gray-500">
              Contributors add funds safely to the campaings escrow protected
              wallet
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <FaThumbsUp className="w-10 h-10 text-blue-600 bg-blue-100 p-2 rounded-full" />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">3. Vote on Milestone</h1>
            <h3 className="text-gray-500">
              As the campaign progresses, contributors vote on milestone
              completion using a secure OTP system
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <GiTakeMyMoney className="w-10 h-10 text-blue-600 bg-blue-100 p-2 rounded-full" />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">Release funds</h1>
            <h3 className="text-gray-500">
              Once a milestone is democratically approved, the corresponding
              funds are released from escrow
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
