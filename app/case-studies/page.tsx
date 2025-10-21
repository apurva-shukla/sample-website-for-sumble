import Link from "next/link";

export default function CaseStudies() {
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
            Customer Success Stories
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            [Hero description placeholder - introduce how real companies have transformed
            their sales and marketing operations with Sumble]
          </p>
        </div>
      </section>

      {/* Case Study 1 - Image on Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual - Company Logo or Photo */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl h-96 flex flex-col items-center justify-center p-8 text-white">
              <div className="text-4xl font-bold mb-4">[Company Logo]</div>
              <div className="text-xl font-semibold">[Company Name]</div>
              <div className="text-blue-100 mt-2">[Industry]</div>
            </div>

            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                [Industry or Company Size]
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                [Headline Achievement - e.g., "150% Increase in Pipeline"]
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                [Brief overview of the company and their challenge before using Sumble.]
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                [How they used Sumble to solve their problem and the results they achieved.]
              </p>

              {/* Key Metrics */}
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4">Key Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-green-600">[150%]</div>
                    <div className="text-sm text-slate-600">[Metric 1]</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">[3x]</div>
                    <div className="text-sm text-slate-600">[Metric 2]</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-green-600 pl-4 italic text-slate-700 mb-2">
                &quot;[Customer quote about their experience with Sumble]&quot;
              </blockquote>
              <div className="text-sm text-slate-600 pl-4">
                - [Name], [Title]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 - Image on Right */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                [Industry or Company Size]
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                [Headline Achievement - e.g., "3x Faster Prospecting"]
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                [Company overview and initial challenge.]
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                [Solution and results with Sumble.]
              </p>

              {/* Key Metrics */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4">Key Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-green-600">[67%]</div>
                    <div className="text-sm text-slate-600">[Metric 1]</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">[2x]</div>
                    <div className="text-sm text-slate-600">[Metric 2]</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-green-600 pl-4 italic text-slate-700 mb-2">
                &quot;[Customer quote about their experience]&quot;
              </blockquote>
              <div className="text-sm text-slate-600 pl-4">
                - [Name], [Title]
              </div>
            </div>

            {/* Image/Visual - Company Logo or Photo */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl h-96 flex flex-col items-center justify-center p-8 text-white">
              <div className="text-4xl font-bold mb-4">[Company Logo]</div>
              <div className="text-xl font-semibold">[Company Name]</div>
              <div className="text-purple-100 mt-2">[Industry]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3 - Image on Left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual - Company Logo or Photo */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl h-96 flex flex-col items-center justify-center p-8 text-white">
              <div className="text-4xl font-bold mb-4">[Company Logo]</div>
              <div className="text-xl font-semibold">[Company Name]</div>
              <div className="text-green-100 mt-2">[Industry]</div>
            </div>

            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                [Industry or Company Size]
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                [Headline Achievement - e.g., "40% Higher Win Rate"]
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                [Company overview and challenge.]
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                [Solution and results.]
              </p>

              {/* Key Metrics */}
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4">Key Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-green-600">[40%]</div>
                    <div className="text-sm text-slate-600">[Metric 1]</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">[25%]</div>
                    <div className="text-sm text-slate-600">[Metric 2]</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-green-600 pl-4 italic text-slate-700 mb-2">
                &quot;[Customer quote about their experience]&quot;
              </blockquote>
              <div className="text-sm text-slate-600 pl-4">
                - [Name], [Title]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 4 - Image on Right */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                [Industry or Company Size]
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                [Headline Achievement]
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                [Company overview and challenge.]
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                [Solution and results.]
              </p>

              {/* Key Metrics */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4">Key Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-green-600">[X%]</div>
                    <div className="text-sm text-slate-600">[Metric 1]</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">[Xx]</div>
                    <div className="text-sm text-slate-600">[Metric 2]</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-green-600 pl-4 italic text-slate-700 mb-2">
                &quot;[Customer quote about their experience]&quot;
              </blockquote>
              <div className="text-sm text-slate-600 pl-4">
                - [Name], [Title]
              </div>
            </div>

            {/* Image/Visual - Company Logo or Photo */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl h-96 flex flex-col items-center justify-center p-8 text-white">
              <div className="text-4xl font-bold mb-4">[Company Logo]</div>
              <div className="text-xl font-semibold">[Company Name]</div>
              <div className="text-orange-100 mt-2">[Industry]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Results Across All Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">[X%]</div>
              <div className="text-slate-600">[Average improvement metric 1]</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">[Xx]</div>
              <div className="text-slate-600">[Average improvement metric 2]</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">[X%]</div>
              <div className="text-slate-600">[Average improvement metric 3]</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">[X,XXX]</div>
              <div className="text-slate-600">[Total customers or similar]</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            [CTA description placeholder - encourage them to join other successful companies]
          </p>
          <Link
            href="/onboarding-prototype.html"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
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
