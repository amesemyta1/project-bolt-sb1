import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Feature data for mapping
const features = [
  {
    id: 1,
    icon: "/group-11.png",
    title: "24h Hub Spin‑Up",
    description: "Deploy a sovereign fan economy overnight",
  },
  {
    id: 2,
    icon: "/group-12.png",
    title: "Quest Engine",
    description: "Pre‑built reward loops keep momentum alive",
  },
  {
    id: 3,
    icon: "/group-13.png",
    title: "Module Library",
    description: "Plug‑and‑play attention mechanics\n(all native to BAOS)",
  },
  {
    id: 4,
    icon: "/group-14.png",
    title: "Zero‑Party Data",
    description: "Insights flow straight to you, never sold",
  },
  {
    id: 5,
    icon: "/group-15.png",
    title: "Bitcoin Checkout",
    description: "Sell anything, settle instantly in sats",
  },
];

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[470px] items-start justify-center gap-5">
      <div className="flex flex-col items-start gap-10 w-full">
        <h2 className="w-full mt-[-0.75px] [font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-[normal]">
          BAOS Feature Highlights
        </h2>
      </div>

      <Card className="w-full bg-transparent border-none">
        <CardContent className="p-0">
          {features.map((feature, index) => (
            <React.Fragment key={feature.id}>
              <div className="flex items-center gap-5 py-[15px] w-full">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <img
                    className="absolute w-auto h-auto max-w-[43px] max-h-[43px]"
                    style={{
                      top: feature.id === 1 || feature.id === 4 ? "2px" : "4px",
                      left: feature.id === 2 ? "2px" : "4px",
                    }}
                    alt={`${feature.title} icon`}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col items-start justify-center gap-[5px] flex-1">
                  <h3 className="w-full mt-[-1.00px] [font-family:'IBM_Plex_Mono',monospace] font-bold text-[#f8c100] text-base sm:text-lg tracking-[0] leading-[normal]">
                    {feature.title}
                  </h3>

                  <p className="w-full [font-family:'IBM_Plex_Sans',sans-serif] font-semibold text-[#969696] text-sm sm:text-base md:text-lg tracking-[0] leading-[23.4px] whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </div>
              {index < features.length - 1 && (
                <Separator className="bg-[#ffffff1a]" />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};