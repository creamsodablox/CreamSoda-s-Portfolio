/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface CreamSodaLogoProps {
  className?: string;
}

const DISCORD_LOGO_URL =
  "https://media.discordapp.net/attachments/1555571636739117098/1557804684184522812/creamsoda_logo_with_shadow_png.png?ex=6ac9222b&is=6ac7d0ab&hm=1e39f011434dd5d17f7a293a756218a062d63cf840d9def77993bc1663011602&=&format=webp&quality=lossless";

export default function CreamSodaLogo({ className = "h-9 w-auto" }: CreamSodaLogoProps) {
  return (
    <img
      src="/creamsoda-logo.png"
      alt="CreamSoda Logo"
      className={`${className} object-contain select-none pointer-events-none`}
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== DISCORD_LOGO_URL) {
          target.src = DISCORD_LOGO_URL;
        }
      }}
    />
  );
}
