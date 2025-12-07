"use client";
import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  duration?: number; // ms
}

export default function Counter({ value, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16); // kira-kira 60fps
    const step = () => {
      start += increment;
      if (start < value) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    step();
  }, [value, duration]);

  return <span className="counter-value">{count}</span>;
}
