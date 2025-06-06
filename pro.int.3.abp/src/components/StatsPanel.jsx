export default function StatsPanel({ products }) {
  if (!products.length) return null;

  const total = products.length;

  // Filtros con validación básica
  const validProducts = products.filter(p => 
    typeof p.price === 'number' && 
    typeof p.rating === 'number' && 
    typeof p.stock === 'number'
  );

  const avgPrice = (validProducts.reduce((sum, p) => sum + p.price, 0) / total).toFixed(2);
  const maxPrice = Math.max(...validProducts.map(p => p.price));
  const minPrice = Math.min(...validProducts.map(p => p.price));

  const productsByCategory = {};
  const categoryStats = {};
  let totalRating = 0;

  validProducts.forEach(p => {
    const { category, price, rating } = p;

    // Conteo por categoría
    productsByCategory[category] = (productsByCategory[category] || 0) + 1;

    // Stats por categoría
    if (!categoryStats[category]) {
      categoryStats[category] = {
        totalPrice: 0,
        totalRating: 0,
        count: 0,
        maxPrice: price,
        minPrice: price
      };
    }

    const stats = categoryStats[category];
    stats.totalPrice += price;
    stats.totalRating += rating;
    stats.count++;
    stats.maxPrice = Math.max(stats.maxPrice, price);
    stats.minPrice = Math.min(stats.minPrice, price);

    // Rating global
    totalRating += rating;
  });

  const stockOver50 = validProducts.filter(p => p.stock > 50).length;
  const highRating = validProducts.filter(p => p.rating > 4.5).length;
  const avgRating = (totalRating / total).toFixed(2);

  return (
    <div className="mt-8 p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow">
      <h2 className="text-xl font-bold mb-4"> Estadísticas</h2>
      <ul className="space-y-2">
        <li><strong>Total de productos:</strong> {total}</li>
        <li><strong>Precio promedio:</strong> ${avgPrice}</li>
        <li><strong>Precio máximo:</strong> ${maxPrice}</li>
        <li><strong>Precio mínimo:</strong> ${minPrice}</li>
      </ul>

      <h3 className="mt-4 font-bold"> Productos por categoría:</h3>
      <ul>
        {Object.entries(productsByCategory).map(([category, count]) => (
          <li key={category}>{category}: {count}</li>
        ))}
      </ul>

      <p><strong>Productos con stock &gt; 50:</strong> {stockOver50}</p>
      <p><strong>Productos con rating &gt; 4.5:</strong> {highRating}</p>

      <h3 className="mt-4 font-bold"> Precio promedio por categoría:</h3>
      <ul>
        {Object.entries(categoryStats).map(([category, stats]) => (
          <li key={category}>
            {category}: ${(stats.totalPrice / stats.count).toFixed(2)}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-bold"> Producto más caro y más barato por categoría:</h3>
      <ul>
        {Object.entries(categoryStats).map(([category, stats]) => (
          <li key={category}>
            {category}: Máximo ${stats.maxPrice}, Mínimo ${stats.minPrice}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-bold"> Promedio de rating por categoría:</h3>
      <ul>
        {Object.entries(categoryStats).map(([category, stats]) => (
          <li key={category}>
            {category}: {(stats.totalRating / stats.count).toFixed(2)}
          </li>
        ))}
      </ul>

      <p><strong> Promedio de rating general:</strong> {avgRating}</p>
    </div>
  );
}
