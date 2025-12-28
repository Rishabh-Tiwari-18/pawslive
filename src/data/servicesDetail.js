// Example structure for ../data/services.js
const servicesDetail = [
  {
    id: "walking",
    title: "Regular Walks & Playtime",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "Our professional dog walking service is designed to provide your pet with regular exercise, stimulation, and attentive care. With experienced handlers and a pet-first approach, we ensure every walk is safe, enjoyable, and tailored to your dog’s breed, size, and energy level.",

    // The "Reusable" Features List
    features: [
      "We also offer 6-month package plans at special rates for long-term convenience and consistent care.",
      "Each walk focuses on maintaining your dog’s physical health and mental well-being while following proper safety and hygiene practices.",
      "Choose our trusted dog walking service to keep your furry companion active, happy, and well cared for.",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      { title: "Single Walk", price: "₹150", frequency: "Per walk" },
      {
        title: "Monthly Daily Walk",
        price: "₹3,000",
        frequency: "1 walk/day, 6 days/week",
        recommended: true,
      },
      {
        title: "Monthly Daily Walk",
        price: "₹5,000",
        frequency: "2 walks/day, 6 days/week",
      },
    ],
  },
  {
    id: "grooming",
    title: "Grooming & Styling",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "Our professional dog grooming services are thoughtfully designed to maintain your pet’s hygiene, comfort, and overall well-being. Handled by experienced groomers and using pet-safe products, we ensure a calm, clean, and refreshing grooming experience for dogs of all breeds and ages.",

    // The "Reusable" Features List
    features: [
      "Our grooming sessions focus on cleanliness, coat health, and your pet’s comfort in a safe and stress-free environment.",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      {
        title: "Regular Grooming",
        price: "₹800",
        frequency:
          "Includes bathing, nail trimming, ear cleaning, paw cleaning, and blow drying.",
      },
      {
        title: "Advanced Grooming",
        price: "₹1200",
        frequency:
          "Includes all services from basic grooming, along with a professional haircut customized to suit your dog’s breed and coat type.",
        recommended: true,
      },
      {
        title: "Puppy Grooming",
        price: "₹600",
        frequency:
          "Specially designed for puppies, this package includes bathing, nail trimming, ear cleaning, and blow drying using gentle, puppy-safe products.",
      },
    ],
  },
  {
    id: "mating",
    title: "Dog Mating",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "We provide a safe, responsible, and well-managed dog mating service designed to support healthy and ethical breeding practices. Our service is handled with care and professionalism, ensuring the comfort, safety, and well-being of both dogs throughout the process.",

    // The "Reusable" Features List
    features: [
      "Guidance on proper breeding practices and timing",
      "Careful handling to reduce stress and ensure safety",
      "Supervised dog mating under controlled and hygienic conditions",
      "We focus on responsible breeding with attention to health, compatibility, and ethical standards.",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      {
        title: "Dog Mating Service (point charge)",
        price: "₹3000",
        frequency: "per session",
      },
    ],
  },
  {
    id: "training",
    title: "Obedience & Behaviour Training",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "Our expert dog training services are designed to develop obedience, discipline, and positive behavior while strengthening the bond between you and your dog. Training is conducted by experienced professionals using safe, effective, and reward-based methods suitable for dogs of all breeds and ages.",

    // The "Reusable" Features List
    features: [
      "Our training programs focus on practical skills, consistent discipline, and real-life adaptability to ensure long-term behavioral improvement.",
      "Prices may vary for locations beyond a 5 km distance.",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      {
        title: "Regular + Obedience Training (1 - Month Program)",
        price: "₹7000",
        frequency:
          " Covers essential obedience commands including Sit, Down, Stay, No, Sleep, Hi-Fi, and Shake Hand.",
      },
      {
        title: "Basic + Advanced Training (3 - Months Program)",
        price: "₹10000 per month",
        frequency:
          "Includes all commands from the Regular & Obedience program, along with advanced training such as Heel Walk, Food Refusal, Leash Manners, Leave, Fetch, Discipline Training, and Home Environment Adjustment.",
        recommended: true,
      },
      {
        title: "Customized Command Training (2-3 Months Program)",
        price: "₹10000 per month",
        frequency:
          "Personalized training based on customer-requested commands and specific behavioral goals.",
      },
    ],
  },
  {
    id: "vaccination",
    title: "Vaccination & Preventive Care",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "We provide reliable and professional dog vaccination and deworming services to protect your pet from common diseases and internal parasites. All procedures are carried out under the supervision of experienced and certified veterinary doctors, ensuring safe and effective care for dogs of all breeds and ages.",

    // The "Reusable" Features List
    features: [
      "Timely dog vaccinations as per recommended schedules",
      "Deworming treatments for puppies and adult dogs",
      "Expert veterinary consultation and preventive health guidance",
      "Charges for vaccination and deworming depend on the cost of vaccines, deworming medicines, and the attending doctor’s professional fees.",
      "We focus on preventive healthcare to support your dog’s long-term health, immunity, and overall well-being.",
    ],

    // The "Reusable" Pricing Array
  },
  {
    id: "medical",
    title: "Medical Care & Televet",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "We provide professional veterinary care at the comfort of your home, ensuring your dog receives expert medical attention without stress or travel. Our certified and experienced doctors offer thorough health consultations, diagnosis, and guidance tailored to your pet’s needs.",

    // The "Reusable" Features List
    features: [
      "Home visits by professional veterinary doctors",
      "Comprehensive medical consultation and advice",
      "Diagnosis and treatment recommendations",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      {
        title: "Home Visit Charge",
        price: "₹400",
        frequency: "per visit",
      },
      {
        // title: "Basic + Advanced Training (3 - Months Program)",
        // price: "₹10000",
        frequency:
          "Medical Expenses: Charged separately based on the doctor’s assessment and prescribed treatment or medications",
        // recommended: true,
      },
      {
        // title: "Customized Command Training (2-3 Months Program)",
        // price: "₹10000",
        frequency:
          "We prioritize your pet’s health and well-being by providing reliable, convenient, and compassionate medical care.",
      },
    ],
  },
  {
    id: "boarding",
    title: "Home Boarding & Daycare",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "Our Home Dog Boarding service provides a safe, comfortable, and caring environment for your furry companion while you are away. We focus on personalized attention, proper care, and a home-like atmosphere to ensure your dog feels happy and secure.",

    // The "Reusable" Features List
    features: [
      "We prioritize your dog’s well-being, providing a stress-free and loving environment to keep them happy and healthy during their stay.",
      "Nutritious meals tailored to your dog’s needs",
      "Safe, clean, and comfortable boarding environment",
      "Regular attention, playtime, and supervision",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      { title: "Small & Medium Breeds", price: "₹500", frequency: "Per day" },
      {
        title: "Large & Giant Breeds",
        price: "₹600",
        frequency: "per day",
        recommended: true,
      },
    ],
  },
  {
    id: "consultation",
    title: "General Consultation",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "Our General Consultancy Service offers professional guidance on your dog’s health, behavior, nutrition, and overall well-being. Whether you are a new pet owner or need expert advice, our certified specialists provide practical and reliable recommendations tailored to your dog’s needs.",

    // The "Reusable" Features List
    features: [
      "We focus on supporting you with accurate, expert advice to ensure your dog stays healthy, happy, and well-cared-for.",
    ],

    // The "Reusable" Pricing Array
    pricing: [
      { title: "General Consultancy", price: "₹200", frequency: "Per session" },
      {
        title: "Free Consultancy",

        frequency: "Available for existing customers",
      },
    ],
  },
  {
    id: "food",
    title: "Premium Food & Supplies",
    short: "Professional training and daily walks.",
    colors: { primary: "#007ACC", light: "#E0F5FF" },

    // The "Reusable" Description
    description:
      "We offer a wide range of high-quality dog food and essential accessories to support your pet’s daily needs, health, and happiness. Our products are carefully selected to ensure safety, nutrition, and durability for dogs of all breeds and life stages.",
    // The "Reusable" Features List
    features: [
      "Premium dog food and nutritional supplements",

      "Everyday and specialty dog accessories",
      "Safe, durable dog toys for play and enrichment",

      "Pricing & Delivery Information:",

      "Product prices are based on current market rates",

      "Free doorstep delivery on orders above ₹1,000",

      "For orders below ₹1,000, delivery charges apply as per fuel cost",

      "All deliveries are made directly to your doorstep for your convenience",

      "We aim to provide trusted products, fair pricing, and reliable service to make pet care simple and hassle-free.",

      "Please note: Product availability and prices may vary depending on brand and market conditions.",
    ],

    // The "Reusable" Pricing Array
  },
];

export default servicesDetail;
