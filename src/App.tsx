/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CreamSodaLogo from './components/CreamSodaLogo.tsx';
import YouTubeChannelsBar from './components/YouTubeChannelsBar.tsx';

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-between select-none cursor-default">
      {/* Top Floating Pill Navigation Bar with Opacity matching screenshot */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl pointer-events-auto">
        <nav
          aria-label="Main Navigation"
          className="w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0a110d]/75 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5)] transition-all duration-200"
        >
          {/* Logo on Left */}
          <a
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80] rounded-full"
            aria-label="CreamSoda Home"
          >
            <CreamSodaLogo className="h-8 sm:h-9 w-auto drop-shadow-md" />
          </a>

          {/* Navigation Links in Center */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 text-sm font-heading font-medium text-[#d1d5db]">
            <a
              href="#home"
              className="text-white hover:text-[#4ade80] transition-colors duration-150"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors duration-150"
            >
              Portfolio
            </a>
            <a
              href="#reviews"
              className="hover:text-white transition-colors duration-150"
            >
              Reviews
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors duration-150"
            >
              About
            </a>
          </div>

          {/* Placeholder Contact Button on Right */}
          <button
            type="button"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#4ade80] hover:to-[#22c55e] active:scale-95 text-[#041e11] font-heading font-bold text-xs sm:text-sm tracking-[-0.01em] shadow-[0_4px_16px_rgba(34,197,94,0.35)] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
          >
            Get in Contact
          </button>
        </nav>
      </header>

      {/* Smoothly animated atmospheric mesh background (completely isolated from mouse interaction) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none touch-none overflow-hidden bg-[#38584b]"
      >
        <div className="relative w-full h-full animate-canvas blur-[95px] opacity-95 pointer-events-none">
          {/* Top-left bright spring green */}
          <div className="absolute -top-[14%] -left-[12%] w-[66%] h-[66%] rounded-full bg-[radial-gradient(circle,#4ade80_0%,transparent_75%)] animate-blob-1 pointer-events-none" />

          {/* Upper-center luminous sunlit lime glow */}
          <div className="absolute top-[0%] left-[22%] w-[60%] h-[62%] rounded-full bg-[radial-gradient(circle,#bef264_0%,transparent_72%)] animate-blob-2 pointer-events-none" />

          {/* Top-right soft ocean aquamarine blue (subtle, less electric blue but still blue) */}
          <div className="absolute -top-[16%] right-[-10%] w-[64%] h-[66%] rounded-full bg-[radial-gradient(circle,#2696a4_0%,transparent_72%)] animate-blob-3 pointer-events-none" />

          {/* Mid-left soft luminous mint */}
          <div className="absolute top-[32%] -left-[14%] w-[62%] h-[58%] rounded-full bg-[radial-gradient(circle,#6ee7b7_0%,transparent_75%)] animate-blob-4 pointer-events-none" />

          {/* Center vibrant seafoam teal */}
          <div className="absolute top-[30%] left-[26%] w-[58%] h-[58%] rounded-full bg-[radial-gradient(circle,#2dd4bf_0%,transparent_75%)] animate-blob-5 pointer-events-none" />

          {/* Mid-right radiant pear lime */}
          <div className="absolute top-[34%] right-[-6%] w-[62%] h-[62%] rounded-full bg-[radial-gradient(circle,#a3e635_0%,transparent_72%)] animate-blob-6 pointer-events-none" />

          {/* Bottom-left soft warm sage */}
          <div className="absolute -bottom-[16%] -left-[10%] w-[66%] h-[62%] rounded-full bg-[radial-gradient(circle,#588157_0%,transparent_75%)] animate-blob-7 pointer-events-none" />

          {/* Bottom-center vivid fresh emerald */}
          <div className="absolute -bottom-[14%] left-[24%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,#22c55e_0%,transparent_75%)] animate-blob-8 pointer-events-none" />

          {/* Bottom-right medium eucalyptus green */}
          <div className="absolute -bottom-[18%] -right-[12%] w-[64%] h-[62%] rounded-full bg-[radial-gradient(circle,#4f7762_0%,transparent_75%)] animate-blob-9 pointer-events-none" />
        </div>

        {/* Translucent black overlay to fade and dim background */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-24 pb-6">
        <h1 className="font-heading font-bold tracking-[-0.02em] leading-[1.16] text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          <span className="block">Designs that make you</span>
          <span className="block mt-1 sm:mt-1.5">stand out.</span>
        </h1>
      </div>

      {/* Bottom YouTube Creator Channels Bar matching screenshot */}
      <YouTubeChannelsBar />
    </main>
  );
}
