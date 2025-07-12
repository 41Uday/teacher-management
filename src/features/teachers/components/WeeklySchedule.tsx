import Card from "@shared/components/ui/Card";
import { ScheduleSlot } from "../types";

interface Props {
  slots: ScheduleSlot[];
}

const WeeklySchedule = ({ slots }: Props) => {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Weekly Schedule
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
        {slots.map((slot, idx) => (
          <div
            key={idx}
            className={`rounded-md p-3 border ${
              slot.available
                ? "bg-green-100 dark:bg-green-800 text-green-800 dark:text-white"
                : "bg-red-100 dark:bg-red-800 text-red-800 dark:text-white"
            }`}
          >
            <p className="font-medium">{slot.day}</p>
            <p>{slot.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeeklySchedule;
