// src/app/onboarding/page.tsx
"use client";

import { useState, useRef, UIEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TOTAL_SLIDES = 3;

export default function OnboardingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sync state when user swipes manually
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const slideWidth = carouselRef.current.clientWidth;
    const newIndex = Math.round(e.currentTarget.scrollLeft / slideWidth);
    if (newIndex !== currentSlide) {
      setCurrentSlide(newIndex);
    }
  };

  // Programmatic scrolling (Next / Dots)
  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const slideWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  const handleNext = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  // --- UPDATED THIS FUNCTION ---
  const handleFinish = () => {
    // 1. Save progress so the Smart Gate knows they've seen this
    localStorage.setItem("hasSeenOnboarding", "true");
    
    // 2. Route to Registration next
    router.push("/auth/register"); 
  };

  return (
      <main className="flex-grow flex flex-col relative w-full max-w-[440px] mx-auto bg-surface-container-lowest h-[100dvh] md:h-screen md:max-h-[850px] shadow-2xl overflow-hidden sm:border-x border-surface-variant">
      
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar flex-grow h-full"
      >
        {/* Slide 1: Welcome */}
        <div className="flex-none w-full snap-start flex flex-col h-full relative p-margin-mobile pt-16">
          <div className="flex-grow flex flex-col justify-center items-center text-center space-y-lg pb-xl">
            <div className="w-full aspect-square bg-surface-container rounded-full overflow-hidden mb-8 shadow-sm flex items-center justify-center p-8 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt8Okov765Q6U4qeuCiVQPu5fdFFO7KhjbmlGIj0xM1jBGk1gw3hVjtQq9QZo5UNiA9I-79RrNxqg0dwvp_8WYyIlwUj7epGk3pZz3l0D9mBwBBN85UNr0Zuw7WpYEzyHvbzIgerbl3IsEjk-JNuUn545wJHxMb0lRRmc7t81uFWvEAjDK5UBPOD3dG1kv97SglrcuIFQAFddHtg5MMGY4Q90N8GDQcOdhF9fd0Azce0Pkv5j3sosotSKyqfXXz4i4moM2q1cTnKfp"
                alt="Welcome illustration"
                fill
                className="object-contain drop-shadow-lg p-8"
                priority
              />
            </div>
            <div className="space-y-sm px-4">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
                Welcome to Yagelege Market
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Buy and sell used products easily in your city.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2: Sell Steps */}
        <div className="flex-none w-full snap-start flex flex-col h-full relative p-margin-mobile pt-16">
          <div className="flex-grow flex flex-col justify-center items-center text-center space-y-lg pb-xl">
            <div className="w-full mb-8 space-y-6">
              {/* Step 1 */}
              <div className="flex items-center space-x-4 bg-surface p-4 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-label-lg text-label-lg text-on-surface">Add Product</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Snap a photo and describe it</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-center space-x-4 bg-surface p-4 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-label-lg text-label-lg text-on-surface">Pay Small Fee</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Secure local payment</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-center space-x-4 bg-surface p-4 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-high transition-transform transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-inverse-primary/20 flex items-center justify-center text-primary-fixed-dim">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                </div>
                <div className="text-left flex-grow">
                  <h3 className="font-label-lg text-label-lg text-on-surface">Get Buyers</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Reach eager local buyers</p>
                </div>
              </div>
            </div>
            <div className="space-y-sm px-4">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
                Sell Your Product
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Post your product and reach real buyers.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3: Contact */}
        <div className="flex-none w-full snap-start flex flex-col h-full relative p-margin-mobile pt-16">
          <div className="flex-grow flex flex-col justify-center items-center text-center space-y-lg pb-xl">
            <div className="w-full aspect-[4/3] relative bg-surface-container rounded-3xl overflow-hidden mb-8 shadow-[0px_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center p-6 border border-surface-variant">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK2yDZVmOxTDyNbf3F4tmb-HTOlGAU47Cf4eTPkechNALzeJb738UIx-V7sLguXlc_KDg4w5D4s42eDPadSIPXqtITJUBd5Ny47Se04tP-D81MhD3e5dLInoKH4ShGV43KqLj2sxuRvLUGshmdoJSn9ZCuwYIK0ZrjmnvZwXlGwSHxfLCF7OpNYSt7yWrSFwYvsOXS29gfbYbBZ_xv2gig3X6517MAP_s4QW37jwLWo0Nbi7axAr154TY-nEU12oDmPEc5fW5svZI8"
                alt="Contact directly illustration"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="space-y-sm px-4 mb-8">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
                Contact Directly
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Buyers contact sellers directly via phone or Telegram.
              </p>
            </div>
            {/* Get Started Button explicitly on last slide */}
            <div className="w-full mt-auto mb-16">
              <button
                onClick={handleFinish}
                className="w-full h-[56px] bg-primary text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center space-x-2 shadow-[0px_4px_12px_rgba(0,106,65,0.2)] active:scale-95 transition-transform duration-200"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls (Fixed Bottom Area) */}
      <div className="absolute bottom-0 w-full p-margin-mobile pb-8 flex flex-col items-center justify-between space-y-6 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest to-transparent pointer-events-none">
        
        {/* Indicators */}
        <div className="flex space-x-2 pointer-events-auto">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-6 bg-primary" : "w-2 bg-surface-variant"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Global Actions - Fades out on the last slide */}
        <div 
          className={`w-full flex flex-col space-y-6 transition-opacity duration-300 ${
            currentSlide === TOTAL_SLIDES - 1 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}
        >
          <button
            onClick={handleNext}
            className="w-full h-[48px] bg-surface-container-high text-on-surface rounded-lg font-label-lg text-label-lg flex items-center justify-center active:scale-95 transition-transform duration-200"
          >
            Next
          </button>
          
          <button
            onClick={handleFinish}
            className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors text-center"
          >
            Skip Onboarding
          </button>
        </div>
      </div>
    </main>
  );
}