import { FaDog, FaWalking, FaCut, FaSyringe, FaStethoscope, FaHome, FaUtensils, FaHeart, FaComments } from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";

const services = [
  {
    id: "training",
    title: "Obedience & Behaviour Training",
    short: "Positive, reward-based training for dogs of all ages.",
    details:
      "Structured courses for puppy basics, recall, leash manners and behaviour modification. Sessions are one-on-one or group-based with certified trainers.",
    icon: FaDog, // training icon — dog silhouette
  },
  {
    id: "walking",
    title: "Regular Walks & Playtime",
    short: "Regular walks and adventurous hikes to keep your dog fit and happy.",
    details:
      "Choose solo walks or small-group social walks. GPS route summaries provided after each session.",
    icon: FaWalking, // walking icon
  },
  {
    id: "grooming",
    title: "Grooming & Styling",
    short: "Full grooming: bath, haircut, nail trim, ear clean and styling.",
    details:
      "Professional groomers using gentle products. Packages for all coat types and breed-specific styles.",
    icon: FaCut, // scissors icon for grooming
  },
  {
    id: "vaccination",
    title: "Vaccination & Preventive Care",
    short: "Vaccination reminders and administration by licensed vets.",
    details:
      "Core vaccine schedule, boosters, flea/tick prevention, and heartworm prophylaxis administered in-clinic or at home.",
    icon: FaSyringe, // syringe icon for vaccination
  },
  {
    id: "medical",
    title: "Medical Care & Televet",
    short: "Checkups, diagnostics and treatment with licensed veterinarians.",
    details:
      "Routine checkups, minor procedures, medication management and telemedicine consults.",
    icon: FaStethoscope, // stethoscope icon for medical
  },
  {
    id: "boarding",
    title: "Home Boarding & Daycare",
    short: "Comfortable home boarding or day stay with attentive carers.",
    details:
      "Small group sizes, daily updates with photos, and custom feeding/medication routines.",
    icon: FaHome, // home icon for boarding
  },
  {
    id: "food",
    title: "Premium Food & Supplies",
    short: "High-quality food, treats and essential supplies delivered to your door.",
    details:
      "Curated range of food (grain-free, raw, special diet), accessories, and supplements.",
    icon: GiDogBowl, // dog bowl icon for food & supplies
  },
  {
    id: "mating",
    title: "Dog Mating",
    short: "Home visits from vets for routine and urgent care.",
    details:
      "Convenient house calls for exams, wound care, and urgent assessments.",
    icon: FaHeart, // heart icon for mating
  },
  {
    id: "consultation",
    title: "General Consultation",
    short: "Home visits from vets for routine and urgent care.",
    details:
      "Convenient house calls for exams, wound care, and urgent assessments.",
    icon: FaComments, // comments/chat icon for consultation
  },
];

export default services;
