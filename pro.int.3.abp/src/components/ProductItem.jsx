export default function ProductItem({ product }) {
  // Mostrar cada producto en una caja con borde y fondo que cambia según el modo
  return (
    <li className="border border-gray-300 dark:border-gray-700 rounded p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
      {/* Imagen del producto con tamaño fijo y bordes redondeados */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      
      {/* Título del producto, texto en negrita */}
      <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-gray-100">
        {product.title}
      </h3>
      
      {/* Precio en azul, con buen contraste en modo oscuro */}
      <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">
        ${product.price}
      </p>
      
      {/* Descripción con texto gris, más claro en modo oscuro */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {product.description}
      </p>
      
      {/* Rating con estrella amarilla */}
      <p className="text-yellow-500 font-semibold text-sm">
        ⭐ {product.rating}
      </p>
    </li>
  );
}
