import Layout from "./layout";

export default function HomeDashboard() {
  return (
    <Layout>
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 bg-white z-40 px-5 py-4 border-b border-[#e8e6e1]">
        <div className="flex items-center justify-between">
          <span className="font-headline text-xl text-[#1a1a1a]">Trust</span>
          <div className="w-8 h-8 rounded-full bg-[#2d5a4a] flex items-center justify-center text-white text-xs font-medium">
            JD
          </div>
        </div>
      </header>

      <div className="px-5 py-6 lg:p-12 max-w-4xl space-y-8">
        {/* Greeting - Mobile first */}
        <div className="space-y-1">
          <p className="text-sm text-[#9a9a9a]">Welcome back</p>
          <h1 className="font-headline text-2xl lg:text-4xl text-[#1a1a1a]">
            John
          </h1>
        </div>

        {/* Balance Card - Primary focus */}
        <div className="space-y-2">
          <p className="text-sm text-[#9a9a9a]">Your shared wallet</p>
          <p className="font-headline text-4xl lg:text-5xl text-[#1a1a1a]">
            $48,250<span className="text-[#9a9a9a]">.00</span>
          </p>
        </div>

        {/* Primary Actions - Touch-friendly */}
        <div className="flex gap-3">
          <button className="flex-1 py-4 bg-[#1a1a1a] text-white text-sm font-medium rounded-sm active:scale-[0.98] transition-transform">
            Contribute
          </button>
          <button className="flex-1 py-4 border border-[#e0e0e0] text-[#1a1a1a] text-sm font-medium rounded-sm active:scale-[0.98] transition-transform">
            Withdraw
          </button>
        </div>

        {/* Action Required - If any */}
        <div className="bg-[#faf9f7] p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
            <span className="text-sm font-medium text-[#9a9a9a] uppercase tracking-wider">
              Vote needed
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-[#1a1a1a]">Green Earth Initiative</p>
            <p className="text-sm text-[#5a5a5a]">
              Requesting $3,500 for Phase 1 equipment
            </p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#9a9a9a]">67% approved</span>
            <span className="text-[#9a9a9a]">24h left</span>
          </div>
          <button className="w-full py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-sm active:scale-[0.98] transition-transform">
            Review &amp; Vote
          </button>
        </div>

        {/* Quick Stats - Horizontal scroll on mobile */}
        <div className="flex gap-6 overflow-x-auto pb-2 -mx-5 px-5 lg:mx-0 lg:px-0">
          <div className="shrink-0 space-y-1">
            <p className="text-sm text-[#9a9a9a]">Locked</p>
            <p className="text-lg font-medium text-[#1a1a1a]">$3,500</p>
          </div>
          <div className="shrink-0 space-y-1">
            <p className="text-sm text-[#9a9a9a]">Disbursed</p>
            <p className="text-lg font-medium text-[#1a1a1a]">$12,400</p>
          </div>
          <div className="shrink-0 space-y-1">
            <p className="text-sm text-[#9a9a9a]">Contributors</p>
            <p className="text-lg font-medium text-[#1a1a1a]">27</p>
          </div>
        </div>

        {/* Active Causes */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-[#1a1a1a]">
              Active causes
            </h2>
            <button className="text-sm text-[#5a5a5a]">See all</button>
          </div>

          <div className="space-y-3">
            {/* Cause Item 1 */}
            <button className="w-full flex items-center justify-between p-4 border border-[#e8e6e1] rounded-sm text-left active:bg-[#faf9f7] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2d5a4a] flex items-center justify-center text-white">
                  🌱
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">
                    Green Earth
                  </p>
                  <p className="text-xs text-[#9a9a9a]">$7,500 pooled</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
              </div>
            </button>

            {/* Cause Item 2 */}
            <button className="w-full flex items-center justify-between p-4 border border-[#e8e6e1] rounded-sm text-left active:bg-[#faf9f7] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white">
                  🎓
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">
                    Scholarship Fund
                  </p>
                  <p className="text-xs text-[#9a9a9a]">$24,800 pooled</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2d5a4a]" />
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-base font-medium text-[#1a1a1a]">Recent</h2>

          <div className="space-y-0">
            {[
              {
                label: "Contribution from Jane D.",
                amount: "+$500",
                time: "2h ago",
              },
              {
                label: "Withdrawal approved",
                amount: "-$1,200",
                time: "Yesterday",
              },
              { label: "You voted on Phase 1", amount: "", time: "2 days ago" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 border-b border-[#e8e6e1] last:border-0"
              >
                <div>
                  <p className="text-sm text-[#1a1a1a]">{item.label}</p>
                  <p className="text-xs text-[#9a9a9a]">{item.time}</p>
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
