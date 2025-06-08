// src/components/Message.jsx

// Componente para mostrar un mensaje de éxito o error
export default function Message({ message }) {
  // Si no hay mensaje, no se muestra nada
  if (!message) return null;

  // Elegimos el estilo según el tipo de mensaje (éxito o error)
  const className = message.type === 'success'
    ? 'bg-green-200 text-green-800'
    : 'bg-red-200 text-red-800';

  return (
    <div className={`mb-4 px-4 py-2 rounded text-center ${className}`}>
      {message.text}
    </div>
  );
}
