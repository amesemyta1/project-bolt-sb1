import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1400px] items-start gap-10 pl-[200px] py-16">
      <div className="flex flex-col items-start justify-center gap-[12.5px] w-full">
        <h1 className="w-full [font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-[40px] md:text-[50px] lg:text-[56px] leading-tight">
          Turn Free Digital Labour into Real Bitcoin
        </h1>

        <p className="w-full [font-family:'IBM_Plex_Sans',sans-serif] font-semibold text-[#c3c3c3] text-2xl leading-[35px]">
          You&apos;ve gathered the crowd; now turn every tap, swipe, and share
          <br />
          into spendable sats. BAOS — The Bitcoin Attention Operating System
          <br />
          on Bitcoin Layer‑2 — lets project owners mint Bitcoin from the energy
          <br />
          they already command.
        </p>
      </div>

      <Button className="h-14 px-6 py-3 bg-[#f8c100] hover:bg-[#e0af00] rounded-lg">
        <span className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-[#0a0909] text-base leading-5">
          LAUNCH YOUR BAOS HUB
        </span>
      </Button>
    </section>
  );
};
