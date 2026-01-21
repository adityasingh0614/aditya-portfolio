"use client";

import { useState } from "react";
import { Mail, Clock, CheckCircle2, Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(`Project Discussion - ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
        );

        window.location.href = `mailto:adisingh.9896@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header - Reassuring & Outcome-Focused */}
                <div className="text-center mb-12 space-y-4">
                    <Badge variant="secondary" className="mb-2">
                        <Clock className="h-3 w-3 mr-1" />
                        24-Hour Response Guarantee
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Let's Build Your App
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Start with a free discussion. No commitment required.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Left Column - Trust Signals (2 columns) */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Email Card */}
                        <Card className="border-border/50">
                            <CardContent className="p-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm mb-1">Email</h3>
                                        <a
                                            href="mailto:adisingh.9896@gmail.com"
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            adisingh.9896@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/* Social Links Card - NEW! */}
                        <Card className="border-border/50">
                            <CardContent className="p-5">
                                <h3 className="font-semibold text-sm mb-3">Connect With Me</h3>
                                <div className="flex gap-3">
                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/adityasingh9896/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <span className="text-blue-600 text-lg font-bold">in</span>
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/adityasingh0614"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-foreground/10 hover:bg-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <span className="text-xl">📦</span>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Trust Signals */}
                        <Card className="border-border/50 bg-secondary/30">
                            <CardContent className="p-5 space-y-4">
                                <h3 className="font-semibold text-sm">What You Get:</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Free initial consultation (30 min)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Project timeline & cost estimate</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Response within 24 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>No obligation to proceed</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Social Proof */}
                        <div className="text-sm text-muted-foreground bg-secondary/20 rounded-lg p-4 border border-border/30">
                            <p className="font-medium text-foreground mb-2">Trusted by startups</p>
                            <p className="text-xs">
                                3+ client projects delivered • 10,000+ users reached • Production-ready solutions
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Form (3 columns) */}
                    <div className="md:col-span-3">
                        <Card className="border-border shadow-xl bg-card">
                            <CardContent className="p-8">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Choose your preferred way to reach out
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {/* Email Button - FIXED */}
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="w-full h-12 text-base font-semibold hover:bg-secondary/80 transition-all"
                                    >
                                        <a href="mailto:adisingh.9896@gmail.com?subject=Project Discussion">
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send Email
                                        </a>
                                    </Button>

                                    {/* WhatsApp Button */}
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="w-full h-12 text-base font-semibold hover:bg-secondary/80 transition-all"
                                    >
                                        <a href="https://wa.me/919876543210?text=Hi%20Aditya%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
                                            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            WhatsApp Me
                                        </a>
                                    </Button>

                                    {/* LinkedIn Button */}
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="w-full h-12 text-base font-semibold hover:bg-secondary/80 transition-all"
                                    >
                                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            Connect on LinkedIn
                                        </a>
                                    </Button>
                                </div>


                                <p className="text-xs text-center text-muted-foreground mt-6">
                                    I typically respond within 24 hours
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
