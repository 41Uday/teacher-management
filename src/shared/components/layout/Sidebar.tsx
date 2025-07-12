"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  LayoutDashboard,
  Users,
  Calendar,
  CreditCard,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Teachers", href: "/teachers", icon: Users },
  { label: "Schedule", href: "/schedule", icon: Calendar },
  { label: "Payments", href: "/payments", icon: CreditCard },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top bar for mobile */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Admin</h1>
        <button onClick={toggleSidebar} className="text-gray-700 dark:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar for all screen sizes */}
      <aside
        className={clsx(
          "fixed sm:static z-40 sm:z-auto inset-y-0 left-0 w-60 transform bg-white dark:bg-gray-900 border-r px-4 py-6 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        )}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 hidden sm:block">
          Admin
        </h2>

        <nav className="space-y-2">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeSidebar}
                className={clsx(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium",
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-30"
        />
      )}
    </>
  );
}
