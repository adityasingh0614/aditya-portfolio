"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

type Props = {
    screenshots: string[];
};

export default function ScreenshotGallery({ screenshots }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {screenshots.map((src, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                        onClick={() => setSelectedImage(src)}
                    >
                        <img
                            src={src}
                            alt={`Project screenshot ${index + 1}`}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 p-3 rounded-full">
                                <ZoomIn className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Dialog */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0 border-0">
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Full size screenshot"
                            className="w-full h-auto rounded-lg"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
