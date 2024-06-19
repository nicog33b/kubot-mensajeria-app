import React from 'react';

const data = [
  { number: '-34655340037', name: 'Fernando', lastName: 'Sons' },
  { number: '+1(700) 303-352', name: 'Argonis', lastName: 'Lara' },
  { number: '+1(700) 383-05', name: 'Juan', lastName: 'US' },
];

const MessageComponent = () => {
  return (
    <div className="flex flex-col w-full h-screen p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Envío de mensajes</h1>
          <p className="text-sm text-gray-600">Envía mensajes personalizados a todos tus contactos</p>
        </div>
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <p className="font-semibold">Martín</p>
            <p className="text-sm text-gray-600">5435435437617</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Desconectar WhatsApp
          </button>
        </div>
      </div>

      {/* Botones */}
      <div className="flex justify-between mb-4">
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Agregar
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
            Seleccionar lista
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
            Limpiar
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
        <div className="overflow-x-auto w-full md:w-3/5">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="px-4 py-2 text-left">Número</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Apellido</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.number} className="border-b border-gray-200">
                  <td className="px-4 py-2 text-left">{item.number}</td>
                  <td className="px-4 py-2 text-left">{item.name}</td>
                  <td className="px-4 py-2 text-left">{item.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col w-full md:w-2/5">
          <textarea
            className="flex-grow p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu mensaje..."
          />
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Enviar
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
              Guardar plantilla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
