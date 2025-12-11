import Hero from "../componets/Hero";

export default function About({ onOpenBook }) {
  return (
    <>
      <Hero
        title="About Pawslive"
        subtitle="Where every dog is cared for with love, safety, and heartfelt dedication."
        onCta={onOpenBook}
      />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div
          className="max-w-3xl mx-auto bg-gradient-to-br from-[#E0F5FF] to-white 
                        p-8 rounded-2xl border-2 border-[#A0D8FF] 
                        shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-[#007ACC] mb-4">Who We Are</h3>

          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            I’m{" "}
            <span className="font-semibold text-[#007ACC]">
              Abhishek Tiwari
            </span>
            —a devoted dog lover, trained caregiver, and certified pet-care
            professional. Pawslive was created from a heartfelt belief:
            <span className="font-medium">
              every dog deserves more than basic care; they deserve compassion,
              understanding, and a safe space where they feel genuinely loved.
            </span>{" "}
            Over the years, I’ve had the privilege of caring for dogs of every
            breed, temperament, and age, and each one has taught me something
            meaningful about trust, patience, and the true beauty of
            unconditional love.
            {"\n\n"}
            With extensive hands-on experience in dog walking, daycare, training
            support, behavioral understanding, and specialized care, I know that
            no two dogs are ever alike. Every dog has their own quirks,
            preferences, personality, and emotional needs. That’s why Pawslive
            follows a deeply personalized approach—whether your furry friend
            enjoys adventurous outdoor activities, prefers calm and gentle
            walks, loves playful social time, or feels safest with dedicated
            one-on-one attention.
            {"\n\n"}
            At Pawslive, our commitment goes far beyond routine service.
            <span className="font-medium">
              Your dog’s safety, emotional well-being, and happiness always come
              first.
            </span>
            You’ll receive real-time updates, transparent communication, and
            sincere care at every step. Because to us, your dog is not just a
            pet—they are a cherished member of your family… and when they’re
            with us, they become a cherished part of ours too.
            {"\n\n"}
            Thank you for trusting Pawslive with your beloved companion. We're
            here to give them comfort, joy, and the kind of love they truly
            deserve.
          </p>
        </div>
      </div>
    </>
  );
}
