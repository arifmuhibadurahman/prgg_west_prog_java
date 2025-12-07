"use client";
import { useEffect } from "react";

export default function Spinner() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const spinnerEl = document.getElementById("spinner");
      if (spinnerEl) spinnerEl.classList.remove("show");
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return <div id="spinner" className="show">Loading...</div>;
}
