// Componente para mostrar cuando no hay productos encontrados
// Tiene un texto rojo con una animación simple que hace que parpadee suavemente

function NoProductsFound() {
  return (
    // Contenedor para centrar el texto y darle espacio mínimo de alto
    <div
      style={{ minHeight: '200px' }}  // Esto evita que el contenedor se achique mucho
      className="flex justify-center items-center" // Usa flexbox para centrar contenido horizontal y verticalmente
    >
      {/* Texto que indica que no hay productos */}
      <p
        className="text-red-600 text-lg font-semibold animate-pulse" // Color rojo, tamaño mediano, negrita y animación de parpadeo
      >
        No se encontraron productos.
      </p>
    </div>
  );
}

export default NoProductsFound;
