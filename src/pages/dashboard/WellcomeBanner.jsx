import bannerBg from "../../assets/images/welcomebanner.png";
import adminImg from "../../assets/images/profile.png";
import { CalendarDays, Clock3 } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div
      className="w-full h-[280px] rounded-3xl overflow-hidden p-6 flex items-center gap-6 text-text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="w-[160px] h-[160px] rounded-xl overflow-hidden shrink-0">
        <img
          src={adminImg}
          alt="admin"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold drop-shadow-sm">
            Welcome back, Admin!
          </h1>
          <p className="text-sm opacity-90">
            Here's what's happening in your school today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex px-4 py-2 rounded-full bg-white/10 text-sm gap-2">
            <CalendarDays size={18} />
            <span> Tuesday, April 14, 2026</span>
          </div>
          <div className="flex px-4 py-2 rounded-full bg-white/10 text-sm gap-2">
            <Clock3 size={18} />
            <span>04:21 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
