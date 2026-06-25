"use client";

import { useEffect, useState, useRef } from 'react';

export function useWakeLock() {
  const [isSupported, setIsSupported] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const wakeLockRef = useRef<any>(null);

  useEffect(() => {
    // Check if Screen Wake Lock API is supported
    const supported = 'wakeLock' in navigator;
    setIsSupported(supported);

    if (!supported) {
      console.warn('Screen Wake Lock API is not supported in this browser');
      return;
    }

    // Function to request wake lock
    const requestWakeLock = async () => {
      try {
        if (wakeLockRef.current) {
          await wakeLockRef.current.release();
        }

        const wakeLock = await (navigator as any).wakeLock.request('screen');
        wakeLockRef.current = wakeLock;
        setIsActive(true);

        // Listen for wake lock release
        wakeLock.addEventListener('release', () => {
          setIsActive(false);
          wakeLockRef.current = null;
        });

        console.log('Screen wake lock activated');
      } catch (error) {
        console.error('Failed to request wake lock:', error);
        setIsActive(false);
      }
    };

    // Function to release wake lock
    const releaseWakeLock = async () => {
      if (wakeLockRef.current) {
        try {
          await wakeLockRef.current.release();
          wakeLockRef.current = null;
          setIsActive(false);
          console.log('Screen wake lock released');
        } catch (error) {
          console.error('Failed to release wake lock:', error);
        }
      }
    };

    // Request wake lock on mount
    requestWakeLock();

    // Re-request wake lock when page becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      releaseWakeLock();
    };
  }, []);

  return { isSupported, isActive };
}
