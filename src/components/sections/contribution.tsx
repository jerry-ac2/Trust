export default function Features() {
  return (
    <section id="features" className=" lg:py-20 cta-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm tracking-widest uppercase text-white font-xl mb-4">
            Core features
          </p>
          <h2 className="font-headline font-bold text-[clamp(3rem,7vw,3rem)] leading-[1.2] text-[#0F172A]">
            Built for groups who value transparency
          </h2>
        </div>

        {/* Features - Asymmetric grid with payment-focused design */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12">
          {/* Feature 1 - Shared Wallet */}
          <div className="group p-8 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] card-lift">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F172A] mb-2">
                  Shared Wallet
                </h3>
                <p className="text-[#475569] leading-relaxed mb-4">
                  A single wallet that belongs to everyone. Each member can see
                  the balance, track contributions, and understand exactly where
                  the money is at any moment.
                </p>
                <span className="badge-available px-3 py-1 rounded-full text-xs font-medium">
                  Real-time balance
                </span>
              </div>
            </div>
          </div>

          {/* Feature 2 - Escrow Security */}
          <div className="group p-8 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] card-lift">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F172A] mb-2">
                  Escrow Protection
                </h3>
                <p className="text-[#475569] leading-relaxed mb-4">
                  Funds are held securely and independently. No single person
                  can access or move money without going through the proper
                  approval process.
                </p>
                <span className="badge-escrow px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Funds locked until approved
                </span>
              </div>
            </div>
          </div>

          {/* Feature 3 - Voting System */}
          <div className="group p-8 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] card-lift">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F172A] mb-2">
                  Democratic Withdrawals
                </h3>
                <p className="text-[#475569] leading-relaxed mb-4">
                  When it's time to use the funds, any member can propose a
                  withdrawal. The community reviews and votes. Majority approval
                  is required to release money.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-[#22C55E] rounded-full" />
                    </div>
                    <span className="text-xs text-[#64748B]">67%</span>
                  </div>
                  <span className="text-xs text-[#22C55E] font-medium">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Full Transparency */}
          <div className="group p-8 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] card-lift">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F172A] mb-2">
                  Complete Visibility
                </h3>
                <p className="text-[#475569] leading-relaxed mb-4">
                  Every transaction, every vote, every decision is logged and
                  visible to all members. Trust is built through radical
                  transparency.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-[#22C55E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Transaction receipts
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-[#22C55E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Timestamps & IDs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
