import { FaArrowUp, FaGraduationCap, FaPlus, FaTree } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import Layout from "./layout";
import { MdArrowDropDown, MdHelp, MdNotifications } from "react-icons/md";

export default function HomeDashboard() {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, here's an overview of your account.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex text-gray-600 cursor-pointer gap-5">
            <span>
              <MdNotifications className="h-7 w-7" />
            </span>
            <span>
              <MdHelp className="h-7 w-7" />
            </span>
          </div>
          <Button className="bg-blue-500 px-6 cursor-pointer">
            <FaPlus />
            New Campaign
          </Button>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <div className="flex flex-col w-9/12 gap-8">
          <div className="bg-white rounded-2xl border border-gray-300 flex flex-col gap-8 p-6">
            {/* first card top */}
            <div className="flex items-center justify-between">
              {/* text on first card */}
              <div className="flex flex-col gap-2">
                <span className="text-md text-gray-600">Wallet Balance</span>
                <span className="text-2xl font-bold">NGN 0.00</span>
              </div>
              {/* buttons on first card */}
              <div className="flex gap-4">
                <Button className="bg-blue-500 px-6 cursor-pointer">
                  Add Funds
                </Button>
                <Button className="bg-gray-100 text-black border border-gray-200 px-6 cursor-pointer">
                  Withdraw Funds
                </Button>
              </div>
            </div>
            <div className="w-full h-[.4px] bg-gray-200"></div>
            {/* first card bottom */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-md text-gray-600">
                  Total Contributions
                </span>
                <span className="font-semibold">NGN 0.00</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-md text-gray-600">Active Campaigns</span>
                <span className="font-semibold">NGN 0.00</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-md text-gray-600">Votes Cast</span>
                <span className="font-semibold">0</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Active Campaigns</h2>
            <div className="flex gap-4">
              <div className="bg-white w-full flex flex-col gap-4 border rounded-2xl border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <span className="flex flex-col gap-1">
                    <span className="text-lg font-semibold">
                      Green Earth Initiative
                    </span>
                    <span className="text-gray-600">Reforestation Project</span>
                  </span>
                  <span className="p-4 flex items-center justify-center w-12 h-12 bg-green-300 text-green-500 rounded-full">
                    <FaTree className="h-7 w-7" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-full bg-gray-100 rounded-2xl">
                    <div className="w-4/12 h-3 bg-blue-600 rounded-2xl"></div>
                  </div>
                  <div className="flex items-center text-gray-600 justify-between">
                    <span>$7500/$10,000</span>
                    <span>33%</span>
                  </div>
                </div>
                <div>
                  <Button>Contribute</Button>
                </div>
              </div>
              <div className="bg-white w-full flex flex-col gap-4 border rounded-2xl border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <span className="flex flex-col gap-1">
                    <span className="text-lg font-semibold">
                      Tech for tomorrow
                    </span>
                    <span className="text-gray-600">
                      STEM Education for kids
                    </span>
                  </span>
                  <span className="p-4 flex items-center justify-center w-12 h-12 bg-blue-300 text-blue-500 rounded-full">
                    <FaGraduationCap className="h-12 w-12" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-full bg-gray-100 rounded-2xl">
                    <div className="w-5/12 h-3 bg-blue-600 rounded-2xl"></div>
                  </div>
                  <div className="flex items-center text-gray-600 justify-between">
                    <span>$7500/$10,000</span>
                    <span>50%</span>
                  </div>
                </div>
                <div>
                  <Button>Contribute</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h2>Recent Activity</h2>
            <div>
              <span className="bg-blue-400 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FaArrowUp className="rotate-225 h-5 w-5" />
              </span>
              <span>
                <span>Contribution to green earth</span>
                <span>Today, 02:30pm</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
