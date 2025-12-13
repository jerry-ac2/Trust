export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Contribute together",
      description:
        "Members pool funds into a shared wallet. Every contribution is recorded and visible to all.",
    },
    {
      number: "02",
      title: "Held in escrow",
      description:
        "Funds are secured and cannot be withdrawn unilaterally. The system acts as a neutral third party.",
    },
    {
      number: "03",
      title: "Approve as a group",
      description:
        "When someone requests a withdrawal, the community votes. Funds release only when consensus is reached.",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header - Editorial style */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm tracking-widest uppercase text-[#9a9a9a] font-medium mb-4">
            How it works
          </p>
          <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[#1a1a1a]">
            Three steps to shared <br className="hidden sm:block" />
            financial control
          </h2>
        </div>

        {/* Steps - Clean, no cards */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div key={index} className="group">
              {/* Step number */}
              <span className="block text-6xl lg:text-7xl font-headline text-[#e8e6e1] mb-6 group-hover:text-[#2d5a4a] transition-colors duration-500">
                {step.number}
              </span>

              {/* Step content */}
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                {step.title}
              </h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual divider - subtle line */}
        <div className="mt-24 pt-24 border-t border-[#e8e6e1]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <p className="text-lg text-[#5a5a5a] max-w-xl">
              No intermediaries. No hidden fees. Just transparent, collective
              decision-making.
            </p>
            <a
              href="#features"
              className="text-[#1a1a1a] font-medium border-b border-[#1a1a1a] hover:text-[#2d5a4a] hover:border-[#2d5a4a] transition-colors duration-300 self-start"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
