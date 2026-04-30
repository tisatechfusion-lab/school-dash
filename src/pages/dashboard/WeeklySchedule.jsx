import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CLASSES = ["Class 1", "Class 2", "Class 3"];
const TIMES = ["9:00", "10:00", "11:00", "12:00"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];

const SCHEDULE = {
  "Class 1": {
    Monday:    ["Science",  "Science",       "Maths",         "Computer"],
    Tuesday:   ["Computer", "Computer",      "Social Science","Hindi"],
    Wednesday: ["Drawing",  "Social Science","Gujarati",      "English"],
    Friday:    ["English",  "Drawing",       "Social Science","Maths"],
    Saturday:  ["Maths",    "Gujarati",      "English",       "Drawing"],
  },
  "Class 2": {
    Monday:    ["Maths",    "English",       "Science",       "Hindi"],
    Tuesday:   ["Hindi",    "Maths",         "Computer",      "Science"],
    Wednesday: ["English",  "Science",       "Drawing",       "Gujarati"],
    Friday:    ["Computer", "Social Science","Maths",         "English"],
    Saturday:  ["Science",  "English",       "Gujarati",      "Maths"],
  },
  "Class 3": {
    Monday:    ["English",  "Maths",         "Hindi",         "Science"],
    Tuesday:   ["Science",  "Drawing",       "English",       "Computer"],
    Wednesday: ["Gujarati", "English",       "Social Science","Maths"],
    Friday:    ["Maths",    "Hindi",         "Computer",      "Drawing"],
    Saturday:  ["Drawing",  "Social Science","Science",       "English"],
  },
};

export default function WeeklySchedule() {
  const [selected, setSelected] = useState("Class 1");
  const [open, setOpen]         = useState(false);

  return (
    <div className="bg-white rounded-xl p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-primary-900">Weekly schedule</h2>
          <p className="text-xs text-grey-500 mt-0.5">Class schedule of current semistar</p>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 bg-primary-500 text-white text-xs font-medium px-4 py-2 rounded-full"
          >
            {selected}
            <ChevronDown size={12} />
          </button>
          {open && (
            <div className="absolute right-0 top-9 bg-white rounded-xl shadow-lg py-1 z-10 w-28 border border-grey-100">
              {CLASSES.map(c => (
                <button
                  key={c}
                  onClick={() => { setSelected(c); setOpen(false); }}
                  className="w-full text-left px-4 py-2 text-xs text-grey-700 hover:bg-grey-100"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="w-28" />
              {TIMES.map(t => (
                <th key={t} className="bg-grey-100 text-grey-600 font-semibold text-xs px-4 py-2.5 text-center rounded-lg mx-1">
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DAYS.map(day => (
              <tr key={day}>
                <td className="py-2 pr-3">
                  <div className="bg-grey-100 text-grey-700 text-xs font-semibold px-4 py-2.5 rounded-lg text-center">
                    {day}
                  </div>
                </td>
                {SCHEDULE[selected][day].map((subject, i) => (
                  <td key={i} className="py-2 px-1 text-center text-xs text-grey-700">
                    {subject}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
