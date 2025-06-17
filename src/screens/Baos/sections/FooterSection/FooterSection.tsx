import React from "react";

// Define footer links data for mapping
const footerLinks = [
  { text: "Terms and Conditions", href: "#" },
  { text: "go@brnz.ai", href: "mailto:go@brnz.ai" },
  { text: "Privacy Policy", href: "#" },
];

// Define social media links data for mapping
const socialLinks = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
    href: "#",
    alt: "Instagram",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    href: "#",
    alt: "Twitter",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    href: "#",
    alt: "LinkedIn",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="12" r="1" fill="currentColor"/>
        <circle cx="15" cy="12" r="1" fill="currentColor"/>
        <path d="M7.5 7.5c-.83-.83-2.17-.83-3 0s-.83 2.17 0 3l1.06 1.06a2.5 2.5 0 0 0 3.54 0L12 8.66l2.9 2.9a2.5 2.5 0 0 0 3.54 0L19.5 10.5c.83-.83.83-2.17 0-3s-2.17-.83-3 0L15 9l-3-3z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    href: "#",
    alt: "Discord",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center gap-6 md:gap-8 py-8 md:py-12 px-4 bg-[#0a0909]">
      {/* Logo */}
      <div className="relative w-[48.61px] h-12">
        <div className="relative w-12 h-[51px] -top-px -left-px">
          <div className="absolute w-12 h-[51px] top-0 left-0">
            <div className="absolute top-[5px] left-1.5 [-webkit-text-stroke:0.08px_#f8c20066] [font-family:'Audiowide',Helvetica] font-normal text-white text-[22px] text-center tracking-[0] leading-5">
              BA
              <br />
              OS
            </div>

            <img
              className="absolute w-[21px] h-[23px] top-0 left-0"
              alt="Vector"
              src="/vector-1.svg"
            />

            <img
              className="absolute w-[22px] h-[23px] top-7 left-0"
              alt="Vector"
              src="/vector-3.svg"
            />

            <img
              className="absolute w-[22px] h-[18px] top-0 left-[26px]"
              alt="Vector"
              src="/vector-2.svg"
            />

            <img
              className="absolute w-[21px] h-3.5 top-[37px] left-[27px]"
              alt="Vector"
              src="/vector-4.svg"
            />
          </div>

          <div className="absolute w-[3px] h-2.5 top-[23px] left-[45px] bg-[#f8c20066] rounded-[115.94px] border-[0.12px] border-solid" />
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 relative w-full">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative w-fit [font-family:'IBM_Plex_Mono',monospace] font-bold text-[#f8c100] text-sm sm:text-base tracking-[0] leading-[normal] text-center hover:text-[#f8c100]/80 transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="relative w-fit [font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-sm sm:text-base text-center tracking-[0] leading-5 px-4">
        © 2024 BitcoinAttention. All rights reserved.
      </div>

      {/* Social Media Icons */}
      <div className="inline-flex items-center gap-4 md:gap-6 relative">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.href} 
            aria-label={social.alt}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-[#444444] transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};