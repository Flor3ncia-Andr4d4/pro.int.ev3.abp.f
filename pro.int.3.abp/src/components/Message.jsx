// src/components/Message.jsx

// Este componente muestra un mensaje de éxito o error
export default function Message({ message }) {
  // Si no hay mensaje, no mostrar nada
  if (!message) {
    return null;
  }

  // Elegir colores según el tipo de mensaje
  let styleClass = '';
  if (message.type === 'success') {
    styleClass = 'bg-green-200 text-green-800'; // colores para éxito
  } else {
    styleClass = 'bg-red-200 text-red-800'; // colores para error
  }

  return (
    <div className={'mb-4 px-4 py-2 rounded text-center ' + styleClass}>
      {message.text}
    </div>
  );
}
