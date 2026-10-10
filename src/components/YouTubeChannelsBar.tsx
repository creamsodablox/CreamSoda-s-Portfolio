/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CREATORS } from '../data/creators.ts';

export default function YouTubeChannelsBar() {
  // Duplicate array for a seamless infinite loop
  const duplicated = [...CREATORS, ...CREATORS];

  return (
    <aside
      aria-label="Client YouTube Channels"
      className="relative z-20 w-full mt-auto"
    >
      {/* Top Dividing Bar Line with subtle gradient glow */}
      <div className="relative w-full border-t border-white/10 bg-[#060c08]/85 backdrop-blur-2xl py-4.5 sm:py-5 shadow-[0_-10px_30px_rgba(0,0,0,0.45)]">
        {/* Subtle highlight sheen along the top edge divider */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        {/* Left edge fade feather scrim */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#060c08] via-[#060c08]/80 to-transparent pointer-events-none z-10" />

        {/* Right edge fade feather scrim */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#060c08] via-[#060c08]/80 to-transparent pointer-events-none z-10" />

        {/* Marquee channel track with smooth edge fade feather mask */}
        <div className="relative w-full overflow-hidden mask-fade-x">
          <div className="animate-marquee flex items-center gap-4 sm:gap-4.5 py-1">
            {duplicated.map((creator, idx) => (
              <a
                key={`${creator.id}-${idx}`}
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Ensure immediate reliable navigation during CSS transform
                  if (!e.defaultPrevented) {
                    window.open(creator.url, '_blank', 'noopener,noreferrer');
                    e.preventDefault();
                  }
                }}
                className="relative flex items-center gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.10] hover:scale-[1.05] hover:-translate-y-0.5 active:scale-95 backdrop-blur-md border border-white/12 hover:border-[#4ade80] shadow-sm transition-all duration-200 ease-out shrink-0 cursor-pointer select-none group z-0 hover:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
                title={`Visit ${creator.name} on YouTube`}
              >
                {/* Real Creator Profile Avatar (Embedded Data URI) */}
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-full object-cover border border-white/15 shrink-0 shadow-inner group-hover:border-[#4ade80] group-hover:scale-105 transition-all duration-200 bg-black/40"
                />

                {/* Channel Name & Sub Count */}
                <div className="flex flex-col text-left pr-1.5 sm:pr-2">
                  <span className="font-heading font-bold text-white text-[13.5px] sm:text-[14px] leading-tight tracking-tight group-hover:text-[#4ade80] transition-colors duration-150">
                    {creator.name}
                  </span>
                  <span className="font-heading font-semibold text-[#4ade80] group-hover:text-[#86efac] text-[11.5px] sm:text-[12px] leading-tight mt-0.5 tracking-tight transition-colors duration-150">
                    {creator.subs}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
