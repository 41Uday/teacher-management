import WeeklySchedule from "@features/teachers/components/WeeklySchedule";
import { ScheduleSlot } from "@features/teachers/types";
import Header from "@shared/components/layout/Header";

const dummySchedule: ScheduleSlot[] = [
  { day: "Mon", time: "9:00 AM", available: true },
  { day: "Tue", time: "10:00 AM", available: false },
  { day: "Wed", time: "11:00 AM", available: true },
  { day: "Thu", time: "12:00 PM", available: true },
  { day: "Fri", time: "2:00 PM", available: false },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <Header />
      <WeeklySchedule slots={dummySchedule} />
    </div>
  );
}
