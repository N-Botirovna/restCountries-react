import { MoonIcon } from "@heroicons/react/solid";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div className={`container sticky top-0 z-10 shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
      <div className="w-3/4 mx-auto flex justify-between items-center py-4">
        <h2 className="text-2xl font-semibold">Where in the world?</h2>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDarkMode}>
          <MoonIcon className="h-6 w-6" />
          <p className="text-xl font-semibold">Dark mode</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

