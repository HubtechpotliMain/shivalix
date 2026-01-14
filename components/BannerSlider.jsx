import React, { useState, useEffect } from "react";
import Image from "next/image";

const BannerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const banners = [
        "/banners/currency-exchange.jpeg",
        "/banners/global-forex-and travel money-solutions.jpeg",
        "/banners/trusted-forex-service and professional-solution.jpeg",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-b-[0.9rem]">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-n-8 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={banner}
                        alt={`Banner ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
