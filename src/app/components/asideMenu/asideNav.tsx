import React from 'react';
import { FaChartBar, FaWhatsapp, FaRegClock, FaClipboardList, FaHistory, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

const AsideNav = () => {
  return (
    <ul className="flex flex-col space-y-4 text-black px-1 py-2">
      <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md w-full px-2 py-3 text-sm font-serif ">
        <FaChartBar className="mr-2 text-xl" />
        <span>Analytics</span>
      </li>
      <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md w-full px-2 py-3 text-sm font-serif ">
        <FaWhatsapp className="mr-2 text-xl text-[#25D366]" />
        <span>Envío de mensajes</span>
      </li>
      <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md w-full px-2 py-3 text-sm font-serif ">
        <FaRegClock className="mr-2 text-xl" />
        <span>Envío programado</span>
      </li>
      <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md w-full px-2 py-3 text-sm font-serif ">
        <FaClipboardList className="mr-2 text-xl" />
        <span>Gestión de listas</span>
      </li>
      <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md w-full px-2 py-3 text-sm font-serif">
        <FaHistory className="mr-2 text-xl" />
        <span>Historial</span>
      </li>
     
      <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md w-full px-2 py-3 text-sm font-serif">
        <FaQuestionCircle className="mr-2 text-xl" />
        <span>Ayuda</span>
      </li>
    </ul>
  );
};

export default AsideNav;
