export default function ProductItem({ product }) {
  return (
    <li className="border border-gray-300 dark:border-gray-700 rounded p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="font-semibold mb-2 text-lg">{product.title}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">${product.price}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{product.description}</p>
      <p className="text-yellow-500 font-semibold text-sm">⭐ {product.rating}</p>
    </li>
  );
}
