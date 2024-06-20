import React from 'react';

interface Message {
  type: 'lista' | 'contacto' | 'otro'; // Tipo de mensaje
  content: string; // Contenido del mensaje
  timestamp: Date; // Fecha y hora del mensaje
}

const messages: Message[] = [
  { type: 'lista', content: 'Mensaje de prueba para una lista', timestamp: new Date() },
  { type: 'contacto', content: 'Hola, ¿cómo estás?', timestamp: new Date() },
  { type: 'otro', content: 'Este es un mensaje de otro tipo', timestamp: new Date() },
];

const MessageHistory: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Historial de Mensajes</h2>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tipo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Mensaje
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fecha
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {messages.map((message, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{message.type}</td>
              <td className="px-6 py-4">{message.content}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {message.timestamp.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageHistory;
