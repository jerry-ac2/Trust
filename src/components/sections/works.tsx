export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Fund Wallet",
      description:
        "Members pool funds into a shared wallet. Every contribution is recorded, timestamped, and visible to all participants.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      status: "Available",
    },
    {
      number: "02",
      title: "Held in Escrow",
      description:
        "Funds are secured and cannot be withdrawn unilaterally. The system acts as a neutral third party, ensuring safety.",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      status: "Locked",
    },
    {
      number: "03",
      title: "Release Escrow",
      description:
        "When someone requests a withdrawal, the community votes. Funds release only when consensus is reached.",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      status: "Approved",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 lg:py-30 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header - Editorial style */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm tracking-widest uppercase text-[#64748B] font-medium mb-4">
            How it works
          </p>
          <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[#0F172A]">
            Three steps to shared <br className="hidden sm:block" />
            financial control
          </h2>
        </div>

        {/* Steps - Clean cards with payment flow indication */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border border-[#E2E8F0] card-lift"
            >
              {/* Step number with icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-headline text-[#E2E8F0] group-hover:text-[#22C55E] transition-colors duration-300">
                  {step.number}
                </span>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-[#ECFDF3] text-[#5b7b67]"
                      : index === 1
                      ? "bg-[#EFF6FF] text-[#5b7b67]"
                      : "bg-[#ECFDF3] text-[#5b7b67]"
                  }`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Step content */}
              <h3 className="text-xl font-medium text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#475569] leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Status badge */}
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  step.status === "Available"
                    ? "badge-available"
                    : step.status === "Locked"
                    ? "badge-escrow"
                    : "badge-available"
                }`}
              >
                {step.status === "Locked" && (
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {step.status === "Approved" && (
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {step.status}
              </span>

              {/* Arrow to next step (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <svg
                    className="w-6 h-6 text-[#E2E8F0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual divider - subtle line with trust signals */}
        <div className="mt-24 pt-24 border-t border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#22C55E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-[#475569]">
                  No intermediaries
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#22C55E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-[#475569]">No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#22C55E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-[#475569]">
                  Transparent decisions
                </span>
              </div>
            </div>
            <a
              href="#features"
              className="text-[#22C55E] font-medium hover:text-[#16A34A] transition-colors duration-200 self-start flex items-center gap-2 group"
            >
              Explore features
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
