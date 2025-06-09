// Componente para mostrar la lista de productos o un mensaje si no hay productos
import ProductItem from './ProductItem.jsx';

function ProductList(props) {
  // Si no hay productos mostramos mensaje con altura mínima para que no se achique
  if (!props.products || props.products.length === 0) {
    return (
      <div
        style={{
          minHeight: '200px',  // Evita que se achique la zona cuando no hay productos
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#555' // Color gris para texto en modo claro
        }}
      >
        No se encontraron productos
      </div>
    );
  }

  // Si hay productos, los mostramos en una grilla
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {props.products.map(function(product) {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
}

export default ProductList;
