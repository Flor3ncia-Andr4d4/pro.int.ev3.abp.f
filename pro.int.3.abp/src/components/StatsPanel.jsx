export default function StatsPanel({ products }) {
  // Si no hay productos, no mostrar nada
  if (!products.length) return null;

  // Filtrar productos válidos con precio, rating y stock como números
  const validProducts = products.filter(p => {
    return (
      typeof p.price === 'number' &&
      typeof p.rating === 'number' &&
      typeof p.stock === 'number'
    );
  });

  // Cantidad válida para cálculos
  const validCount = validProducts.length;
  if (validCount === 0) return <p>No hay productos válidos para mostrar estadísticas.</p>;

  // Sumar precios para promedio
  const sumPrice = validProducts.reduce((acc, p) => acc + p.price, 0);

  // Sacar lista de precios para máximo y mínimo
  const prices = validProducts.map(p => p.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const avgPrice = (sumPrice / validCount).toFixed(2);

  // Contar productos por categoría
  const productsByCategory = validProducts.reduce((acc, p) => {
    if (acc[p.category]) {
      acc[p.category] = acc[p.category] + 1;
    } else {
      acc[p.category] = 1;
    }
    return acc;
  }, {});

  // Inicializar estadísticas por categoría
  const categoryStats = {};

  validProducts.forEach(p => {
    if (!categoryStats[p.category]) {
      categoryStats[p.category] = {
        totalPrice: 0,
        totalRating: 0,
        count: 0,
        maxPrice: p.price,
        minPrice: p.price,
      };
    }

    const stats = categoryStats[p.category];
    stats.totalPrice += p.price;
    stats.totalRating += p.rating;
    stats.count++;
    if (p.price > stats.maxPrice) stats.maxPrice = p.price;
    if (p.price < stats.minPrice) stats.minPrice = p.price;
  });

  // Contar productos con stock > 50 y rating > 4.5
  const stockOver50 = validProducts.filter(p => p.stock > 50).length;
  const highRating = validProducts.filter(p => p.rating > 4.5).length;

  // Sumar rating para promedio general
  const totalRating = validProducts.reduce((acc, p) => acc + p.rating, 0);
  const avgRating = (totalRating / validCount).toFixed(2);

  return (
    <div className="mt-8 p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow">
      <h2 className="text-xl font-bold mb-4">Estadísticas</h2>
      <ul className="space-y-2">
        <li><strong>Total de productos:</strong> {validCount}</li>
        <li><strong>Precio promedio:</strong> ${avgPrice}</li>
        <li><strong>Precio máximo:</strong> ${maxPrice}</li>
        <li><strong>Precio mínimo:</strong> ${minPrice}</li>
      </ul>

      <h3 className="mt-4 font-bold">Productos por categoría:</h3>
      <ul>
        {Object.entries(productsByCategory).map(([cat, count]) => (
          <li key={cat}>{cat}: {count}</li>
        ))}
      </ul>

      <p><strong>Productos con stock &gt; 50:</strong> {stockOver50}</p>
      <p><strong>Productos con rating &gt; 4.5:</strong> {highRating}</p>

      <h3 className="mt-4 font-bold">Precio promedio por categoría:</h3>
      <ul>
        {Object.entries(categoryStats).map(([cat, stats]) => (
          <li key={cat}>
            {cat}: ${(stats.totalPrice / stats.count).toFixed(2)}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-bold">Producto más caro y más barato por categoría:</h3>
      <ul>
        {Object.entries(categoryStats).map(([cat, stats]) => (
          <li key={cat}>
            {cat}: Máximo ${stats.maxPrice}, Mínimo ${stats.minPrice}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-bold">Promedio de rating por categoría:</h3>
      <ul>
        {Object.entries(categoryStats).map(([cat, stats]) => (
          <li key={cat}>
            {cat}: {(stats.totalRating / stats.count).toFixed(2)}
          </li>
        ))}
      </ul>

      <p><strong>Promedio de rating general:</strong> {avgRating}</p>
    </div>
  );
}
