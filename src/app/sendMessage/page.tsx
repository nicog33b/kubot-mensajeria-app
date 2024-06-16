import React from 'react';

const data = [
  { number: '-34655340037', name: 'Fernando', lastName: 'Sons' },
  { number: '+1(700) 303-352', name: 'Argonis', lastName: 'Lara' },
  { number: '+1(700) 383-05', name: 'Juan', lastName: 'US' },
];

const MessageComponent = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto w-full">
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

      <div className="flex flex-col mt-4">
        <textarea
          className="flex-grow p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe tu mensaje..."
        />
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Enviar
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
