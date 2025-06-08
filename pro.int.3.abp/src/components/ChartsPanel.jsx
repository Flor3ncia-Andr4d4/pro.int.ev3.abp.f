import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function ChartsPanel({ products }) {
  // **Datos para el Gráfico de Barras: Cantidad de productos por categoría**
  const categoryData = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  const barChartData = Object.entries(categoryData).map(([category, count]) => ({ category, count }));

  // **Datos para el Gráfico de Líneas: Evolución de precios simulada**
  const lineChartData = products.map((product, index) => ({
    name: `Día ${index + 1}`,
    price: product.price,
  }));

  // **Datos para el Pie Chart: Clasificación de stock en niveles**
  const pieChartData = {
    bajoStock: products.filter(product => product.stock <= 10).length,
    stockMedio: products.filter(product => product.stock > 10 && product.stock <= 50).length,
    stockAlto: products.filter(product => product.stock > 50).length,
  };

  const pieChartFormatted = [
    { name: "Bajo Stock (≤10)", value: pieChartData.bajoStock },
    { name: "Stock Medio (11-50)", value: pieChartData.stockMedio },
    { name: "Stock Alto (>50)", value: pieChartData.stockAlto },
  ];

  const colors = ["#FF4E50", "#FFA07A", "#32CD32"];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Visualización de Datos</h2>

      {/* Gráfico de Barras: Cantidad de productos por categoría */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Cantidad de productos por categoría</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Líneas: Evolución de precios */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Evolución de precios</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart: Proporción de productos según niveles de stock */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Distribución de productos según stock</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip />
            <Pie data={pieChartFormatted} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#ffc658">
              {pieChartFormatted.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartsPanel;
