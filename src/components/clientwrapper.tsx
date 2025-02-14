"use client";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/splash";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return showSplash ? <SplashScreen /> : <>{children}</>;
}