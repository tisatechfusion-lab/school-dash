import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import inviteIcon from "../../assets/icons/others/Add User.svg";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const EVENTS = [
  { date: "2026-04-01", label: "Some Holiday", color: "#439DFD" },
  { date: "2026-04-10", label: "Trip and Visits", color: "#F59E0B" },
  { date: "2026-04-25", label: "Some Holiday", color: "#439DFD" },
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDay(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const today = new Date();
  const [current, setCurrent] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const { year, month } = current;
  const totalDays = getDaysInMonth(year, month);
  const firstDay  = getFirstDay(year, month);
  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

  const prevMonth = () => setCurrent(c => {
    const d = new Date(c.year, c.month - 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });
  const nextMonth = () => setCurrent(c => {
    const d = new Date(c.year, c.month + 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  const getEvent = (day) => {
    if (!day) return null;
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return EVENTS.find(e => e.date === key) || null;
  };

  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  // Previous month trailing days
  const prevMonthDays = getDaysInMonth(year, month - 1);
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevMonthDays - i, current: false });
  for (let d = 1; d <= totalDays; d++) cells.push({ day: d, current: true });
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) cells.push({ day: d, current: false });

  return (
    <div className="bg-white rounded-xl p-6 flex-1">

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-primary-900">Academic Calendar</h2>
          <p className="text-xs text-grey-500 mt-0.5">Scheduled events and administrative milestones</p>
        </div>
        <Button size="sm" variant="primary">
          <Icon src={inviteIcon} size={14} className="text-white" />
          Invite
        </Button>
      </div>

      {/* Month Nav */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="w-7 h-7 rounded-full hover:bg-grey-100 flex items-center justify-center text-grey-600">
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm font-semibold text-primary-900">{monthName} {year}</span>
        <button onClick={nextMonth} className="w-7 h-7 rounded-full hover:bg-grey-100 flex items-center justify-center text-grey-600">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-semibold text-grey-400 py-1">{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          const event = cell.current ? getEvent(cell.day) : null;
          const today_ = cell.current && isToday(cell.day);
          return (
            <div key={i} className="flex flex-col items-center py-1 min-h-[52px]">
              <div className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium
                ${today_ ? "bg-primary-500 text-white" : cell.current ? "text-grey-800 hover:bg-grey-100 cursor-pointer" : "text-grey-300"}`}>
                {cell.day}
              </div>
              {event && (
                <span
                  className="text-white text-[9px] font-medium px-1.5 py-0.5 rounded-md text-center leading-tight mt-0.5 w-full truncate"
                  style={{ backgroundColor: event.color }}
                >
                  {event.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
