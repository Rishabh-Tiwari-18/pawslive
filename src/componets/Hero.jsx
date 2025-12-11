"use client";

export default function Hero({
  title = "Welcome to Pawslive",
  subtitle = "Premium care for your furry family — grooming, training, walking, vet visits & more.",
  ctaText = "Book Appointment",
  onCta,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#8CE4FF] via-white to-[#B3E6FF] py-20 md:py-28 transition-smooth">
      {/* Decorative Paws (top-left) */}
      <div className="absolute top-10 left-10 text-[#6AC7FF] text-5xl opacity-20 select-none animate-pulse">
        🐾
      </div>

      {/* Decorative Paws (bottom-right) */}
      <div className="absolute bottom-10 right-10 text-[#6AC7FF] text-6xl opacity-20 select-none animate-pulse">
        🐾
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 transform transition-smooth hover:scale-105">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#007ACC] leading-tight drop-shadow-sm text-balance">
            {title}
          </h1>

          <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            {subtitle}
          </p>

          <div className="flex gap-4 mt-10">
            <button
              onClick={onCta}
              className="bg-[#007ACC] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#005F99] active:scale-95 transition-all duration-300 font-semibold"
            >
              {ctaText}
            </button>

            <a
              href="/services"
              className="px-8 py-4 rounded-xl border-2 border-[#007ACC] text-[#007ACC] font-semibold hover:bg-[#D0EBFF] hover:border-[#005F99] active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex-1">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#A9D6FF] hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-[#007ACC] mb-6">
              Why Pawslive?
            </h3>

            <ul className="text-gray-800 text-base space-y-4">
              <li className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                <span className="text-[#0099FF] text-2xl flex-shrink-0">✓</span>
                <span className="font-medium">
                  Certified trainers & veterinary experts
                </span>
              </li>

              <li className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                <span className="text-[#0099FF] text-2xl flex-shrink-0">✓</span>
                <span className="font-medium">
                  Personalized care plans for every dog
                </span>
              </li>

              <li className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                <span className="text-[#0099FF] text-2xl flex-shrink-0">✓</span>
                <span className="font-medium">
                  Best quality food for your dog
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
