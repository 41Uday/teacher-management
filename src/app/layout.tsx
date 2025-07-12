import "./globals.css";
import Sidebar from "@/shared/components/layout/Sidebar";

export const metadata = {
  title: "Teacher Management Interface",
  description: "Modern UI for managing teachers and schedules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="flex flex-col sm:flex-row min-h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Content area */}
            <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
              <div className="mt-4 space-y-6 animate-fade-in">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
