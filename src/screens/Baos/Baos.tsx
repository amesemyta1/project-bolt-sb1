import React from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FlightPathSection } from "./sections/FlightPathSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { IntroductionSection } from "./sections/IntroductionSection/IntroductionSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";

export const Baos = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { icon: "/solar-document-broken.svg", text: "Manifesto", href: "#manifesto" },
    { icon: "/group-8.png", text: "How It Works", href: "#how-it-works" },
    { icon: "/group-9.png", text: "BAOS", href: "#baos" },
    { icon: "/solar-heart-angle-broken.svg", text: "Stories", href: "#stories" },
    { icon: "/group-10.png", text: "Contact", href: "#contact" },
  ];

  // Diagonal stripe pattern data for background elements
  const diagonalStripePattern = Array(4)
    .fill(null)
    .map((_, index) => ({
      left: [69, 139, 209, 280][index],
    }));

  // Handle navigation click
  const handleNavClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle launch hub click
  const handleLaunchHubClick = () => {
    // You can add your launch hub logic here
    console.log('Launch Hub clicked');
    // For now, just scroll to contact section
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0a0909] flex flex-row justify-center w-full">
      <div className="bg-[#0a0909] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section with Background Image */}
        <section className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover"
            alt="Element"
            src="/2150912081-1.png"
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Gradient overlay for smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0909] to-transparent"></div>

          {/* Logo */}
          <div className="absolute w-[49px] h-12 top-4 left-4 md:top-[23px] md:left-[60px] z-10">
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

          {/* Navigation Menu - Centered */}
          <nav className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center justify-center gap-8 relative">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="group inline-flex items-center gap-2.5 relative flex-[0_0_auto] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-110"
                >
                  <div className="relative w-6 h-6 transition-all duration-300 group-hover:scale-110">
                    <img
                      className={`${
                        item.icon.includes("group")
                          ? "absolute w-5 h-[22px] top-px left-0.5"
                          : "relative w-6 h-6"
                      } transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(248,193,0,0.6)] filter`}
                      alt={item.text}
                      src={item.icon}
                    />
                  </div>

                  <div className="relative w-fit [font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-300 group-hover:text-[#f8c100] group-hover:drop-shadow-[0_0_8px_rgba(248,193,0,0.4)]">
                    {item.text}
                  </div>
                </button>
              ))}

              <Button 
                onClick={handleLaunchHubClick}
                className="bg-[#f8c100] hover:bg-[#e0af00] rounded-lg px-[25px] py-2.5 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(248,193,0,0.5)] hover:brightness-110 cursor-pointer ml-4"
              >
                <span className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-[#0d0d0d] text-base tracking-[0] leading-7 whitespace-nowrap">
                  LAUNCH HUB
                </span>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden absolute top-4 right-4 z-10">
            <Button 
              onClick={handleLaunchHubClick}
              className="bg-[#f8c100] hover:bg-[#e0af00] rounded-lg px-4 py-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(248,193,0,0.5)] cursor-pointer"
            >
              <span className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-[#0d0d0d] text-sm tracking-[0] leading-5">
                LAUNCH HUB
              </span>
            </Button>
          </div>

          {/* Main Hero Content - Left aligned with proper spacing */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="px-4 md:px-8 lg:px-16 xl:px-24 ml-0 lg:ml-[60px] max-w-none">
              <div className="flex flex-col items-start justify-center gap-6 lg:gap-8">
                <h1 className="text-white [font-family:'IBM_Plex_Mono',monospace] font-bold text-[28px] sm:text-[32px] md:text-[44px] lg:text-[56px] xl:text-[72px] leading-[1.1] tracking-tight">
                  Turn Free Digital Labour
                  <br />
                  into Real Bitcoin
                </h1>

                <p className="[font-family:'IBM_Plex_Sans',sans-serif] font-semibold text-[#c3c3c3] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.4] md:leading-[1.5] lg:leading-[1.6] max-w-[700px]">
                  You've gathered the crowd; now turn every tap, swipe, and share
                  into spendable sats. BAOS — The Bitcoin Attention Operating System
                  on Bitcoin Layer‑2 — lets project owners mint Bitcoin from the energy
                  they already command.
                </p>

                <Button 
                  onClick={handleLaunchHubClick}
                  className="h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-3 bg-[#f8c100] hover:bg-[#e0af00] rounded-lg mt-4 md:mt-6 lg:mt-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(248,193,0,0.5)] cursor-pointer"
                >
                  <span className="[font-family:'IBM_Plex_Mono',monospace] font-bold text-[#0a0909] text-xs sm:text-sm md:text-base lg:text-lg leading-5">
                    LAUNCH YOUR BAOS HUB
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Features Section */}
        <section 
          id="manifesto" 
          className="w-full py-8 md:py-12 lg:py-24 bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
        >
          <div 
            className="flex flex-col lg:flex-row w-full max-w-[1440px] items-start gap-8 md:gap-16 lg:gap-[120px] mx-auto" 
            style={{ alignItems: 'center' }}
          >
            <div 
              className="w-full lg:w-[480px] [font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.2]" 
              style={{ width: '100%', maxWidth: '900px' }}
            >
              Stop leaking value
              <br />
              to middle‑men.
              <br />
              Start stacking
              <br />
              Bitcoin you own.
            </div>

            <div className="flex flex-col items-start w-full lg:ml-[40px]">
              <div className="flex items-center gap-5 py-[15px] w-full border-b border-[#ffffff1a]">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <img
                    className="absolute w-[43px] h-[43px] top-0.5 left-0.5"
                    alt="Feature icon"
                    src="/group.png"
                  />
                </div>
                <div className="flex flex-col items-start gap-[7.5px] px-0 py-[2.25px] flex-1">
                  <div className="self-stretch mt-[-0.75px] [font-family:'SF_Mono-Bold',Helvetica] font-bold text-[#f8c100] text-sm sm:text-base md:text-lg">
                    Instant Layer‑2 payouts per fan action
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 py-[15px] w-full border-b border-[#ffffff1a]">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <img
                    className="absolute w-[43px] h-[43px] top-0.5 left-0.5"
                    alt="Feature icon"
                    src="/group-1.png"
                  />
                </div>
                <div className="flex flex-col items-start gap-[7.5px] px-0 py-[2.25px] flex-1">
                  <div className="self-stretch mt-[-0.75px] [font-family:'SF_Mono-Bold',Helvetica] font-bold text-[#f8c100] text-sm sm:text-base md:text-lg">
                    On‑chain proof of engagement (no bots, no fraud)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 py-[15px] w-full">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <img
                    className="absolute w-[43px] h-[43px] top-0.5 left-0.5"
                    alt="Feature icon"
                    src="/group-2.png"
                  />
                </div>
                <div className="flex flex-col items-start gap-[7.5px] px-0 py-[2.25px] flex-1">
                  <div className="self-stretch mt-[-0.75px] [font-family:'SF_Mono-Bold',Helvetica] font-bold text-[#f8c100] text-sm sm:text-base md:text-lg">
                    Built‑in game loops that boost retention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Background Pattern */}
        <section 
          id="how-it-works" 
          className="relative w-full py-8 md:py-12 bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
          style={{
            minHeight: '300px',
            alignContent: 'center'
          }}
        >
          {/* Background Pattern - Hidden on mobile for performance */}
          <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden opacity-10">
            {/* Single row of stripes covering full width */}
            <div className="absolute inset-0 w-full h-full">
              {Array(20)
                .fill(null)
                .map((_, stripeIndex) => (
                  <div
                    key={stripeIndex}
                    className="absolute w-[38px] h-[1200px] bg-[#f8c100] rotate-[13.92deg]"
                    style={{ 
                      left: `${-200 + stripeIndex * 100}px`,
                      top: '-200px'
                    }}
                  />
                ))}
            </div>
          </div>

          <div 
            className="relative z-10 max-w-[1440px] mx-auto"
            style={{ alignItems: 'center' }}
          >
            <FeaturesSection />
          </div>
        </section>

        {/* Hero Cards Section - NO BACKGROUND PATTERN */}
        <section 
          id="baos" 
          className="w-full py-8 md:py-12 bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
          style={{
            paddingBottom: '10px'
          }}
        >
          <div 
            className="max-w-[1440px] mx-auto"
            style={{
              marginTop: '-4rem'
            }}
          >
            <HeroSection />
          </div>
        </section>

        <div 
          className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#969696] text-sm sm:text-base md:text-lg tracking-[0] leading-[23.4px] bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
        >
          <div className="max-w-[1440px] mx-auto text-left">
            No external platforms. No rent seekers. Just you, your fans, and Bitcoin.
          </div>
        </div>

        {/* Two-column layout for Introduction and Highlights sections */}
        <section 
          id="stories" 
          className="w-full py-8 md:py-12 lg:py-24 bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
        >
          <div 
            className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-[120px] max-w-[1440px] mx-auto"
            style={{ alignItems: 'center' }}
          >
            {/* Left Column - BAOS Feature Highlights */}
            <div className="flex-1 order-2 lg:order-1">
              <IntroductionSection />
            </div>

            {/* Right Column - Brain Image */}
            <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
              <img
                className="w-full max-w-[470px] h-auto object-cover"
                alt="Brain visualization"
                src="/23086-1.png"
              />
            </div>
          </div>
        </section>

        {/* Two-column layout for Flight Path section */}
        <section 
          className="w-full py-8 md:py-12 lg:py-24 bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
        >
          <div 
            className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-[120px] max-w-[1440px] mx-auto"
            style={{ alignItems: 'center' }}
          >
            {/* Left Column - Abstract Image */}
            <div className="flex-1 flex items-center justify-center order-1">
              <img
                className="w-full max-w-[470px] h-auto object-cover"
                alt="Abstract visualization"
                src="/23086-2.png"
              />
            </div>

            {/* Right Column - 3-Step Flight Path */}
            <div className="flex-1 order-2">
              <HighlightsSection />
            </div>
          </div>
        </section>

        {/* Flight Path Section with Background Pattern */}
        <section 
          className="relative w-full py-8 md:py-12 lg:py-24 bg-[#0a0909] px-4 sm:px-8 md:px-16 lg:px-[200px]"
          style={{ 
            paddingBottom: '0',
            marginBottom: '-50px'
          }}
        >
          {/* Background Pattern - Hidden on mobile for performance */}
          <div 
            className="hidden md:block absolute inset-0 w-full h-full overflow-hidden opacity-10"
            style={{ height: '400px' }}
          >
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '-200px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '-100px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '0px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '100px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '200px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '300px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '400px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '500px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '600px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '700px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '800px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '900px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1000px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1100px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1200px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1300px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1400px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1500px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1600px', top: '-300px' }}></div>
              <div className="absolute w-[38px] h-[1500px] bg-[#f8c100] rotate-[13.92deg]" style={{ left: '1700px', top: '-300px' }}></div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto">
            <div 
              className="w-full [font-family:'IBM_Plex_Mono',monospace] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-[normal] mb-8 md:mb-12"
              style={{
                marginBottom: '0px',
                paddingTop: '35px',
                textAlign: 'left'
              }}
            >
              Choose Your Outcome:
              <br />
              Play the Game → Print the Cash
            </div>

            {/* With BAOS you'll section */}
            <div className="mb-8 md:mb-12">
              <div 
                className="w-full max-w-[402px] mb-6 md:mb-[30px] [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#969696] text-sm sm:text-base md:text-lg tracking-[0] leading-[23.4px]"
                style={{
                  marginLeft: '0px',
                  marginBottom: '10px',
                  marginTop: '93px',
                  textAlign: 'left'
                }}
              >
                With BAOS you'll:
              </div>
              <FlightPathSection />
            </div>

            {/* Ignore it and you'll section */}
            <div>
              <div 
                className="w-full max-w-[402px] mb-6 md:mb-8 [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#969696] text-sm sm:text-base md:text-lg tracking-[0] leading-[23.4px]"
                style={{
                  marginLeft: '0px',
                  marginBottom: '10px',
                  textAlign: 'left'
                }}
              >
                Ignore it and you'll:
              </div>
              
              {/* Negative outcome cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2.5 w-full">
                <div
                  className="w-full h-full p-[20px] sm:p-[30px] flex flex-col justify-start items-start gap-[15px]"
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
                    {/* X mark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#F8C200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div 
                    className="self-stretch"
                    style={{
                      color: '#F8C200',
                      fontSize: '16px',
                      fontFamily: 'SF Mono',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                      lineHeight: '1.2'
                    }}
                  >
                    Burn budget every 30 days
                  </div>
                </div>

                <div
                  className="w-full h-full p-[20px] sm:p-[30px] flex flex-col justify-start items-start gap-[15px]"
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
                    {/* X mark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#F8C200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div 
                    className="self-stretch"
                    style={{
                      color: '#F8C200',
                      fontSize: '16px',
                      fontFamily: 'SF Mono',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                      lineHeight: '1.2'
                    }}
                  >
                    Watch LTV flatten
                  </div>
                </div>

                <div
                  className="w-full h-full p-[20px] sm:p-[30px] flex flex-col justify-start items-start gap-[15px]"
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
                    {/* X mark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#F8C200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div 
                    className="self-stretch"
                    style={{
                      color: '#F8C200',
                      fontSize: '16px',
                      fontFamily: 'SF Mono',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                      lineHeight: '1.2'
                    }}
                  >
                    Hand your community to ad brokers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToActionSection />
        
        {/* Footer Section */}
        <section id="contact">
          <FooterSection />
        </section>
      </div>
    </div>
  );
};