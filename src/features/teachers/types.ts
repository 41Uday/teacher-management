export interface TeacherInfo {
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
}

export interface Qualification {
  type: "Private" | "Group";
  name: string;
  rate: number;
}

export interface ScheduleSlot {
  day: string;
  time: string;
  available: boolean;
}
