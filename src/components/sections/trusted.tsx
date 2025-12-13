export default function Trusted() {
  const useCases = [
    {
      title: "Rental groups",
      description:
        "Roommates pooling for shared expenses with equal say on spending.",
    },
    {
      title: "Investment clubs",
      description:
        "Friends investing together with transparent tracking and voting.",
    },
    {
      title: "Community funds",
      description:
        "Neighborhoods or organizations collecting for shared goals.",
    },
  ];

  return (
    <section id="use-cases" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left column - Statement */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm tracking-widest uppercase text-[#9a9a9a] font-medium mb-4">
              Who it's for
            </p>
            <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[#1a1a1a] mb-8">
              Trusted by groups <br className="hidden sm:block" />
              who share money
            </h2>
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              Whether you're splitting rent with roommates, running an
              investment club, or collecting for a community project — Trust
              gives everyone equal visibility and control.
            </p>
          </div>

          {/* Right column - Use cases */}
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group pb-16 border-b border-[#e8e6e1] last:border-0 last:pb-0"
              >
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 group-hover:text-[#2d5a4a] transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-[#5a5a5a] leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
