"use client";

import { useEffect, useRef, ReactNode } from "react";

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("animate-fadeInUp");
                        }, delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className="opacity-0" style={{ animationFillMode: "forwards" }}>
            {children}
        </div>
    );
}
