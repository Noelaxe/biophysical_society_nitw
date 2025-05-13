"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Generate placeholder gallery images
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=${300 + (i % 3) * 100}&width=${400 + (i % 4) * 100}&text=Image+${i + 1}`,
  alt: `Gallery Image ${i + 1}`,
  width: 400 + (i % 4) * 100,
  height: 300 + (i % 3) * 100,
}))

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Explore photos from our events, workshops, and activities.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Gallery categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full">All</button>
            <button className="bg-white text-blue-900 border border-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
              Workshops
            </button>
            <button className="bg-white text-blue-900 border border-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
              Conferences
            </button>
            <button className="bg-white text-blue-900 border border-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
              Lab Activities
            </button>
            <button className="bg-white text-blue-900 border border-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
              Social Events
            </button>
          </div>

          {/* Masonry gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
                style={{
                  height: `${Math.max(200, Math.min(400, image.height / 2))}px`,
                }}
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center mt-12">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage - 1].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage - 1].alt}
              width={galleryImages[selectedImage - 1].width}
              height={galleryImages[selectedImage - 1].height}
              className="object-contain w-full h-full"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-lg font-medium">Image {selectedImage}</h3>
              <p className="text-sm text-gray-300">Description placeholder for image {selectedImage}</p>
            </div>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage === 1 ? galleryImages.length : selectedImage - 1)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Previous</span>
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage === galleryImages.length ? 1 : selectedImage + 1)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
