import { LoanForm } from "./components/LoanForm";
import { ShieldCheck } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-lg p-1.5">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">BusinessLoans.com</span>
          </div>
          <div className="hidden md:flex items-center text-sm text-gray-500 gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">How it works</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="tel:1-800-555-0199" className="font-semibold text-blue-600 hover:text-blue-800">1-800-555-0199</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Check Your Eligibility in Minutes
          </h1>
          <p className="text-lg text-gray-600">
            See your funding options with no impact to your credit score until you accept an offer. 
            Safe, secure, and fast.
          </p>
        </div>
        
        <LoanForm />

        {/* Trust Badges */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple placeholders for trust logos */}
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
              <span>TRUSTPILOT</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-4 h-4 bg-green-500 rounded-sm" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
              <span>BBB</span>
              <span className="text-xs border border-gray-400 rounded px-1">A+</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
              <span>McAfee SECURE</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} BusinessLoans.com Clone. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
