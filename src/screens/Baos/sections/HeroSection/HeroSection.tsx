import { PlusSquareIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for the action cards
  const actionCards = [
    {
      id: 1,
      icon: "/group-3.png",
      text: "Claim daily sats drip",
    },
    {
      id: 2,
      icon: "/group-4.png",
      text: "Complete today's lore quiz",
    },
    {
      id: 3,
      icon: "/group-5.png",
      text: "Vote on next feature drop",
      iconClasses: "w-[39px] h-[43px] top-0 left-1",
    },
    {
      id: 4,
      text: "Invite a friend with your referral code",
      isSpecialIcon: true,
    },
    {
      id: 5,
      icon: "/group-6.png",
      text: "Unlock a hidden Easter‑egg badge",
    },
    {
      id: 6,
      icon: "/group-7.png",
      text: "Submit product feedback",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-2.5 w-full">
      {actionCards.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col items-start bg-[#ffffff0d] border border-solid border-[#ffffff1a] backdrop-blur-[37.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37.5px)_brightness(100%)]"
          style={{ borderRadius: '0px' }}
        >
          <CardContent className="flex flex-col items-start gap-[15px] p-4 sm:p-6 md:p-[30px] w-full">
            {card.isSpecialIcon ? (
              <PlusSquareIcon className="w-12 h-12 text-white" />
            ) : (
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  className={`absolute ${card.iconClasses || "w-[43px] h-[43px] top-0.5 left-0.5"}`}
                  alt="Icon"
                  src={card.icon}
                />
              </div>
            )}
            <div className="relative self-stretch [font-family:'SF_Mono-Bold',Helvetica] font-bold text-[#f8c100] text-sm sm:text-base md:text-lg tracking-[0] leading-[normal]">
              {card.text}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};