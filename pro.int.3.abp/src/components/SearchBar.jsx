// Componente sencillo para barra de búsqueda
// Cambia estilos para modo claro y oscuro con clases Tailwind
// Siempre mantiene el mismo ancho para que no se achique cuando no hay resultados

function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={props.searchTerm}
      onChange={(e) => props.onSearchChange(e.target.value)}
      className="
        px-2 py-2              /* padding */
        rounded                /* bordes redondeados */
        border                 /* borde */
        border-gray-400        /* borde gris claro modo claro */
        dark:border-gray-600   /* borde gris oscuro modo oscuro */
        text-gray-900          /* texto oscuro modo claro */
        dark:text-gray-100     /* texto claro modo oscuro */
        bg-white               /* fondo blanco modo claro */
        dark:bg-gray-800       /* fondo oscuro modo oscuro */
        w-full                 /* ancho total */
        max-w-xs               /* ancho máximo 300px aprox */
        transition-colors      /* transición suave para cambio de color */
        focus:outline-none     /* quitar outline por defecto */
        focus:ring-2           /* anillo de enfoque */
        focus:ring-blue-500    /* color azul anillo enfoque */
        focus:border-blue-500  /* borde azul enfoque */
      "
    />
  );
}

export default SearchBar;
