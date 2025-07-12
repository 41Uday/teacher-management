import Card from "@shared/components/ui/Card";
import { Qualification } from "../types";

interface Props {
  type: "Private" | "Group";
  qualifications: Qualification[];
}

const Qualifications = ({ type, qualifications }: Props) => {
  const filtered = qualifications.filter((q) => q.type === type);
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        {type} Qualifications
      </h2>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {filtered.map((q, idx) => (
          <li key={idx}>
            <span className="font-medium">{q.name}</span> - ${q.rate}/hr
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Qualifications;
