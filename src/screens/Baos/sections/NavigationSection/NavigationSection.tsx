import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

interface FeatureItem {
  icon: string;
  title: string;
}

export const NavigationSection = (): JSX.Element => {
  // Data for feature items
  const featureItems: FeatureItem[] = [
    {
      icon: "/group.png",
      title: "Instant Layer‑2 payouts\nper fan action",
    },
    {
      icon: "/group-1.png",
      title: "On‑chain proof of engagement\n(no bots, no fraud)",
    },
    {
      icon: "/group-2.png",
      title: "Built‑in game loops\nthat boost retention",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row w-full max-w-[1040px] items-center gap-[100px] mx-auto py-12">
      <div className="w-full md:w-[470px] [font-family:'SF_Mono-Heavy',Helvetica] font-normal text-white text-4xl">
        Stop leaking value
        <br />
        to middle‑men.
        <br />
        Start stacking Bitcoin you own.
      </div>

      <Card className="flex flex-col items-start w-full bg-transparent border-none">
        {featureItems.map((item, index) => (
          <React.Fragment key={index}>
            <CardContent className="flex items-center gap-5 px-0 py-[15px] w-full">
              <div className="relative w-12 h-12">
                <img
                  className="absolute w-[43px] h-[43px] top-0.5 left-0.5"
                  alt="Feature icon"
                  src={item.icon}
                />
              </div>

              <div className="flex flex-col items-start gap-[7.5px] px-0 py-[2.25px] flex-1">
                <div className="self-stretch mt-[-0.75px] [font-family:'SF_Mono-Bold',Helvetica] font-bold text-[#f8c100] text-lg whitespace-pre-line">
                  {item.title}
                </div>
              </div>
            </CardContent>
            {index < featureItems.length - 1 && (
              <Separator className="w-full bg-[#ffffff1a]" />
            )}
          </React.Fragment>
        ))}
      </Card>
    </section>
  );
};
