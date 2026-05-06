export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Incident Response Checklists{" "}
          <span className="text-[#58a6ff]">Built for Your Stack</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Input your tech stack and get AI-generated incident response playbooks tailored to your infrastructure. Stop scrambling during outages.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $49/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["50+", "Failure Scenarios"],
            ["10min", "Setup Time"],
            ["Always", "Up to Date"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited checklist generation",
              "Custom tech stack profiles",
              "50+ incident scenario templates",
              "Exportable PDF playbooks",
              "Team sharing & collaboration",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What tech stacks are supported?",
              "We support all major stacks including AWS, GCP, Azure, Kubernetes, Docker, Node.js, Python, Rails, databases like Postgres and Redis, and more. If you use it, we cover it."
            ],
            [
              "How are the checklists generated?",
              "You input your stack components and we use AI to generate step-by-step incident response playbooks covering detection, triage, mitigation, and post-mortem for each failure scenario."
            ],
            [
              "Can I export or share my playbooks?",
              "Yes. Every checklist can be exported as a PDF or shared with your team via a private link. Perfect for runbooks and on-call handoffs."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Incident Response Checklist Builder. All rights reserved.
      </footer>
    </main>
  );
}
