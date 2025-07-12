"use client";

import { useState } from "react";
import Card from "@/shared/components/ui/Card";
import Input from "@/shared/components/ui/Input";
import Button from "@/shared/components/ui/Button";
import Loader from "@/shared/components/ui/Loader";
import {
  CreditCard,
  Calendar,
  User,
  IndianRupee,
  FileText,
} from "lucide-react";

const PaymentForm = () => {
  // Initial form state for all input fields
  const [form, setForm] = useState({
    studentName: "",
    amount: "",
    date: "",
    method: "",
    notes: "",
  });

  // Tracks submission status: for showing loading, error, or success messages
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Handles change for all form inputs (text, select, textarea)
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus("idle"); // Reset status if user is editing again
  };

  // Handles form submission and basic validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { studentName, amount, date, method } = form;

    // Trim and check required fields
    if (
      !studentName.trim() ||
      !amount.trim() ||
      !date.trim() ||
      !method.trim()
    ) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate async payment submission (e.g., API call)
    setTimeout(() => {
      // Reset form after success
      setForm({
        studentName: "",
        amount: "",
        date: "",
        method: "",
        notes: "",
      });
      setStatus("success");
    }, 1500);
  };

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Payment Interface
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* Student Name */}
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Student Name
            </label>
            <div className="relative">
              {/* Icon inside input */}
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="studentName"
                name="studentName"
                type="text"
                placeholder="Enter student name"
                value={form.studentName}
                onChange={handleChange}
                className="pl-10" // padding-left to accommodate icon
              />
            </div>
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Amount
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={form.amount}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Payment Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          {/* Payment Method (dropdown) */}
          <div>
            <label
              htmlFor="method"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Payment Method
            </label>
            <select
              id="method"
              name="method"
              value={form.method}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select method</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Notes (optional textarea) */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Notes
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <textarea
                id="notes"
                name="notes"
                placeholder="Any remarks..."
                value={form.notes}
                onChange={handleChange}
                className="w-full px-3 py-2 pl-10 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Button with loading state */}
        <Button
          type="submit"
          className="w-full mt-4"
          disabled={status === "loading"}
          variant="primary"
        >
          {status === "loading" ? <Loader /> : "Submit Payment"}
        </Button>

        {/* Feedback messages based on submission result */}
        {status === "success" && (
          <p className="text-green-600 text-sm pt-2">
            Payment submitted successfully.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm pt-2">
            Please fill all required fields.
          </p>
        )}
      </form>
    </Card>
  );
};

export default PaymentForm;
