import { TeacherInfo } from "../types";
import Card from "@shared/components/ui/Card";

interface Props {
  teacher: TeacherInfo;
}

const TeacherDetails = ({ teacher }: Props) => {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Teacher Details
      </h2>
      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p><span className="font-medium">Name:</span> {teacher.name}</p>
        <p><span className="font-medium">DOB:</span> {teacher.birthDate}</p>
        <p><span className="font-medium">Email:</span> {teacher.email}</p>
        <p><span className="font-medium">Phone:</span> {teacher.phone}</p>
        <p><span className="font-medium">Address:</span> {teacher.address}</p>
      </div>
    </Card>
  );
};

export default TeacherDetails;
