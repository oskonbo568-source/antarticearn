'use client';

export default function Footer() {
  return (
    <footer className="gradient-header py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AntarcticEarn</h3>
            <p className="text-purple-100 text-sm">Earn money by joining groups and completing tasks.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-purple-100 text-sm space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/tasks" className="hover:text-white">Tasks</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-purple-100 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Help</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="text-purple-100 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-500 pt-8 text-center text-purple-100 text-sm">
          <p>&copy; 2026 AntarcticEarn. All rights reserved. | Payment by Paystack, Opay, and Titan</p>
        </div>
      </div>
    </footer>
  );
}