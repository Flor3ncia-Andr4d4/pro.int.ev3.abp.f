import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import ToggleButton from './components/ToggleButton.jsx';
import StatsPanel from './components/StatsPanel.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [sortBy, setSortBy] = useState('price'); // Por defecto en precio
  const [sortOrder, setSortOrder] = useState('asc');
  const [showStats, setShowStats] = useState(false);
  const [categories, setCategories] = useState([]);

  const darkModeRef = useRef(false);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=100');
        setProducts(response.data.products);

        const uniqueCategories = ['Todos', ...new Set(response.data.products.map(p => p.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    getProducts();

    // Detectar si el sistema está en modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkModeRef.current = true;
      document.documentElement.classList.add('dark');
      forceRender(n => n + 1);
    }
  }, []);

  const toggleDarkMode = () => {
    darkModeRef.current = !darkModeRef.current;
    if (darkModeRef.current) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    forceRender(n => n + 1);
  };

  // 🧠 Filtro + Búsqueda + Ordenamiento combinado
  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => categoryFilter === 'Todos' ? true : product.category === categoryFilter)
    .sort((a, b) => {
      if (!sortBy) return 0;

      const aValue = Number(a[sortBy]);
      const bValue = Number(b[sortBy]);

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">Explorador de Productos</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <ToggleButton darkMode={darkModeRef.current} onToggle={toggleDarkMode} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
        {/* Select de categoría */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Select de campo de ordenamiento */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition"
        >
          <option value="">Ordenar por...</option>
          <option value="price">Precio</option>
          <option value="rating">Rating</option>
        </select>

        {/* Select de ascendente/descendente */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-3 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      <div className="flex-grow">
        {filteredProducts.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-lg text-gray-500 dark:text-gray-400">
              No se encontraron productos.
            </p>
          </div>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>

      <button
        onClick={() => setShowStats(!showStats)}
        className="mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {showStats ? 'Ocultar Estadísticas' : 'Mostrar Estadísticas'}
      </button>

      {showStats && <StatsPanel products={filteredProducts} />}
    </div>
  );
}

export default App;
