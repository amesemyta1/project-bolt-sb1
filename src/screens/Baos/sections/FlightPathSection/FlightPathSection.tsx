import React from "react";

export const FlightPathSection = (): JSX.Element => {
  // Data for the feature cards
  const featureCards = [
    {
      id: 1,
      text: "Stack real Bitcoin every time fans engage",
    },
    {
      id: 2,
      text: "Triple retention with quest‑based loops",
    },
    {
      id: 3,
      text: "Control first‑party data with zero acquisition tax",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2.5 w-full">
      {featureCards.map((card) => (
        <div
          key={card.id}
          className="w-full h-full p-[30px] flex flex-col justify-start items-start gap-[15px]"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            outline: '1px rgba(255, 255, 255, 0.10) solid',
            outlineOffset: '-1px',
            backdropFilter: 'blur(37.50px)',
            borderRadius: '0px'
          }}
        >
          {/* Icon with circles */}
          <div className="w-12 h-12 relative overflow-hidden">
            {/* Inner white circle */}
            <div 
              className="w-[14px] h-[10px] absolute"
              style={{
                left: '17px',
                top: '19px',
                outline: '3px white solid',
                outlineOffset: '-1.50px',
                borderRadius: '50%'
              }}
            />
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
          
          {/* Text */}
          <div 
            className="self-stretch"
            style={{
              color: '#F8C200',
              fontSize: '18px',
              fontFamily: 'SF Mono',
              fontWeight: '700',
              wordWrap: 'break-word',
              lineHeight: '1.2'
            }}
          >
            {card.text}
          </div>
        </div>
      ))}
    </div>
  );
};