import Link from "next/link";

export default function WhatIsSumble() {
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
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Most B2B data vendors tell you <em>who</em> works somewhere.<br/>
            We tell you <em>why</em> they&apos;ll buy.
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Context, contacts, and timing—everything you need to sell, analyzed and searchable in one place. Here&apos;s what makes Sumble different.
          </p>
        </div>
      </section>

      {/* Content Section 1 - Image on Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Image placeholder 1]</span>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Know your real buyers
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Other data providers just tell you who works at a company. But knowing the difference
                between an engineer and the head of generative AI who uses Langsmith is the difference
                between making the sale and landing in spam.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sumble&apos;s people dataset tells you the exact team a person works on, the precise
                technologies they use, and the kind of projects the company is undertaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Image on Right */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Catch buying intent from job posts
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Companies broadcast their priorities through job posts. But manually tracking them across dozens of platforms is impossible.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Sumble analyzes every job description to surface strategic projects happening right now. See when companies start hiring for cloud migrations, AI initiatives, security overhauls, or projects mentioning your competitors.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Example:</strong> Leidos posts a &quot;Digital Modernization&quot; role requiring cloud migration and RPA expertise. You sell process automation. Sumble flags this as a high-priority opportunity—and shows you who to contact.
              </p>
            </div>

            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Job post analysis visualization]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3 - Image on Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Saved signals dashboard]</span>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Automate your prospecting with saved signals
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Define your ideal buying signals once, and Sumble monitors millions of job posts and org changes for you automatically.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                <strong>For pipeline generation:</strong> Get notified when companies start using your competitor&apos;s tech or hire for job functions that match your ICP.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                <strong>For account growth:</strong> Track when your existing customers launch new initiatives, expand teams, or mention competitors—so you can upsell or prevent churn proactively.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Never manually search for intent signals again. Sumble brings the opportunities to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 4 - Image on Right */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Push to your CRM of choice
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sumble is architected from the ground up to meet you where you are. We can service
                your data in our dashboard via an API, a data share, or even a real-time CRM sync.
              </p>
            </div>

            {/* Image/Visual */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-slate-600 font-medium">[Image placeholder 4]</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            See why leading sales teams choose Sumble
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Search your target accounts right now. See teams, tech stacks, and buying signals instantly—no credit card required.
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
