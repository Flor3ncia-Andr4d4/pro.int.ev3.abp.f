// Componente para filtros y ordenamiento
export default function Filters(props) {
  // props.categories: lista de categorías para filtrar
  // props.categoryFilter: categoría seleccionada
  // props.setCategoryFilter: función para cambiar categoría
  // props.sortBy: campo para ordenar
  // props.setSortBy: función para cambiar campo de orden
  // props.sortOrder: orden asc o desc
  // props.setSortOrder: función para cambiar orden

  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
      {/* Selector de categoría */}
      <select
        value={props.categoryFilter}
        onChange={(e) => props.setCategoryFilter(e.target.value)}
        className="px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition"
      >
        {/* Mostrar todas las categorías */}
        {props.categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Selector para ordenar por precio o rating */}
      <select
        value={props.sortBy}
        onChange={(e) => props.setSortBy(e.target.value)}
        className="px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition"
      >
        <option value="">Ordenar por...</option>
        <option value="price">Precio</option>
        <option value="rating">Rating</option>
      </select>

      {/* Selector para ordenar ascendente o descendente */}
      <select
        value={props.sortOrder}
        onChange={(e) => props.setSortOrder(e.target.value)}
        className="px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition"
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
}
