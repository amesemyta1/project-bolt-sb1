import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HighlightsSection = (): JSX.Element => {
  // Data for the flight path steps
  const flightPathSteps = [
    {
      number: "01",
      title: "Drop: Day 01",
      description: "Airdrop your Fan Pass & first quests",
    },
    {
      number: "02",
      title: "Gamify: Day 02-07",
      description: "Autopilot reward loops drive daily action",
    },
    {
      number: "03",
      title: "Own: From day 08",
      description: "Fans hold the keys, you hold the Bitcoin",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start justify-center gap-5">
      <div className="flex flex-col items-start gap-8 md:gap-10 w-full">
        <h2 className="w-full [font-family:'SF_Mono-Heavy',Helvetica] font-normal text-white text-2xl md:text-3xl lg:text-4xl">
          3‑Step Flight Path
        </h2>
      </div>

      <Card className="w-full bg-transparent border-none">
        <CardContent className="p-0">
          {flightPathSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-5 py-[15px] w-full border-b border-[#ffffff1a]"
            >
              <div className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-2xl md:text-3xl lg:text-[40px] whitespace-nowrap flex-shrink-0">
                {step.number}
              </div>

              <div className="flex flex-col items-start justify-center gap-[5px] flex-1">
                <div className="w-full [font-family:'IBM_Plex_Mono',monospace] font-bold text-[#f8c100] text-base md:text-lg">
                  {step.title}
                </div>
                <div className="w-full [font-family:'IBM_Plex_Sans',sans-serif] font-semibold text-[#969696] text-base md:text-lg leading-[1.4] md:leading-[23.4px]">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="h-12 md:h-14 px-4 md:px-6 py-3 bg-[#f8c100] rounded-lg hover:bg-[#f8c100]/90 w-full sm:w-auto transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(248,193,0,0.5)] hover:brightness-110 cursor-pointer">
        <span className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-[#0a0909] text-sm md:text-base leading-5">
          START IGNITION
        </span>
      </Button>
    </div>
  );
};