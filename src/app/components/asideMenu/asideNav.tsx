'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaChartBar,
  FaWhatsapp,
  FaRegClock,
  FaClipboardList,
  FaHistory,
  FaQuestionCircle,
} from 'react-icons/fa';

const AsideNav = () => {
  const [navWidth, setNavWidth] = useState('200px'); // Initial width

  useEffect(() => {
    const handleResize = () => {
      const newWidth = calculateNavWidth();
      setNavWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateNavWidth = () => {
    // Adjust this logic to define the desired behavior on zoom
    // (e.g., scale proportionately, set minimum and maximum widths)
    const zoomFactor = window.devicePixelRatio || 1; // Account for high-DPI displays
    const baseWidth = 200; // Base width at 100% zoom
    const adjustedWidth = Math.max(baseWidth * (1 - (zoomFactor - 1) * 0.2), 100); // Minimum width of 100px
    return `${adjustedWidth}px`;
  };

  return (
    <nav
      className={`flex flex-col space-y-2 text-black h-full w-full overflow-y-auto rounded-md transition-all duration-300 ease-in-out`}
      style={{ width: navWidth }}
    >
      <ul className="flex flex-col w-full">
        <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md px-2 py-2 text-lg font-roboto w-full">
          <FaChartBar className="mr-2 text-lg" />
          <span>Analytics</span>
        </li>
        <Link href='/sendMessage'>
        <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md px-2 py-2 text-lg font-roboto w-full">
          <FaWhatsapp className="mr-2 text-lg text-[#25D366]" />
          <span>Envío de mensajes</span>
        </li>
        </Link>
        
        <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md px-2 py-2 text-lg font-roboto w-full">
          <FaRegClock className="mr-2 text-lg" />
          <span>Envío programado</span>
        </li>

        <Link href='/list-managment'>
        <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md px-2 py-2 text-lg font-roboto w-full">
          <FaClipboardList className="mr-2 text-lg" />
          <span>Gestión de listas</span>
        </li>
        </Link>
        
        <Link href='/historial'>
        <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md px-2 py-2 text-lg font-roboto w-full">
          <FaHistory className="mr-2 text-lg" />
          <span>Historial</span>
        </li>
        </Link>
        <Link href='/FAQ'>
        <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md px-2 py-2 text-lg font-roboto w-full">
          <FaQuestionCircle className="mr-2 text-lg" />
          <span>Ayuda</span>
        </li>
        </Link>
      </ul>
    </nav>
  );
};

export default AsideNav;
