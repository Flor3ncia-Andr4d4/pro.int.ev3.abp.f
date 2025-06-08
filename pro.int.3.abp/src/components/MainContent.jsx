// src/components/MainContent.jsx
import ProductList from './ProductList.jsx';

export default function MainContent({ products }) {
  return (
    <div className="flex-grow">
      {products.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-lg text-gray-500 dark:text-gray-400">
            No se encontraron productos.
          </p>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
