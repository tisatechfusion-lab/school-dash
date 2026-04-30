import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const CLASSES = ["Class 1", "Class 2", "Class 3"];

const DATA = {
  "Class 1": { divA: 40, divB: 35, divC: 25, present: 80, absent: 40 },
  "Class 2": { divA: 30, divB: 45, divC: 25, present: 75, absent: 25 },
  "Class 3": { divA: 50, divB: 25, divC: 25, present: 90, absent: 10 },
};

export default function Attendance() {
  const [selected, setSelected] = useState("Class 1");
  const [open, setOpen] = useState(false);
  const d = DATA[selected];

  const chartData = {
    datasets: [{
      data: [d.divA, d.divB, d.divC],
      backgroundColor: ["#22C55E", "#EF4444", "#439DFD"],
      borderWidth: 0,
      hoverOffset: 4,
    }],
  };

  const options = {
    cutout: "72%",
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
  };

  return (
    <div className="bg-white rounded-xl p-6 w-[280px] shrink-0">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-primary-900">Attendance</h2>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 bg-primary-100 text-primary-500 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            {selected}
            <ChevronDown size={12} />
          </button>
          {open && (
            <div className="absolute right-0 top-8 bg-white rounded-xl shadow-lg py-1 z-10 w-28 border border-grey-100">
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

      {/* Donut Chart */}
      <div className="flex justify-center my-4">
        <div style={{ width: 160, height: 160 }}>
          <Doughnut data={chartData} options={options} />
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mb-5">
        {[
          { label: "Div A", color: "#22C55E" },
          { label: "Div B", color: "#EF4444" },
          { label: "Div C", color: "#439DFD" },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-grey-500">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-2 border-t border-grey-100 pt-4">
        {[
          { label: "Total",   value: "100%" },
          { label: "Present", value: `${d.present}%` },
          { label: "Absent",  value: `${d.absent}%`  },
        ].map(item => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm text-grey-500">{item.label}</span>
            <span className="text-sm font-semibold text-primary-900">{item.value}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
