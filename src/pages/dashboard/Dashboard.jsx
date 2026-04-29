import WelcomeBanner from "./WellcomeBanner"
import Announcement from "./Announcement"
import Attendance from "./Attendance"
import Calendar from "./Calendar"
import Cards from "./Cards"
import Meetings from "./Meetings"
import WeeklySchedule from "./WeeklySchedule"

const Dashboard = () => {
  return (
    <div>
    <WelcomeBanner />  
    <Cards />
    <Calendar />
    <Attendance />
    <WeeklySchedule />
    <Meetings />
    <Announcement /> 

    </div>
  )
}

export default Dashboard
