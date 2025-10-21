import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
      <section id="home" className="pt-32 pb-20 flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product screenshot on the left */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/hero.jpg"
                alt="Sumble platform showing Vercel's team data and technologies"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Stop wasting time on sales research. Start closing deals.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Know which teams use which technologies. Track job posts that signal buying intent. Find the exact person who needs your solution—not just &quot;an engineer,&quot; but the Head of GenAI who uses LangSmith.
            </p>
            <div className="mt-4">
              <Link
                href="/onboarding-prototype.html"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                See Your Account Intelligence (It's free!)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            Trusted by leading companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Databricks with hover */}
            <div className="relative group">
              <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer px-6 py-4">
                Databricks
              </div>

              {/* Hover tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="flex items-start gap-4">
                  {/* Profile picture placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0 flex items-center justify-center text-white font-semibold">
                    PP
                  </div>

                  <div className="flex-1">
                    <p className="text-slate-700 text-sm italic mb-3 leading-relaxed">
                      &quot;Our reps went from spending hours hunting for the right contact to instantly finding decision-makers launching projects we solve for. Pipeline quality jumped 4x.&quot;
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">Peter Pan</div>
                      <div className="text-slate-500">Head of RevOps, Databricks</div>
                    </div>
                  </div>
                </div>

                {/* Arrow pointing up */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45"></div>
              </div>
            </div>

            {/* Other logos - no hover yet */}
            <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer px-6 py-4">
              Datadog
            </div>

            <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer px-6 py-4">
              Rippling
            </div>

            <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer px-6 py-4">
              Vercel
            </div>

            <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer px-6 py-4">
              OpenAI
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sell smarter at every stage</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re generating pipeline, closing deals, or growing accounts, Sumble gives you the context, contacts, and timing to win.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Generate Pipeline</h3>
              <p className="text-slate-600">Build target account lists using tech stack, job function, and headcount filters. Find companies already using your competitors or complementary tools.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Close Deals</h3>
              <p className="text-slate-600">Prioritize opportunities with intent signals from job posts and hiring trends. Find decision-makers and craft personalized messages that land.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Grow Accounts</h3>
              <p className="text-slate-600">Spot expansion opportunities and churn risks early. Track org growth, new tech adoption, and competitive threats in your existing customer base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Capabilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The data that actually closes deals</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Context, contacts, and timing—everything you need to sell, in one searchable place. No more hunting across LinkedIn, job boards, and tech review sites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Intent Signals</h3>
              <p className="text-slate-600">Know when companies are ready to buy. Track job posts, hiring spikes, and org changes that signal active projects and budget.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Tech Stacks</h3>
              <p className="text-slate-600">See exactly which technologies each team uses—not just what&apos;s on the company website. Target users of your competitors or complementary tools.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Org Structure</h3>
              <p className="text-slate-600">Understand team hierarchy and distribution. Find the engineering lead, their manager, and the VP—all mapped to their actual teams and projects.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">People Profiles</h3>
              <p className="text-slate-600">Get enriched profiles showing not just titles, but the exact technologies people work with, their team, and projects they&apos;re hiring for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why sales teams waste 70% of their time on research</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Most B2B data vendors dump massive spreadsheets and call it done. You get company names and email addresses, but no context. No teams. No tech stacks. No intent signals.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                So your reps spend hours hunting across LinkedIn, job boards, tech review sites, and company blogs—trying to piece together who actually needs your product and why.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                <strong>Sumble fixes this.</strong> We don&apos;t just scrape and dump. We analyze job posts, map org structures, track technology adoption, and surface buying signals—so you can spend your time selling, not researching.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded by Kaggle&apos;s co-founders, Sumble turns raw data into actionable intelligence. Find the right buyer, at the right company, at the right time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">2.6M+</div>
                <div className="text-xl text-slate-700 font-semibold">Organizations Mapped</div>
                <div className="mt-8 text-6xl font-bold text-green-600 mb-2">50M+</div>
                <div className="text-xl text-slate-700 font-semibold">Job Posts Analyzed</div>
                <div className="mt-8 text-6xl font-bold text-green-600 mb-2">100K+</div>
                <div className="text-xl text-slate-700 font-semibold">Technologies Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section id="case-studies" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Real results from sales teams</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how Sumble transforms every stage of the sales process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <Link href="/use-cases/generate-pipeline" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 block">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Generate Pipeline
              </h3>
              <p className="text-slate-600 mb-4">
                &quot;We found 200 accounts using our competitor&apos;s tech stack in minutes. Used to take weeks manually scraping job posts.&quot;
              </p>
              <div className="text-sm text-slate-500 mb-3">— SDR Team Lead, Series B SaaS</div>
              <div className="text-green-600 font-medium group-hover:underline">See how they did it →</div>
            </Link>

            {/* Use Case 2 */}
            <Link href="/use-cases/close-deals" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 block">
              <div className="text-2xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Close Deals
              </h3>
              <p className="text-slate-600 mb-4">
                &quot;Sumble showed us LexisNexis was hiring 30 sales ops roles. We reached out to the VP with perfect timing—closed a 6-figure deal.&quot;
              </p>
              <div className="text-sm text-slate-500 mb-3">— AE, Enterprise CRM Platform</div>
              <div className="text-green-600 font-medium group-hover:underline">See how they did it →</div>
            </Link>

            {/* Use Case 3 */}
            <Link href="/use-cases/grow-accounts" className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 block">
              <div className="text-2xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Grow Accounts
              </h3>
              <p className="text-slate-600 mb-4">
                &quot;Caught 3 at-risk accounts mentioning our competitor in job posts. Proactively addressed concerns and prevented $450K in churn.&quot;
              </p>
              <div className="text-sm text-slate-500 mb-3">— CSM, Cloud Infrastructure</div>
              <div className="text-green-600 font-medium group-hover:underline">See how they did it →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop wasting time. Start selling smarter.
          </h2>
          <p className="text-xl text-green-100 mb-8">
            See your account&apos;s org structure, tech stack, and intent signals in seconds. No credit card required.
          </p>
          <Link
            href="/onboarding-prototype.html"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            See Your Account Intelligence (It's free!)
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
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
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
