import React from "react";
import { Button } from "../../../../components/ui/button";

// Feature data for mapping
const features = [
  {
    id: 1,
    title: "Quest Engine:",
    description: "Automates Layer‑2 sats incentives",
  },
  {
    id: 2,
    title: "Attention AI:",
    description: "Personalises fan journeys to max value",
  },
  {
    id: 3,
    title: "Commerce Core:",
    description: "Instant, borderless Bitcoin payments",
  },
  {
    id: 4,
    title: "Sats Vault:",
    description: "Custody‑optional treasury & fan wallets",
  },
  {
    id: 5,
    title: "Data Vault:",
    description: "Cryptographically secure analytics",
  },
  {
    id: 6,
    title: "Everything are",
    description: "native — no external dependencies.",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section
      className="w-full py-8 md:py-12 lg:py-24 bg-[#0a0909] relative px-4 sm:px-8 md:px-16 lg:px-[200px]"
    >
      {/* Centered background image container */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1040px] h-[400px] sm:h-[500px] md:h-[680px] bg-cover bg-center rounded-lg"
        style={{ 
          backgroundImage: "url(/w8f2b5ff.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-4 sm:p-6 md:p-8 lg:p-16 xl:p-24">
          <div className="flex flex-col w-full items-start gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col items-start gap-2.5 w-full text-left">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl [font-family:'IBM_Plex_Mono',monospace] font-bold tracking-[0] leading-normal">
                Stop renting attention. Start owning fans — and the Bitcoin they
                mint.
              </h2>
              <p className="text-[#c3c3c3] text-sm sm:text-base md:text-lg [font-family:'IBM_Plex_Sans',sans-serif] font-semibold tracking-[0] leading-normal">
                Tech Under the Hood — Built for Bitcoin Legends
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[50px] w-full">
              {features.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-5 py-[15px]"
                >
                  {/* Checkmark icon */}
                  <div className="w-12 h-12 relative overflow-hidden flex-shrink-0">
                    {/* Outer yellow circle */}
                    <div 
                      className="w-10 h-10 absolute"
                      style={{
                        left: '4px',
                        top: '4px',
                        outline: '3px #F8C200 solid',
                        outlineOffset: '-1.50px',
                        borderRadius: '50%'
                      }}
                    />
                    {/* Checkmark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4" stroke="#F8C200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#c3c3c3] text-sm sm:text-base md:text-lg tracking-[0] leading-normal">
                    <span className="text-white font-semibold">{feature.title}</span>
                    <br />
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[50px] w-full">
              {features.slice(3, 6).map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-5 py-[15px]"
                >
                  {/* Checkmark icon */}
                  <div className="w-12 h-12 relative overflow-hidden flex-shrink-0">
                    {/* Outer yellow circle */}
                    <div 
                      className="w-10 h-10 absolute"
                      style={{
                        left: '4px',
                        top: '4px',
                        outline: '3px #F8C200 solid',
                        outlineOffset: '-1.50px',
                        borderRadius: '50%'
                      }}
                    />
                    {/* Checkmark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4" stroke="#F8C200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#c3c3c3] text-sm sm:text-base md:text-lg tracking-[0] leading-normal">
                    <span className="text-white font-semibold">{feature.title}</span>
                    <br />
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons positioned at the bottom left */}
            <div className="flex flex-col sm:flex-row items-start gap-5 w-full justify-start mt-6 md:mt-8">
              <Button className="h-12 md:h-14 px-4 sm:px-6 md:px-8 py-3 bg-[#f8c100] text-[#0a0909] rounded-lg [font-family:'SF_Mono-Bold',Helvetica] font-bold text-sm md:text-base tracking-[0] leading-5 hover:bg-[#e0ae00] w-full sm:w-auto transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(248,193,0,0.5)] hover:brightness-110 cursor-pointer">
                LAUNCH YOUR BAOS HUB
              </Button>
              <Button
                variant="outline"
                className="h-12 md:h-14 px-4 sm:px-6 md:px-8 py-3 bg-[#f8c10033] text-[#f8c100] border-none rounded-lg [font-family:'SF_Mono-Bold',Helvetica] font-bold text-sm md:text-base tracking-[0] leading-5 hover:bg-[#f8c10055] w-full sm:w-auto transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(248,193,0,0.3)] hover:brightness-110 cursor-pointer"
              >
                SCHEDULE A CALL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};