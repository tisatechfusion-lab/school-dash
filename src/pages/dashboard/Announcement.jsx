import { ChevronDown } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    tag: "A New Policy",
    tagColor: "bg-green-100 text-green-600",
    time: "Published 2 hours ago",
    title: "Updated Laboratory Safety Protocols",
    desc: "Please ensure that all staff members are informed about the new chemical storage regulations that will come into effect next Monday...",
  },
  {
    tag: "Event",
    tagColor: "bg-blue-100 text-blue-600",
    time: "Published 4 hours ago",
    title: "Updated Laboratory Safety Protocols",
    desc: "Please ensure that all staff members are informed about the new chemical storage regulations that will come into effect next Monday...",
  },
];

export default function Announcement() {
  return (
    <div className="bg-white rounded-xl p-6 flex-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-primary-900">Announcement</h2>
        <button className="flex items-center gap-1 bg-primary-500 text-white text-xs font-medium px-4 py-2 rounded-full">
          View All
          <ChevronDown size={12} />
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-5">
        {ANNOUNCEMENTS.map((a, i) => (
          <div key={i} className="flex flex-col gap-2">

            {/* Tag + Time */}
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${a.tagColor}`}>
                {a.tag}
              </span>
              <span className="text-xs text-grey-400">{a.time}</span>
            </div>

            {/* Title */}
            <p className="text-sm font-bold text-primary-900">{a.title}</p>

            {/* Description */}
            <p className="text-xs text-grey-500 leading-relaxed">{a.desc}</p>

            {/* Divider — last item pe nahi */}
            {i < ANNOUNCEMENTS.length - 1 && (
              <div className="border-b border-grey-100 mt-1" />
            )}

          </div>
        ))}
      </div>

    </div>
  );
}
