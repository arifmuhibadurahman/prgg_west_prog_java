"use client";
import { useEffect } from "react";

declare var WOW: any;

export default function UseWow() {
  useEffect(() => {
    if (typeof window !== "undefined" && WOW) {
      new WOW().init();
    }
  }, []);

  return null;
}
