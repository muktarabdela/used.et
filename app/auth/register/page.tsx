// src/app/(auth)/register/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault(); // Prevent page reload
    localStorage.setItem("isRegistered", "true");
    router.push("/product");
  };

  return (
    <main className="flex-grow flex items-center justify-center p-margin-mobile min-h-screen w-full bg-background">
      <section className="relative w-full max-w-[440px] bg-surface-container-lowest rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.08)] border border-surface-variant p-lg overflow-hidden isolate mx-auto">
        
        {/* Decorative background glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl -z-10"></div>
        
        <div className="space-y-md text-center">
          <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-normal">person_add</span>
          </div>
          <div>
            <h2 className="font-headline-lg-mobile text-on-surface font-bold tracking-tight">Create Account</h2>
            <p className="font-body-md text-on-surface-variant mt-1">Enter your details to join the marketplace.</p>
          </div>

          <form className="space-y-md mt-lg text-left w-full" onSubmit={handleRegister}>
            <div className="space-y-1">
              <label className="block font-label-lg text-on-surface" htmlFor="fullName">Full Name</label>
              <div className="relative flex items-center w-full">
                <span className="absolute left-3 material-symbols-outlined text-on-surface-variant text-xl">person</span>
                <input 
                  className="block w-full pl-11 pr-4 py-3 border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-surface text-on-surface outline-none font-body-lg transition-all" 
                  id="fullName" 
                  placeholder="Abebe Kebede"
                  required 
                  type="text" 
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block font-label-lg text-on-surface" htmlFor="phone">Phone Number</label>
              <div className="relative flex items-center w-full">
                <span className="absolute left-3 text-on-surface-variant font-label-lg border-r border-outline-variant pr-2.5 py-1">
                  +251
                </span>
                <input 
                  className="block w-full pl-16 pr-4 py-3 border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-surface text-on-surface outline-none font-body-lg transition-all" 
                  id="phone" 
                  placeholder="9XX XXX XXX"
                  required 
                  type="tel" 
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full h-14 flex items-center justify-center gap-2 bg-primary text-on-primary rounded-xl font-label-lg active:scale-95 transition-transform duration-200 shadow-[0px_4px_12px_rgba(0,106,65,0.2)] hover:bg-primary/90 cursor-pointer"
              >
                <span>Complete Registration</span>
                <span className="material-symbols-outlined text-xl">check_circle</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}