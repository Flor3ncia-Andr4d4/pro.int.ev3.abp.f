export default function ProductItem({ product }) {
  return (
    <li className="border border-gray-300 dark:border-gray-700 rounded p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold mb-2">{product.title}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-bold">${product.price}</p>
    </li>
  );
}
