import React from "react";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1040px] mx-auto gap-8 md:gap-16 lg:gap-[100px] py-8 md:py-12">
      <div className="flex-1">
        <h2 className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          The Hidden
          <br />
          Bitcoin Mine
        </h2>
      </div>

      <div className="flex-1">
        <p className="[font-family:'IBM_Plex_Sans',sans-serif] font-semibold text-[#969696] text-sm sm:text-base md:text-lg leading-[1.4] md:leading-[23.4px]">
          Your community works for free every day — posting, liking, creating
          memes. On Web2, that labour lines someone else&apos;s pockets. With
          BAOS, every interaction mints real Bitcoin directly to your treasury
          and your fans.
        </p>
      </div>
    </section>
  );
};