// src/app/page.tsx
"use client"; // Added this line to allow client-side logic

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Dummy Data
const CATEGORIES = ["Electronics", "Phones", "Furniture", "Cars", "Clothes"];
const PRODUCTS = [
  { id: 1, title: "Samsung Galaxy S21 Ultra - Excellent Condition", price: "12,000 ETB", location: "Bole", time: "2h ago", views: "1.2k", calls: "45", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRZjGCOYnjWSbIMlkbLP5PY21hWOdJmUmkwkc8R7K_ResvcFpeF1TeF1EWBucRpgxVzwQcPFfhf53ZQjMqODmLB2LY4LskMoZpr7QD72tJ-rCJZLsgKfXR_v_m_ys8XS2_VgG6_nINsSmuHoBktmFc4Bu0-Dde7x5XdOCtjhqSEzv1z2nHfSLso1vv7eJp3n4Cpny1bZ-8Pl5ZwFG4XXXEnxfNBkrH372jEbApM5l4P80mumjKQKIrdRUX5XSQFmtGWRxbKw5bKohh" },
  { id: 2, title: "Ergonomic Office Chair - Like New", price: "3,500 ETB", location: "Piassa", time: "5h ago", views: "850", calls: "12", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq5ALSO7RQPs0XD32GW1ulTJCnoWPSRZ1zUvyTpjqDDVPLBQvuBggpKrtfGc9U-bYR8klm29J4L6o2AbieySW0MlHKmQexBzClyYRJro83t8DILMGp8_QmWu4ysL0W3fc1I68bAbf2rsTo4UW-j5754zXko9CiEtKzMhSAb8qrBy-9iPe5X8IfTP6BjK2UMNzGGZ4H5Wg9P57PmyWFxtbYmccXZD6ufdZM_3FtD6JkPxwXUPU98m_pAt488GfA-_4L2qXaWPZMIidl" },
  { id: 3, title: 'Sony 55" Smart TV 4K', price: "25,000 ETB", location: "Megenagna", time: "1d ago", views: "2.4k", calls: "88", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCpuMNATgph9fzvqLqeJGaGFfSIR3bX0aOob_pln5xXgwNskR5gvyaLvvg09ZrMsDRkkri8eahbfqt_xrRog3QQd6n405H5eY_i154oumt85ohoGx9eE0vEPxJYZNAJzUf55mBL9-V0hQYDmHUY5zUKdmJcN3oy3-y153PvT2Nu4ZSp44x_BoIxacuiltbovyjyLSMkwx0ffcIIyL1etY4FmeG4za72RoqVNbgRaNHQ3P8bUwtGq059Sw4IvFpMDuAMd8GszI9NN6p" },
  { id: 4, title: "MacBook Air M1 2020 8GB RAM", price: "45,000 ETB", location: "Kazanchis", time: "2d ago", views: "3.1k", calls: "105", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_JKIjU3HbMakITidHmXH3sEGW9f-3nbHuS8IowxyosHJNuhdCy5gvTrXshNH0bU5elNOR4ePC7hT6Qyvu7HaRtcjnl-18s0H_nwq5Wj8blFyPweJotfpL2Z3DaxGfkCGwh9BPxAxuNKavNMVnGnWNd5zfbT7hg3kC5J-piqtYy6zbCx4X-qmpA1YdYypU3ajGRZvCkW6LCzZwm7EaJZoCVVHnOUu1sQTrN-R8LGem_xu8thOD52FmKDhS3L_GGRiFvp5Kx1zNiB7u" },
];

export default function Home() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  // --- SMART GATE LOGIC ---
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    const isRegistered = localStorage.getItem("isRegistered");

    if (!hasSeenOnboarding) {
      router.replace("/onboarding"); // Route 1: New User
    } else if (!isRegistered) {
      router.replace("/auth/register"); // Route 2: Not Registered
    } else {
      router.replace("/product"); // Route 3: Registered, show Home page
    }
  }, [router]);

  // Show a blank screen or loader while checking to prevent UI flickering
  if (!isReady) return <div className="min-h-screen bg-background"></div>;

  return (
    <div className="bg-background text-on-background min-h-screen pt-16 pb-20 md:pb-0">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-margin-mobile h-16 shadow-sm bg-surface">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-primary">search</span>
        </div>
        <div className="font-headline-lg-mobile text-primary tracking-tight font-bold">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoRbkLB6U3FT7e59b9OCoOeQAf3_Vv8LxD7sn4TNQTsOWhFx056_zW9_6dNqEzUjONkt_RV7oGge3JtToWCs2WQQSj58KvZ3h9TNd0rwwQo7sh-wuJeMLVpDAhMeaM7GJAmSdoAIWF45E4ZjzcYSM06iz93Sw2bk6tZPZ_HDICRuW3xIGcQaKJnCKQj9RnK6sslppTpxuGjNvV9w7nPHoWrLEJOeKAhXg2YJVyfBKX4xRkMltSgDAcfz4cYqZbAQecSHrImv1etStg" 
            alt="Yagelege Market" 
            width={160} height={40} className="h-10 w-auto" priority
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-primary">filter_list</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="max-w-7xl mx-auto px-margin-mobile space-y-lg mt-md">
        
        {/* Search & Location Container */}
        <div className="bg-surface-container-lowest rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-md flex flex-col gap-sm">
          <div className="flex items-center gap-sm bg-surface-container rounded-full px-md py-sm">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input className="bg-transparent border-none focus:ring-0 w-full font-body-lg text-on-surface outline-none" placeholder="Search products..." type="text" />
          </div>
          <div className="flex items-center gap-xs text-primary font-label-lg pl-sm cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>Addis Ababa</span>
            <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex overflow-x-auto gap-sm pb-sm hide-scrollbar -mx-margin-mobile px-margin-mobile">
          {CATEGORIES.map((category, index) => (
            <button key={category} className={`px-md py-sm rounded-full font-label-lg whitespace-nowrap active:scale-95 transition-transform ${index === 0 ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant"}`}>
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col cursor-pointer group">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-sm flex flex-col gap-xs flex-grow">
                <h3 className="font-body-md text-on-surface line-clamp-2">{product.title}</h3>
                <div className="font-headline-md text-primary mt-auto">{product.price}</div>
                <div className="grid grid-cols-2 gap-xs mt-sm">
                  <button className="bg-primary text-on-primary rounded flex items-center justify-center py-xs h-10 active:scale-95"><span className="material-symbols-outlined text-[18px]">call</span></button>
                  <button className="bg-tertiary text-on-tertiary rounded flex items-center justify-center py-xs h-10 active:scale-95"><span className="material-symbols-outlined text-[18px]">send</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-24"></div>
      </main>

      {/* Bottom Nav / FAB ... (Kept the same as your code) */}
      <Link href="/post">
        <button className="fixed bottom-24 right-margin-mobile bg-primary text-on-primary flex items-center gap-sm px-lg py-md rounded-full shadow-[0px_8px_24px_rgba(0,0,0,0.12)] active:scale-95 z-40">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-label-lg">Sell Product</span>
        </button>
      </Link>
    </div>
  );
}