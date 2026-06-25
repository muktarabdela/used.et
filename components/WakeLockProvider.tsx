"use client";

import { useWakeLock } from '@/hooks/useWakeLock';

export function WakeLockProvider() {
  const { isSupported, isActive } = useWakeLock();

  // Optional: Log status for debugging
  if (isSupported) {
    console.log('Wake Lock Status:', isActive ? 'Active' : 'Inactive');
  }

  return null; // This component doesn't render anything visible
}
