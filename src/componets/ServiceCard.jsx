import { Link } from "react-router-dom";

export default function ServiceCard({ s }) {
  const Icon = s.icon; // get the icon component

  return (
    <Link to={`/services/${s.id}`} className="block group h-full">
      <div
        className="
          bg-white 
          rounded-2xl 
          p-8
          shadow-md
          border-2 border-[#B3E0FF]
          transition-all 
          duration-500
          group-hover:shadow-2xl 
          group-hover:-translate-y-3 
          group-hover:border-[#4AB3FF]
          group-hover:scale-105
          h-full
          flex flex-col
          cursor-pointer
        "
      >
        {/* ICON */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D7ECFF] to-[#B9DFFF] flex items-center justify-center text-4xl mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
          {Icon ? <Icon /> : "🐾"}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-[#007ACC] mb-3 group-hover:text-[#005EA1] transition-colors duration-300">
          {s.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">{s.short}</p>

        {/* CTA ARROW */}
        <div className="text-[#007ACC] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm">
          Learn more <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
}
