import Layout from "./layout";

export default function HomeDashboard() {
  return (
    <Layout>
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 bg-white z-40 px-5 py-4 border-b border-[#E2E8F0]">
        <div className="flex items-center justify-between">
          <span className="font-headline text-xl text-[#0F172A]">Trust</span>
          <div className="w-8 h-8 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-xs font-medium">
            JD
          </div>
        </div>
      </header>

      <div className="px-5 py-6 lg:p-12 max-w-4xl space-y-8">
        {/* Greeting - Mobile first */}
        <div className="space-y-1">
          <p className="text-sm text-[#64748B]">Welcome back</p>
          <h1 className="font-headline text-2xl lg:text-4xl text-[#0F172A]">
            John
          </h1>
        </div>

        {/* Balance Card - Primary focus with fund states */}
        <div className="bg-white p-6 rounded-lg border border-[#E2E8F0] wallet-card-hover">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#64748B] font-medium">
                Your shared wallet
              </p>
              <span className="badge-available px-2 py-1 rounded-full text-xs font-medium">
                Available
              </span>
            </div>
            <p className="font-headline text-4xl lg:text-5xl text-[#0F172A]">
              $48,250<span className="text-[#64748B]">.00</span>
            </p>

            {/* Fund State Breakdown */}
            <div className="flex gap-6 pt-2 border-t border-[#E2E8F0]">
              <div className="space-y-1">
                <p className="text-xs text-[#64748B] uppercase tracking-wide">
                  Available
                </p>
                <p className="text-sm font-semibold fund-available">
                  $44,750.00
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#64748B] uppercase tracking-wide flex items-center gap-1">
                  <span className="status-dot status-dot-warning" />
                  Pending
                </p>
                <p className="text-sm font-semibold fund-pending">$0.00</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#64748B] uppercase tracking-wide flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-[#2563EB]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Escrow
                </p>
                <p className="text-sm font-semibold fund-escrow">$3,500.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Actions - Touch-friendly with payment focus */}
        <div className="flex gap-3">
          <button className="flex-1 py-4 cta-primary rounded-lg btn-press font-medium flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Fund Wallet
          </button>
          <button className="flex-1 py-4 cta-secondary rounded-lg btn-press font-medium flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            Withdraw
          </button>
        </div>

        {/* Action Required - Escrow/Vote with clear state */}
        <div className="bg-[#ECFDF3] p-5 rounded-lg border border-[#22C55E]/20 card-lift">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="status-dot status-dot-warning animate-pulse-subtle" />
              <span className="text-sm font-medium text-[#64748B] uppercase tracking-wider">
                Vote needed
              </span>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-[#0F172A]">
                Green Earth Initiative
              </p>
              <p className="text-sm text-[#475569]">
                Requesting $3,500 for Phase 1 equipment
              </p>
            </div>

            {/* Escrow indicator */}
            <div className="flex items-center gap-2 text-xs bg-[#EFF6FF] px-3 py-2 rounded-md">
              <svg
                className="w-4 h-4 text-[#2563EB]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[#2563EB] font-medium">
                $3,500 held in escrow until vote completes
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#22C55E] rounded-full" />
                </div>
                <span className="text-[#64748B]">67% approved</span>
              </div>
              <span className="text-[#EAB308] font-medium flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                24h left
              </span>
            </div>
            <button className="w-full py-3 cta-primary rounded-lg btn-press font-medium">
              Review & Vote
            </button>
          </div>
        </div>

        {/* Quick Stats - Horizontal scroll with fund states */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 lg:mx-0 lg:px-0">
          <div className="shrink-0 bg-white p-4 rounded-lg border border-[#E2E8F0] min-w-[140px] card-lift">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs text-[#64748B] uppercase tracking-wide">
                Locked
              </p>
            </div>
            <p className="text-lg font-semibold fund-locked">$3,500</p>
          </div>
          <div className="shrink-0 bg-white p-4 rounded-lg border border-[#E2E8F0] min-w-[140px] card-lift">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-xs text-[#64748B] uppercase tracking-wide">
                Disbursed
              </p>
            </div>
            <p className="text-lg font-semibold fund-available">$12,400</p>
          </div>
          <div className="shrink-0 bg-white p-4 rounded-lg border border-[#E2E8F0] min-w-[140px] card-lift">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-[#3B82F6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-xs text-[#64748B] uppercase tracking-wide">
                Contributors
              </p>
            </div>
            <p className="text-lg font-semibold text-[#0F172A]">27</p>
          </div>
        </div>

        {/* Active Causes */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-[#0F172A]">
              Active causes
            </h2>
            <button className="text-sm text-[#22C55E] hover:text-[#16A34A] transition-colors font-medium">
              See all
            </button>
          </div>

          <div className="space-y-3">
            {/* Cause Item 1 - With pending vote indicator */}
            <button className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-lg text-left wallet-card-hover">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white">
                  🌱
                </div>
                <div>
                  <p className="font-medium text-[#0F172A] text-sm">
                    Green Earth
                  </p>
                  <p className="text-xs text-[#64748B]">$7,500 pooled</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="badge-pending px-2 py-1 rounded-full text-xs font-medium">
                  Vote pending
                </span>
              </div>
            </button>

            {/* Cause Item 2 - Active state */}
            <button className="w-full flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-lg text-left wallet-card-hover">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-white">
                  🎓
                </div>
                <div>
                  <p className="font-medium text-[#0F172A] text-sm">
                    Scholarship Fund
                  </p>
                  <p className="text-xs text-[#64748B]">$24,800 pooled</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="badge-available px-2 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity with enhanced transaction visibility */}
        <div className="space-y-4">
          <h2 className="text-base font-medium text-[#0F172A]">Recent</h2>

          <div className="bg-white rounded-lg border border-[#E2E8F0] divide-y divide-[#E2E8F0]">
            {[
              {
                label: "Contribution from Jane D.",
                amount: "+$500",
                time: "2h ago",
                type: "incoming",
                txId: "TX-2024-001234",
              },
              {
                label: "Withdrawal approved",
                amount: "-$1,200",
                time: "Yesterday",
                type: "outgoing",
                txId: "TX-2024-001233",
              },
              {
                label: "You voted on Phase 1",
                amount: "",
                time: "2 days ago",
                type: "vote",
                txId: "VOTE-2024-0089",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {/* Transaction type icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === "incoming"
                        ? "bg-[#ECFDF3]"
                        : item.type === "outgoing"
                        ? "bg-[#F8FAFC]"
                        : "bg-[#EFF6FF]"
                    }`}
                  >
                    {item.type === "incoming" && (
                      <svg
                        className="w-4 h-4 text-[#22C55E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    )}
                    {item.type === "outgoing" && (
                      <svg
                        className="w-4 h-4 text-[#64748B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    )}
                    {item.type === "vote" && (
                      <svg
                        className="w-4 h-4 text-[#3B82F6]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-[#0F172A] font-medium">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {item.time} • {item.txId}
                    </p>
                  </div>
                </div>
                {item.amount && (
                  <p
                    className={`text-sm font-semibold ${
                      item.amount.startsWith("+")
                        ? "fund-available"
                        : "text-[#0F172A]"
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
