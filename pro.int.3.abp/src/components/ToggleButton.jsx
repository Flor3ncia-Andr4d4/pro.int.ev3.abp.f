import { FaSun, FaMoon } from 'react-icons/fa';

export default function ToggleButton({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 hover:shadow-md transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}
