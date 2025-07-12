// src/app/page.tsx
"use client";

import { useState } from "react";
import TeacherDetails from "@features/teachers/components/TeacherDetails";
import WeeklySchedule from "@features/teachers/components/WeeklySchedule";
import Qualifications from "@features/teachers/components/Qualifications";
import PaymentForm from "@features/teachers/components/PaymentForm";
import { TeacherInfo, Qualification, ScheduleSlot } from "@features/teachers/types";

const teacher: TeacherInfo = {
  name: "Alynia Allan",
  birthDate: "1989-04-12",
  email: "alynia@example.com",
  phone: "416-123-4567",
  address: "123 Main St, Toronto, Canada",
};

const qualifications: Qualification[] = [
  { type: "Private", name: "Vocal Core", rate: 40 },
  { type: "Private", name: "Vocal Plus", rate: 50 },
  { type: "Group", name: "Instrument Group", rate: 30 },
];

const schedule: ScheduleSlot[] = [
  { day: "Mon", time: "9:00 AM", available: true },
  { day: "Tue", time: "10:00 AM", available: false },
  { day: "Wed", time: "11:00 AM", available: true },
  { day: "Thu", time: "12:00 PM", available: true },
  { day: "Fri", time: "2:00 PM", available: false },
];

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <>
      {selectedTab === "dashboard" && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <TeacherDetails teacher={teacher} />
            <WeeklySchedule slots={schedule} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Qualifications type="Private" qualifications={qualifications.filter(q => q.type === "Private")} />
            <Qualifications type="Group" qualifications={qualifications.filter(q => q.type === "Group")} />
          </div>
          <div className="mt-6">
            <PaymentForm />
          </div>
        </>
      )}
    </>
  );
}
