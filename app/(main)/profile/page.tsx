"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy Data mapped from your HTML
const MY_PRODUCTS = [
  {
    id: 1,
    title: "Samsung Galaxy S21 Ultra 5G",
    price: "35,000 ETB",
    views: 124,
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRV_v3eznP1TikmBl8GS7iLTNdyuy1Z9TIOCc1SPijIhq7DvHYXGyjB7onmusyIrdKuy9X3iLivgx-khstP54dEudIuT1LTrm7UwPHPa0r-lqzFmhSExc_sJbgmKXWYiTo5BbOjakz06bdB7Kkcv3DW5vntHZH8FlhconRkZl8uUAWL0slE0dYhrvja46kTFpgT5HQEh1i0MSGrYxH9Ksa616_oTbTSi79s6dLAavA4sETGbMhzK6Y3Oxqg4U1bHsCv0hFkBkHfXuH",
  },
  {
    id: 2,
    title: "MacBook Pro M1 2020 8GB/256GB",
    price: "65,000 ETB",
    views: 342,
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa3BfroZ0BCFtwDjzRDqv03xzpxS1qCDZbhlhyhVtC9MXpzfAK8bIHderKk6HyjMeSX2utIBn8OyjtpPY2QgAbj55fbIuLtwcxpkEqcnLkyUi0DqF0K2dJ-jbA2HMb5CecoqHaA_-Luuvfk0Z36d_6RhyRQ541GXpdhx91WtbJZ0nJN8BvJw9pSWW0UYcEYJ7EyV2Dd_KDKoWJfADnMCe6GcTnFWP2sAyiy22-RfI7vpTSwBVNBR0N-kHiUykWp-RfxXBpxxJSWfsS",
  },
  {
    id: 3,
    title: "Modern L-Shape Sofa Set",
    price: "12,000 ETB",
    views: 56,
    status: "Sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBizGDZ2VLSEr6NADpQ6D1e62xsH18O6ieIe80RaWrHpu1Z5nu3FWeya3nV38tV8mGqEONACp-bktsKxZYFy0rcdWxQcPG45OBTs8C7StAYQtlOyN2uKTF5E9mVgexosqt_BDC0KarfVGjZ_rqPAsOyqKQusFQ1-aS7tcjaV_uzUjtlB3ImcJ62VczxRfnIO7dpnv66NhgMDNW1GtBb2A2Onho4y3RBFEdGLKhzQ-pVghUIN5o3GL848bkazEg0U6ZpEMyxyFTswp9-",
  },
];

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 9) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0 font-body-md text-body-md">
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-margin-mobile h-16 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] bg-surface dark:bg-surface-container">
        <div className="flex items-center gap-4">
          <span aria-label="Menu" className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150 p-2 rounded-full cursor-pointer">
            menu
          </span>
          <h1 className="font-headline-md text-headline-lg-mobile text-primary dark:text-inverse-primary tracking-tight font-bold">
            Yagelege Market
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span aria-label="Search" className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150 p-2 rounded-full cursor-pointer">
            search
          </span>
          <span aria-label="Filter" className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150 p-2 rounded-full cursor-pointer">
            filter_list
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 px-margin-mobile max-w-4xl mx-auto space-y-lg">
        
        {/* Screen 3: Seller Entry (Login) */}
        {!isLoggedIn && (
          <section className="relative bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-lg overflow-hidden isolate max-w-md mx-auto mt-8">
            {/* Decorative Background Element */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container opacity-20 rounded-full blur-2xl -z-10"></div>
            
            <div className="space-y-md text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-sm block">storefront</span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Start Selling</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Enter your phone number to access your seller dashboard and manage your products.
              </p>
              
              <form onSubmit={handleLogin} className="space-y-sm mt-lg text-left">
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-xs" htmlFor="phone">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-sm text-on-surface-variant">
                      +251
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="9XX XXX XXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="block w-full pl-12 pr-sm py-3 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none sm:text-sm bg-surface shadow-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-md rounded-full font-label-lg text-label-lg active:scale-95 transition-transform duration-150 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] mt-6"
                >
                  Continue
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>
            </div>
          </section>
        )}

        {/* Screen 4: Seller Dashboard */}
        {isLoggedIn && (
          <section className="space-y-lg pb-8 animate-in fade-in duration-500">
            {/* Dashboard Header & Stats Bento */}
            <div className="space-y-md">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">My Dashboard</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Manage your products and track performance.</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
                <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col justify-between relative overflow-hidden isolate">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-container opacity-10 rounded-full blur-xl -z-10"></div>
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">visibility</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Total Views</span>
                  </div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">1,248</span>
                </div>
                
                <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col justify-between relative overflow-hidden isolate">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-tertiary-container opacity-10 rounded-full blur-xl -z-10"></div>
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">forum</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Total Contacts</span>
                  </div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">42</span>
                </div>
                
                <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col justify-between relative overflow-hidden isolate col-span-2 md:col-span-1">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary opacity-10 rounded-full blur-xl -z-10"></div>
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Active Listings</span>
                  </div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">15</span>
                </div>
              </div>
            </div>

            {/* Products List Area */}
            <div className="space-y-md">
              <div className="flex justify-between items-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">My Products</h3>
                <button className="font-label-sm text-label-sm text-primary flex items-center gap-1 active:scale-95 transition-transform duration-150">
                  Filter <span className="material-symbols-outlined text-[16px]">filter_list</span>
                </button>
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
                {MY_PRODUCTS.map((product) => (
                  <div 
                    key={product.id} 
                    className={`bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer active:scale-95 transition-transform duration-150 ${
                      product.status === "Sold" ? "opacity-75" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full bg-surface-variant overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        fill
                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                          product.status === "Sold" ? "grayscale" : ""
                        }`}
                      />
                      
                      {/* Sold Overlay */}
                      {product.status === "Sold" && (
                        <div className="absolute inset-0 bg-surface/40 flex items-center justify-center backdrop-blur-[2px] z-10">
                          <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-lg text-label-lg shadow-sm">
                            Sold
                          </span>
                        </div>
                      )}

                      <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm rounded-full p-1 shadow-sm z-20 hover:bg-surface transition-colors">
                        <span className="material-symbols-outlined text-on-surface text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          more_vert
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-sm flex flex-col gap-xs flex-grow">
                      <h4 className="font-label-lg text-label-lg text-on-surface line-clamp-2">{product.title}</h4>
                      <p className={`font-headline-md text-headline-md mt-auto ${product.status === "Sold" ? "text-secondary" : "text-primary"}`}>
                        {product.price}
                      </p>
                      <div className="flex justify-between items-center text-on-surface-variant mt-1">
                        <span className="font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">visibility</span> {product.views}
                        </span>
                        <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full ${
                          product.status === "Sold" 
                            ? "text-secondary bg-secondary-container/50" 
                            : "text-primary bg-primary-container/20"
                        }`}>
                          {product.status === "Sold" ? "Inactive" : "Active"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Action Button / Bottom Button Area (Dashboard Specific) */}
            <div className="fixed bottom-20 md:bottom-6 right-margin-mobile left-margin-mobile md:left-auto flex justify-center z-40">
              <Link href="/post" className="w-full md:w-auto">
                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-6 rounded-full font-label-lg text-label-lg shadow-[0px_8px_24px_rgba(0,0,0,0.12)] active:scale-95 transition-transform duration-200 hover:bg-primary/90">
                  <span className="material-symbols-outlined text-[24px]">add</span>
                  Post New Product
                </button>
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}