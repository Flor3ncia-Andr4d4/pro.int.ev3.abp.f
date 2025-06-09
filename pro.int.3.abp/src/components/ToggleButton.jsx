// Importamos los íconos de sol y luna para el botón
import { FaSun, FaMoon } from 'react-icons/fa';

function ToggleButton(props) {
  // props.darkMode indica si está en modo oscuro
  // props.onToggle es la función que cambia el modo

  return (
    <button
      onClick={props.onToggle} // cuando clickeamos se activa la función para cambiar el modo
      className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 hover:shadow-md transition"
      aria-label="Toggle dark mode"
    >
      {/* Si está modo oscuro mostramos el sol, si no la luna */}
      {props.darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      {/* Texto que cambia según el modo */}
      {props.darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}

export default ToggleButton;
