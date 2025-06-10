// Componente de paginación con botones de números y flechas
export default function Pagination(props) {
  // props.currentPage es la página actual
  // props.totalPages es la cantidad total de páginas
  // props.onPageChange es función para cambiar página

  // Si solo hay una página o menos, no mostramos nada
  if (props.totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {/* Botón para ir atrás, deshabilitado en la primera página */}
      <button
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
        className={`px-3 py-1 border rounded ${
          props.currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
        }`}
      >
        ←
      </button>

      {/* Botones con los números de página */}
      {[...Array(props.totalPages)].map((_, i) => {
        const pageNum = i + 1; // Número de página (empieza en 1)
        return (
          <button
            key={pageNum} // key para react
            onClick={() => props.onPageChange(pageNum)} // Cambiar a esta página cuando clickean
            className={
              'px-3 py-1 border rounded ' + 
              (props.currentPage === pageNum
                ? 'bg-blue-600 text-white' // Página activa con color azul y texto blanco
                : 'bg-white dark:bg-gray-800 dark:text-white' // Páginas inactivas, color blanco o gris oscuro
              )
            }
            aria-current={props.currentPage === pageNum ? 'page' : undefined} // Accesibilidad para la página actual
          >
            {pageNum} {/* Mostrar número de página */}
          </button>
        );
      })}

      {/* Botón para ir adelante, deshabilitado en la última página (10) */}
      <button
        onClick={() => props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage === 10}
        className={`px-3 py-1 border rounded ${
          props.currentPage === 10 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
        }`}
      >
        →
      </button>
    </div>
  );
}
