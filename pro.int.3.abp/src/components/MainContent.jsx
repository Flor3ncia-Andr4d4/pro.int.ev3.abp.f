// src/components/MainContent.jsx

import ProductList from './ProductList.jsx';

// Componente que muestra la lista de productos o un mensaje si no hay productos
export default function MainContent({ products }) {
  // Revisamos si la lista de productos está vacía
  if (products.length === 0) {
    // Si no hay productos, mostramos un mensaje
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-center text-lg text-gray-500 dark:text-gray-400">
          No se encontraron productos.
        </p>
      </div>
    );
  }

  // Si hay productos, mostramos la lista
  return (
    <div className="flex-grow">
      <ProductList products={products} />
    </div>
  );
}
