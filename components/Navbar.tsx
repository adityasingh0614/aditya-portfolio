"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <ThemeToggle />
                        <Link
                            href="/"
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Projects
                        </Link>
                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 w-full">
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}
