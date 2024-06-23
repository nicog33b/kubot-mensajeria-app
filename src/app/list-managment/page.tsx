'use client'
import React, { useState } from 'react';


interface Contact {
  name: string;
  email: string;

}

interface MessageTemplate {
  content: string;
}

const contacts: Contact[] = [
  { name: 'Juan Pérez', email: 'juan@example.com' },
  { name: 'María Gómez', email: 'maria@example.com' },


];

const messageTemplates: MessageTemplate[] = [
  { content: 'Hola [nombre], ¿cómo estás?' },
  { content: 'Te escribo para informarte sobre...' },



];

const CreateList: React.FC = () => {
  const [listName, setListName] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<MessageTemplate | null>(null);

  const handleContactToggle = (contact: Contact) => {
    setSelectedContacts(prev =>
      prev.includes(contact) ? prev.filter(c => c !== contact) : [...prev, contact]
    );
  };

  const handleTemplateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value);
    setSelectedTemplate(messageTemplates[index]);
  };



  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Crear Nueva Lista</h2>

      {/* Input para el nombre de la lista */}

      <input
        type="text"
        placeholder="Nombre de la lista"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="w-full border rounded-md py-2 px-3 mb-4"
      />

      {/* Selección de contactos */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Contactos</h3>
        {contacts.map((contact, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              checked={selectedContacts.includes(contact)}
              onChange={() => handleContactToggle(contact)}
              className="mr-2"
            />
            {contact.name}
          </label>
        ))}
      </div>

      {/* Selección de plantilla de mensaje */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Plantilla de Mensaje</h3>
        <select value={selectedTemplate ? messageTemplates.indexOf(selectedTemplate) : ''} onChange={handleTemplateChange} className="w-full border rounded-md py-2 px-3">
          <option value="">Seleccionar plantilla</option>
          {messageTemplates.map((template, index) => (
            <option key={index} value={index}>
              {template.content}
            </option>
          ))}
        </select>
      </div>


      {/* Botón para guardar la lista (lógica no incluida) */}
      <button className="bg-blue-300 hover:bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 rounded text-center">
        Guardar Lista
      </button>
    </div>

  );
};

export default CreateList;
