"use client";

import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id;

  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="max-w-7xl mx-auto px-margin-mobile py-6 pt-[80px]">
        <h1 className="font-headline-lg-mobile text-primary tracking-tight mb-lg">
          Product Details
        </h1>
        <div className="bg-surface-container-lowest rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-md">
          <p className="font-body-lg text-on-surface-variant">
            Product ID: {productId}
          </p>
          <p className="font-body-lg text-on-surface-variant mt-sm">
            Product details coming soon...
          </p>
        </div>
      </main>
    </div>
  );
}
