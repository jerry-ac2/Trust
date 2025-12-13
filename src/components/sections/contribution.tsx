export default function Features() {
  return (
    <section id="features" className="py-32 lg:py-40 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm tracking-widest uppercase text-[#9a9a9a] font-medium mb-4">
            Core features
          </p>
          <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[#1a1a1a]">
            Built for groups who <br className="hidden sm:block" />
            value transparency
          </h2>
        </div>

        {/* Features - Asymmetric grid, no borders */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Feature 1 - Shared Wallet */}
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#2d5a4a] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-[#1a1a1a]">
              Shared Wallet
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed text-lg">
              A single wallet that belongs to everyone. Each member can see the
              balance, track contributions, and understand exactly where the
              money is at any moment.
            </p>
          </div>

          {/* Feature 2 - Escrow Security */}
          <div className="space-y-6 lg:mt-24">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-[#1a1a1a]">
              Escrow Protection
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed text-lg">
              Funds are held securely and independently. No single person can
              access or move money without going through the proper approval
              process.
            </p>
          </div>

          {/* Feature 3 - Voting System */}
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#2d5a4a] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-[#1a1a1a]">
              Democratic Withdrawals
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed text-lg">
              When it's time to use the funds, any member can propose a
              withdrawal. The community reviews and votes. Majority approval is
              required to release money.
            </p>
          </div>

          {/* Feature 4 - Full Transparency */}
          <div className="space-y-6 lg:mt-24">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-[#1a1a1a]">
              Complete Visibility
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed text-lg">
              Every transaction, every vote, every decision is logged and
              visible to all members. Trust is built through radical
              transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
