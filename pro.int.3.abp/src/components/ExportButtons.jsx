export default function ExportButtons({ data }) {
  // Función para exportar los datos a un archivo JSON
  function exportToJSON() {
    // Convertir los datos a formato JSON con indentación
    const json = JSON.stringify(data, null, 2);

    // Crear un "blob" para el archivo JSON
    const blob = new Blob([json], { type: 'application/json' });

    // Crear una URL temporal para descargar el archivo
    const url = URL.createObjectURL(blob);

    // Crear un link para descargar el archivo
    const a = document.createElement('a');
    a.href = url;               // Poner la URL en el link
    a.download = 'productos-filtrados.json';  // Nombre del archivo
    a.click();                  // Simular el clic para descargar

    // Quitar la URL para liberar memoria
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={exportToJSON}>
        Exportar a JSON
      </button>
    </div>
  );
}
