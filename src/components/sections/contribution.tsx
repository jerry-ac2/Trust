import { colors } from "@/lib/theme";

export default function Features() {
  const features = [
    {
      title: "Shared Wallet",
      description:
        "A single wallet that belongs to everyone. Each member can see the balance, track contributions, and understand exactly where the money is at any moment.",
    },
    {
      title: "Escrow Protection",
      description:
        "Funds are held securely and independently. No single person can access or move money without going through the proper approval process.",
    },
    {
      title: "Democratic Withdrawals",
      description:
        "When it's time to use the funds, any member can propose a withdrawal. The community reviews and votes. Majority approval is required to release money.",
    },
    {
      title: "Complete Visibility",
      description:
        "Every transaction, every vote, every decision is logged and visible to all members. Trust is built through radical transparency.",
    },
  ];

  return (
    <section
      className="py-24"
      style={{ backgroundColor: colors.background.main }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p
            className="text-sm font-medium tracking-wide uppercase mb-4"
            style={{ color: colors.primary.green }}
          >
            Core Features
          </p>
          <h2
            className="font-headline text-4xl md:text-5xl leading-tight max-w-2xl"
            style={{ color: colors.text.primary }}
          >
            Built for groups who value transparency
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-1 h-16 mt-1"
                  style={{ backgroundColor: colors.primary.green }}
                />
                <div>
                  <h3
                    className="text-xl font-medium mb-3"
                    style={{ color: colors.text.primary }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: colors.text.secondary }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
