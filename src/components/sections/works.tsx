export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Fund Wallet",
      description:
        "Members pool funds into a shared wallet. Every contribution is recorded, timestamped, and visible to all participants.",
      icon: "/hero-svg/3dicons-wallet-front-premium.png",
      status: "Available",
    },
    {
      number: "02",
      title: "Held in Escrow",
      description:
        "Funds are secured and cannot be withdrawn unilaterally. The system acts as a neutral third party, ensuring safety.",
      icon: "/hero-svg/3dicons-locker-front-clay.png",
      status: "Locked",
    },
    {
      number: "03",
      title: "Release Escrow",
      description:
        "When someone requests a withdrawal, the community votes. Funds release only when consensus is reached.",
      icon: "/hero-svg/3dicons-tick-front-premium.png",
      status: "Approved",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-10 bg-stone-50">
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
              className="group relative bg-white p-8 rounded-xl card-lift"
            >
              {/* Step number with icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-headline text-[#5b7b67] text-shadow-xs">
                  {step.number}
                </span>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center `}
                >
                  <img src={step.icon} className="h-10 w-10" alt="" />
                </div>
              </div>

              {/* Step content */}
              <h3 className="text-xl font-medium text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className=" relative text-[#475569] leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Status badge */}
              <div className="items-end absolute left-0 top-0 bottom-0 w-full h-1 bg-[#5b7b67]"></div>
              <div className="items-end absolute left-0 bottom-0 w-full h-1 bg-[#5b7b67]"></div>
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
