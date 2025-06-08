import { useEffect, useState, useRef, Suspense, lazy } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import ToggleButton from './components/ToggleButton.jsx';

import Pagination from './components/Pagination.jsx';
import Filters from './components/Filters.jsx';
import Message from './components/Message.jsx';
import MainContent from './components/MainContent.jsx';

// 👇 Carga diferida de los paneles pesados
const StatsPanel = lazy(() => import('./components/StatsPanel.jsx'));
const ChartsPanel = lazy(() => import('./components/ChartsPanel.jsx'));

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showStats, setShowStats] = useState(false);
  const [categories, setCategories] = useState([]);
  const darkModeRef = useRef(false);
  const [, forceRender] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const [message, setMessage] = useState(null);

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

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkModeRef.current = true;
      document.documentElement.classList.add('dark');
      forceRender(n => n + 1);
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, sortBy, sortOrder]);

  const toggleDarkMode = () => {
    darkModeRef.current = !darkModeRef.current;
    document.documentElement.classList.toggle('dark', darkModeRef.current);
    forceRender(n => n + 1);
  };

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => categoryFilter === 'Todos' ? true : product.category === categoryFilter)
    .sort((a, b) => {
      if (!sortBy) return 0;
      const aValue = Number(a[sortBy]);
      const bValue = Number(b[sortBy]);
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleExportJSON = () => {
    try {
      const dataStr = JSON.stringify(filteredProducts, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "products.json";
      link.click();
      URL.revokeObjectURL(url);
      setMessage({ type: 'success', text: 'Exportación exitosa.' });
    } catch (error) {
      console.error('Error al exportar JSON:', error);
      setMessage({ type: 'error', text: 'Error al exportar JSON.' });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">Explorador de Productos</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <ToggleButton darkMode={darkModeRef.current} onToggle={toggleDarkMode} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <button
          onClick={handleExportJSON}
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
        >
          Exportar JSON
        </button>
      </div>

      <Message message={message} />

      <Filters
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <MainContent products={currentProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <button
        onClick={() => setShowStats(!showStats)}
        className="mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {showStats ? 'Ocultar Estadísticas' : 'Mostrar Estadísticas'}
      </button>

      {showStats && (
        <Suspense fallback={<p className="mt-4 text-center text-gray-600 dark:text-gray-300">Cargando estadísticas...</p>}>
          <StatsPanel products={filteredProducts} />
          <ChartsPanel products={filteredProducts} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
