import { ChevronDown, ChevronRight } from "lucide-react";

const MEETINGS = [
  { date: 14, title: "Faculty Board Review", time: "02:00 PM", location: "Main Office Conference Room" },
  { date: 14, title: "Faculty Board Review", time: "02:00 PM", location: "Main Office Conference Room" },
  { date: 14, title: "Faculty Board Review", time: "02:00 PM", location: "Main Office Conference Room" },
];

export default function Meetings() {
  return (
    <div className="bg-white rounded-xl p-6 flex-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-primary-900">Meetings</h2>
        <button className="flex items-center gap-1 bg-primary-500 text-white text-xs font-medium px-4 py-2 rounded-full">
          View All
          <ChevronDown size={12} />
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {MEETINGS.map((m, i) => (
          <div key={i} className="flex items-center gap-3">

            {/* Date Badge */}
            <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary-500">{m.date}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-primary-900 truncate">{m.title}</p>
              <p className="text-xs text-grey-500 mt-0.5">{m.time} • {m.location}</p>
            </div>

            {/* Arrow */}
            <div className="w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center shrink-0 cursor-pointer">
              <ChevronRight size={14} className="text-white" />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
