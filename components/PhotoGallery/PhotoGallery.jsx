"use client";
import React, { useState } from "react";
import Section from "../Section";
import Heading from "../Heading";
import Image from "next/image";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // List of photos from the public/photos folder
  const photos = [
    "/photos/WhatsApp Image 2025-12-30 at 14.17.08 (1).jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.08 (2).jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.08.jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.09 (1).jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.09.jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.10 (1).jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.10 (2).jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.10.jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.11 (1).jpeg",
    "/photos/WhatsApp Image 2025-12-30 at 14.17.11.jpeg",
  ];

  return (
    <>
      <Section id="gallery" className="bg-n-1">
        <div className="container relative z-2">
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              Our Gallery
            </h2>
            <p className="body-2 text-black mt-4 lg:text-center">
              A glimpse into our office, team meetings, and client interactions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-stroke-1 bg-n-8 cursor-pointer hover:border-color-1 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.3)] hover:-translate-y-2"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo}
                    alt={`Shivalix Forex Gallery - Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">View Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-n-8 hover:bg-n-7 rounded-full flex items-center justify-center text-n-1 transition-colors"
                aria-label="Close image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Gallery Image"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </Section>
    </>
  );
};

export default PhotoGallery;

