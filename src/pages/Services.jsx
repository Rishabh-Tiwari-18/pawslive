"use client";

import services from "../data/services";
import ServiceCard from "../componets/ServiceCard";
import Hero from "../componets/Hero";

export default function Services({ onOpenBook }) {
  return (
    <>
      {/* HERO */}
      <Hero
        title="Our Premium Services"
        subtitle="Everything your furry companion needs — grooming, training, walking, medical care & more."
        ctaText="Book Appointment"
        onCta={onOpenBook}
      />

      <section className="py-20 bg-gradient-to-b from-white via-[#E0F5FF] to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#007ACC]">
              Choose the Best for Your dog
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Select from our wide range of expert services designed to keep
              your dog happy, healthy, and well-cared for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id}>
                <ServiceCard s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
