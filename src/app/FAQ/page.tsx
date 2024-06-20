'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Cómo puedo crear una nueva lista?",
    answer: "Simplemente escribe el nombre de la lista en el campo de texto y haz clic en el botón 'Crear Lista'.",
  },
  {
    question: "¿Puedo editar el nombre de una lista después de crearla?",
    answer: "Sí, puedes editar el nombre de una lista haciendo clic en el icono de lápiz que aparece junto a ella.",
  },
  {
    question: "¿Hay un límite en el número de listas que puedo crear?",
    answer: "No, puedes crear tantas listas como necesites.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <ChevronDownIcon
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
