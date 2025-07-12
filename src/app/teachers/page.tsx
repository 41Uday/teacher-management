import TeacherDetails from "@features/teachers/components/TeacherDetails";
import Qualifications from "@features/teachers/components/Qualifications";
import WeeklySchedule from "@features/teachers/components/WeeklySchedule";
import { TeacherInfo, Qualification, ScheduleSlot } from "@features/teachers/types";
import Header from "@shared/components/layout/Header";

const dummyTeacher: TeacherInfo = {
  name: "Alynia Allan",
  birthDate: "1989-04-12",
  email: "alynia@example.com",
  phone: "416-123-4567",
  address: "123 Main St, Toronto, Canada",
};

const dummyQualifications: Qualification[] = [
  { type: "Private", name: "Vocal Core", rate: 40 },
  { type: "Private", name: "Vocal Plus", rate: 50 },
  { type: "Group", name: "Instrument Group", rate: 30 },
];

const dummySchedule: ScheduleSlot[] = [
  { day: "Mon", time: "9:00 AM", available: true },
  { day: "Tue", time: "10:00 AM", available: false },
  { day: "Wed", time: "11:00 AM", available: true },
  { day: "Thu", time: "12:00 PM", available: true },
  { day: "Fri", time: "2:00 PM", available: false },
];

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid md:grid-cols-2 gap-6">
        <TeacherDetails teacher={dummyTeacher} />
        <WeeklySchedule slots={dummySchedule} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Qualifications type="Private" qualifications={dummyQualifications} />
        <Qualifications type="Group" qualifications={dummyQualifications} />
      </div>
    </div>
  );
}
