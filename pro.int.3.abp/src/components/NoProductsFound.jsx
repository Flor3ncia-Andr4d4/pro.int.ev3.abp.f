// Componente para mostrar cuando no hay productos encontrados
// Se asegura de que la pantalla no se achique

function NoProductsFound() {
  return (
    // Contenedor que ocupa toda la pantalla para evitar reducción
    <div
      className="flex justify-center items-center w-full"
      style={{ minHeight: "100vh" }} // Usa altura de toda la pantalla
    >
      {/* Texto rojo con animación de parpadeo */}
      <p className="text-red-600 text-lg font-semibold animate-pulse">
        No se encontraron productos.
      </p>
    </div>
  );
}

export default NoProductsFound;
