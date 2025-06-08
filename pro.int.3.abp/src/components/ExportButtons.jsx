// src/components/ExportButtons.jsx
export default function ExportButtons({ data }) {
  const exportToJSON = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'productos-filtrados.json';
    a.click();
  };

  return (
    <div className="mt-4">
      <button
        onClick={exportToJSON}
        className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
      >
        Exportar a JSON
      </button>
    </div>
  );
}
