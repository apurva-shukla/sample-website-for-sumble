import Link from "next/link";

export default function UseCases() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Navigation links */}
            <div className="flex items-center gap-8">
              <Link href="/" className="text-slate-700 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/what-is-sumble" className="text-slate-700 hover:text-green-600 font-medium transition-colors">
                Why Sumble?
              </Link>
              <Link href="/use-cases" className="text-slate-700 hover:text-green-600 font-medium transition-colors">
                Use Cases
              </Link>
              <Link href="/case-studies" className="text-slate-700 hover:text-green-600 font-medium transition-colors">
                Customer Case Studies
              </Link>
            </div>

            {/* Right side - Sign In button */}
            <Link
              href="/onboarding-prototype.html"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              See Account Intelligence
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Every sales motion, powered by Sumble
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From prospecting new accounts to closing enterprise deals to growing your customer base—Sumble gives every role on your GTM team the intelligence they need to win.
          </p>
        </div>
      </section>

      {/* Use Case 1 - Image on Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Image placeholder - Use Case 1]</span>
            </div>

            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                SDRs & BDRs
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Generate pipeline with accounts that actually match your ICP
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Stop wasting time on accounts that will never close. Build target lists based on the signals that matter: tech stack adoption, org structure, headcount by function, and hiring trends.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Example:</strong> You sell DevOps tooling. Instead of cold calling every company with &quot;engineers,&quot; find the 500 companies with Platform Engineering teams actively using Kubernetes and hiring for SRE roles in the last 90 days.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Search by tech stack, complementary tools, or competitive displacement opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Filter by team size, job function, and org structure to match your exact ICP</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Export enriched account lists with team data, not just generic firmographics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case 2 - Image on Right */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Account Executives
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Close deals with perfect timing and personalized outreach
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Your time is valuable. Stop chasing low-probability accounts and focus on opportunities showing real buying intent—companies actively hiring, launching new initiatives, or evaluating your category.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Example:</strong> LexisNexis just posted 30 sales operations roles. Sumble flags this as a high-intent signal. You reach out to the VP of Sales Ops with a personalized message about scaling outreach efficiency. Deal closed in 6 weeks instead of 6 months.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Prioritize accounts with hiring spikes, new tech adoption, or org changes signaling active projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Find decision-makers mapped to the exact teams and projects that need your solution</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Craft messages that reference real context: their team structure, tech stack, and current initiatives</span>
                </li>
              </ul>
            </div>

            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Image placeholder - Use Case 2]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case 3 - Image on Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Image placeholder - Use Case 3]</span>
            </div>

            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Customer Success & Account Management
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Grow accounts and prevent churn before it&apos;s too late
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Reactive customer management loses you revenue. Proactive CSMs spot expansion opportunities and churn risks early—when they can still do something about it.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Example:</strong> Your customer starts posting jobs mentioning your competitor. Sumble alerts you immediately. You reach out proactively, address concerns, and save a $450K contract. Meanwhile, another customer doubles their engineering team—perfect upsell timing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Track org growth, new team formation, and tech stack expansion for upsell opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Monitor for churn signals: competitor mentions in job posts, team downsizing, or tech migrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Build relationships across the org—know who&apos;s joining, who&apos;s promoting, and who makes budget decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case 4 - Image on Right */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                Sales Leadership & RevOps
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Scale your team with intelligence, not just headcount
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Most sales tools give you activity metrics. Sumble gives you intelligence infrastructure—the data foundation that makes your entire GTM team more productive and your pipeline more predictable.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Example:</strong> Your SDRs were spending 60% of their time researching accounts. With Sumble, they instantly see tech stacks, org charts, and intent signals. Research time drops to 15%. Your team closes 4x more meetings with the same headcount.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Standardize how your team researches, targets, and prioritizes accounts across all sales motions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Integrate with your CRM to auto-enrich accounts with team structure, tech stack, and buying signals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Improve pipeline quality and velocity—your reps spend time selling, not manually piecing together account context</span>
                </li>
              </ul>
            </div>

            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Image placeholder - Use Case 4]</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            See how Sumble works for your team
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Search any account right now. See their org structure, tech stack, and buying signals in seconds. No credit card. No sales call. Just instant intelligence.
          </p>
          <Link
            href="/onboarding-prototype.html"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Try Sumble Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Sumble</h3>
              <p className="text-sm">The world&apos;s best B2B data source for sales teams.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/what-is-sumble" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
            <p>&copy; 2025 Sumble. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
