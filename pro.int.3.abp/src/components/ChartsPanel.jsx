import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from 'recharts';

function ChartsPanel({ products }) {
  // Contar productos por categoría
  const categoryData = products.reduce((acc, product) => {
    if (acc[product.category]) {
      acc[product.category]++;
    } else {
      acc[product.category] = 1;
    }
    return acc;
  }, {});

  const barChartData = Object.entries(categoryData).map(([category, count]) => ({
    category,
    count,
  }));

  const lineChartData = products.map((product, i) => ({
    name: 'Día ' + (i + 1),
    price: product.price,
  }));

  let bajoStock = 0;
  let stockMedio = 0;
  let stockAlto = 0;

  for (let product of products) {
    if (product.stock <= 10) bajoStock++;
    else if (product.stock <= 50) stockMedio++;
    else stockAlto++;
  }

  const pieChartData = [
    { name: 'Bajo Stock (≤10)', value: bajoStock },
    { name: 'Stock Medio (11-50)', value: stockMedio },
    { name: 'Stock Alto (>50)', value: stockAlto },
  ];

  const colors = ['#FF4E50', '#FFA07A', '#32CD32'];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Visualización de Datos</h2>

      {/* Gráfico de Barras */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Cantidad de productos por categoría
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Líneas */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Evolución de precios
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico Pie con etiqueta simple */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Distribución de productos según stock
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Leyenda simple */}
        <div className="flex justify-center mt-4 space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {pieChartData.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                style={{ backgroundColor: colors[index], width: 16, height: 16, borderRadius: 4 }}
              />
              <span>{entry.name} ({entry.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChartsPanel;
