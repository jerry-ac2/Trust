import Layout from "./layout";

export default function HomeDashboard() {
  return (
    <Layout>
      <div className="max-w-5xl space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-sm tracking-widest uppercase text-[#9a9a9a] font-medium">
            Overview
          </p>
          <h1 className="font-headline text-4xl text-[#1a1a1a]">
            Welcome back, John
          </h1>
        </div>

        {/* Action Required */}
        <div className="bg-[#faf9f7] border border-[#e8e6e1] p-8 space-y-6">
          <div className="flex items-start justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
                <span className="text-sm font-medium text-[#9a9a9a] uppercase tracking-wider">
                  Action required
                </span>
              </div>
              <h2 className="text-xl font-medium text-[#1a1a1a]">
                Withdrawal request pending your vote
              </h2>
              <p className="text-[#5a5a5a] max-w-xl">
                <span className="text-[#1a1a1a] font-medium">
                  Green Earth Initiative
                </span>{" "}
                has requested $3,500.00 for "Phase 1 Equipment". Your approval
                is needed to reach consensus.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button className="px-6 py-3 text-sm font-medium text-[#5a5a5a] border border-[#e0e0e0] rounded-sm hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors">
                View details
              </button>
              <button className="px-6 py-3 text-sm font-medium bg-[#1a1a1a] text-[#faf9f7] rounded-sm hover:bg-[#2d2d2d] transition-colors">
                Cast vote
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#9a9a9a]">
            <span>Deadline: 24 hours</span>
            <span>•</span>
            <span>Current approval: 67%</span>
            <span>•</span>
            <span>4 of 6 votes needed</span>
          </div>
        </div>

        {/* Wallet Overview */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Balance */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-[#9a9a9a]">Total pooled balance</p>
              <p className="font-headline text-5xl text-[#1a1a1a]">
                $48,250.00
              </p>
            </div>

            <div className="flex gap-12 pt-6 border-t border-[#e8e6e1]">
              <div className="space-y-1">
                <p className="text-sm text-[#9a9a9a]">Locked in voting</p>
                <p className="text-xl font-medium text-[#1a1a1a]">$3,500.00</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#9a9a9a]">Disbursed this year</p>
                <p className="text-xl font-medium text-[#1a1a1a]">$12,400.00</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#9a9a9a]">Contributors</p>
                <p className="text-xl font-medium text-[#1a1a1a]">27 members</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <p className="text-sm text-[#9a9a9a]">Quick actions</p>
            <div className="space-y-3">
              <button className="w-full px-6 py-4 text-left text-sm font-medium text-[#1a1a1a] border border-[#e8e6e1] rounded-sm hover:bg-[#faf9f7] transition-colors">
                Add contribution
              </button>
              <button className="w-full px-6 py-4 text-left text-sm font-medium text-[#1a1a1a] border border-[#e8e6e1] rounded-sm hover:bg-[#faf9f7] transition-colors">
                Request withdrawal
              </button>
              <button className="w-full px-6 py-4 text-left text-sm font-medium text-[#1a1a1a] border border-[#e8e6e1] rounded-sm hover:bg-[#faf9f7] transition-colors">
                View ledger
              </button>
            </div>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-[#1a1a1a]">
              Active campaigns
            </h2>
            <a
              href="#"
              className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors"
            >
              View all
            </a>
          </div>

          <div className="space-y-4">
            {/* Campaign 1 */}
            <div className="flex items-start justify-between p-6 border border-[#e8e6e1] rounded-sm hover:bg-[#faf9f7] transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#2d5a4a] flex items-center justify-center text-white text-lg">
                  🌱
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-[#1a1a1a]">
                    Green Earth Initiative
                  </h3>
                  <p className="text-sm text-[#9a9a9a]">
                    Environmental • 12 contributors
                  </p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <p className="text-lg font-medium text-[#1a1a1a]">$7,500.00</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
                  <span className="text-sm text-[#9a9a9a]">Vote pending</span>
                </div>
              </div>
            </div>

            {/* Campaign 2 */}
            <div className="flex items-start justify-between p-6 border border-[#e8e6e1] rounded-sm hover:bg-[#faf9f7] transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white text-lg">
                  🎓
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-[#1a1a1a]">
                    Community Scholarship Fund
                  </h3>
                  <p className="text-sm text-[#9a9a9a]">
                    Education • 8 contributors
                  </p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <p className="text-lg font-medium text-[#1a1a1a]">$24,800.00</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2d5a4a]" />
                  <span className="text-sm text-[#9a9a9a]">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-[#1a1a1a]">
            Recent activity
          </h2>

          <div className="space-y-0">
            {[
              {
                action: "Contribution received",
                amount: "+$500.00",
                from: "Jane D.",
                time: "2 hours ago",
              },
              {
                action: "Withdrawal approved",
                amount: "-$1,200.00",
                from: "Green Earth Initiative",
                time: "Yesterday",
              },
              {
                action: "Vote cast",
                amount: "",
                from: "You approved Phase 1 Equipment",
                time: "2 days ago",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 border-b border-[#e8e6e1] last:border-0"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium text-[#1a1a1a]">
                    {item.action}
                  </p>
                  <p className="text-sm text-[#9a9a9a]">{item.from}</p>
                </div>
                <div className="text-right space-y-1">
                  {item.amount && (
                    <p
                      className={`text-sm font-medium ${
                        item.amount.startsWith("+")
                          ? "text-[#2d5a4a]"
                          : "text-[#1a1a1a]"
                      }`}
                    >
                      {item.amount}
                    </p>
                  )}
                  <p className="text-sm text-[#9a9a9a]">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
