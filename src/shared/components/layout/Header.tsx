export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b pb-2 mb-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
        Teacher Management
      </h1>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Admin Panel
      </span>
    </header>
  );
}
