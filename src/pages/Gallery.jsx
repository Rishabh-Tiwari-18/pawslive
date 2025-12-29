import React, { useState, useRef } from "react";

export default function GalleryPage() {
  const allMedia = [
    { id: 1, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005213/WhatsApp_Image_2025-12-29_at_15.59.07_mele2e.jpg" },
      { id: 2, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005213/WhatsApp_Image_2025-12-29_at_15.59.07_2_uc6yoy.jpg" },
      { id: 3, type: "video", url: "https://res.cloudinary.com/dssewgty9/video/upload/v1767005213/WhatsApp_Video_2025-12-29_at_15.59.01_q03mdo.mp4" },
      { id: 4, type: "video", url: "https://res.cloudinary.com/dssewgty9/video/upload/v1767005213/WhatsApp_Video_2025-12-29_at_15.59.04_sd80pq.mp4" },
      { id: 5, type: "video", url: "https://res.cloudinary.com/dssewgty9/video/upload/v1767005213/WhatsApp_Video_2025-12-29_at_15.59.07_qi0pgw.mp4" },
      { id: 6, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005211/WhatsApp_Image_2025-12-29_at_15.59.24_1_ebqywj.jpg" },
      { id: 7, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005211/WhatsApp_Image_2025-12-29_at_15.59.24_wgarlb.jpg" },
      { id: 8, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005211/WhatsApp_Image_2025-12-29_at_15.59.12_mvge0i.jpg" },
      { id: 9, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005210/WhatsApp_Image_2025-12-29_at_15.59.06_cexu9x.jpg" },
      { id: 10, type: "video", url: "https://res.cloudinary.com/dssewgty9/video/upload/v1767005210/WhatsApp_Video_2025-12-29_at_15.59.18_xletgg.mp4" },
      { id: 11, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005210/WhatsApp_Image_2025-12-29_at_15.59.05_rqp1te.jpg" },
      { id: 12, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005210/WhatsApp_Image_2025-12-29_at_15.59.04_cwgnfo.jpg" },
      { id: 13, type: "video", url: "https://res.cloudinary.com/dssewgty9/video/upload/v1767005209/WhatsApp_Video_2025-12-29_at_15.59.23_vyedv1.mp4" },
      { id: 14, type: "video", url: "https://res.cloudinary.com/dssewgty9/video/upload/v1767005209/WhatsApp_Video_2025-12-29_at_15.59.14_pqbjji.mp4" },
      { id: 15, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005209/WhatsApp_Image_2025-12-29_at_15.59.04_1_geukd9.jpg" },
      { id: 16, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005208/WhatsApp_Image_2025-12-29_at_15.59.03_2_akpdkg.jpg" },
      { id: 17, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005208/WhatsApp_Image_2025-12-29_at_15.59.02_xityv8.jpg" },
      { id: 18, type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005208/WhatsApp_Image_2025-12-29_at_15.59.03_yetd74.jpg" },
      { id: 19 ,type: "image", url: "https://res.cloudinary.com/dssewgty9/image/upload/v1767005208/WhatsApp_Image_2025-12-29_at_15.59.03_1_pdgjgq.jpg" },
  ];

  const [visibleCount, setVisibleCount] = useState(12);
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(0);

  const media = allMedia.slice(0, visibleCount);

  const closeModal = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % media.length);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:scale-105 transition"
            >
              {item.type === "image" ? (
                <img src={item.url} className="w-full h-56 object-cover" />
              ) : (
                <video src={item.url} className="w-full h-56 object-cover" />
              )}
            </div>
          ))}
        </div>

        {visibleCount < allMedia.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((p) => p + 12)}
              className="bg-[#3A9DFF] hover:bg-[#2B7ACC] active:scale-95 transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ✕
            </button>

            {/* Left */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            >
              ‹
            </button>

            {/* Right */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            >
              ›
            </button>

            {media[activeIndex].type === "image" ? (
              <img
                src={media[activeIndex].url}
                className="max-h-[80vh] mx-auto rounded-xl"
              />
            ) : (
              <video
  src={media[activeIndex].url}
  autoPlay
  muted
  playsInline
  controls={false}
  className="max-h-[80vh] mx-auto rounded-xl"
  onLoadedMetadata={(e) => {
    e.currentTarget.volume = 0;
    e.currentTarget.muted = true;
  }}
  onPlay={(e) => {
    e.currentTarget.volume = 0;
    e.currentTarget.muted = true;
  }}
/>
            )}
          </div>
        </div>
      )}
    </div>
  );
}