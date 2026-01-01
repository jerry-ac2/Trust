export default function Trusted() {
  const useCases = [
    {
      title: "Rental groups",
      description:
        "Roommates pooling for shared expenses with equal say on spending.",
      icon: "",
      highlight: "$2.4M managed",
    },
    {
      title: "Investment clubs",
      description:
        "Friends investing together with transparent tracking and voting.",
      icon: "",
      highlight: "1,200+ groups",
    },
    {
      title: "Community funds",
      description:
        "Neighborhoods or organizations collecting for shared goals.",
      icon: "",
      highlight: "100% transparent",
    },
  ];

  return (
    <section id="use-cases" className="py-30 lg:py-30 bg-white">
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
            <div className="flex gap-8 pt-4 border-[#E2E8F0]">
              <div>
                <p className="text-2xl font-headline text-green-900">$4.2M+</p>
                <p className="text-sm text-[#64748B]">Funds secured</p>
              </div>
              <div>
                <p className="text-2xl font-headline text-green-900">2,400+</p>
                <p className="text-sm text-[#64748B]">Active groups</p>
              </div>
              <div>
                <p className="text-2xl font-headline text-green-900">99.9%</p>
                <p className="text-sm text-[#64748B]">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right column - Use cases */}
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-[#0F172A] group-hover:text-[#174227] transition-colors duration-200">
                        {useCase.title}
                      </h3>
                      <span className="text-xs font-medium text-[#174227] bg-[#ECFDF3] px-2 py-1 rounded-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
