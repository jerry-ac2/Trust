export default function Trusted() {
  const useCases = [
    {
      title: "Rental groups",
      description:
        "Roommates pooling for shared expenses with equal say on spending.",
      icon: "🏠",
      highlight: "$2.4M managed",
    },
    {
      title: "Investment clubs",
      description:
        "Friends investing together with transparent tracking and voting.",
      icon: "📈",
      highlight: "1,200+ groups",
    },
    {
      title: "Community funds",
      description:
        "Neighborhoods or organizations collecting for shared goals.",
      icon: "🤝",
      highlight: "100% transparent",
    },
  ];

  return (
    <section id="use-cases" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left column - Statement */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm tracking-widest uppercase text-[#64748B] font-medium mb-4">
              Who it's for
            </p>
            <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[#0F172A] mb-8">
              Trusted by groups <br className="hidden sm:block" />
              who share money
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Whether you're splitting rent with roommates, running an
              investment club, or collecting for a community project — Trust
              gives everyone equal visibility and control.
            </p>

            {/* Trust stats */}
            <div className="flex gap-8 pt-8 border-t border-[#E2E8F0]">
              <div>
                <p className="text-2xl font-headline text-[#22C55E]">$4.2M+</p>
                <p className="text-sm text-[#64748B]">Funds secured</p>
              </div>
              <div>
                <p className="text-2xl font-headline text-[#0F172A]">2,400+</p>
                <p className="text-sm text-[#64748B]">Active groups</p>
              </div>
              <div>
                <p className="text-2xl font-headline text-[#3B82F6]">99.9%</p>
                <p className="text-sm text-[#64748B]">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right column - Use cases */}
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] card-lift cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-2xl flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-[#0F172A] group-hover:text-[#22C55E] transition-colors duration-200">
                        {useCase.title}
                      </h3>
                      <span className="text-xs font-medium text-[#22C55E] bg-[#ECFDF3] px-2 py-1 rounded-full">
                        {useCase.highlight}
                      </span>
                    </div>
                    <p className="text-[#475569] leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional trust indicator */}
            <div className="flex items-center gap-3 p-4 bg-[#ECFDF3] rounded-lg border border-[#22C55E]/20">
              <svg
                className="w-5 h-5 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-[#0F172A]">
                  Bank-level security
                </p>
                <p className="text-xs text-[#64748B]">
                  All funds protected with 256-bit encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
