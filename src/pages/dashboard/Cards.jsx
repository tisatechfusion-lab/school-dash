import {
  Mars,
  Venus,
  Users,
  CalendarRange,
  User,
  IdCard,
  PartyPopper,
  UserRoundCog,
} from "lucide-react";
export default function Cards() {
  return (
    <div className="flex gap-6">

      {/* Card-1 */}
      <div className="w-full h-[248px] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-primary-500 text-md">
            <User />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Total Students</p>
            <h2 className="text-3xl font-semibold text-indigo-600">1250</h2>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mars size={18} />
             Male: 640
          </div>
          <div className="flex items-center gap-2">
            <Venus size={18} />
            Female: 610
          </div>
        </div>
      </div>

      {/* Card-2 */}
      <div className="w-full h-[243px] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brightBlue-500 text-gray-50 text-md">
             <IdCard />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Total Staffs</p>
            <h2 className="text-3xl font-semibold text-blue-500">132</h2>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users size={18} />
            Teachers: 90
          </div>
          <div className="flex items-center gap-2">
            <UserRoundCog size={18} />
            Peon:42
          </div>
        </div>
      </div>

      {/* Card-3 */}
      <div className="w-full h-[243px] rounded-2xl p-6 flex flex-col justify-between text-white bg-primary-gradient shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 text-md">
            <PartyPopper />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-whiteOpacity-50">Holiday</p>
            <h2 className="text-2xl text-white font-semibold">
              Independence Day
            </h2>
          </div>
        </div>

        <div className="flex px-4 py-2 gap-2 rounded-full bg-white/20 text-sm w-fit border">
          <CalendarRange size={18} />
          August 15, 2024
        </div>
      </div>
    </div>
  );
}
