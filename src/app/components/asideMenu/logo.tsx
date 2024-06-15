// components/Logo.tsx
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-24">
      <img src="/logo.svg" alt="Kubot Logo" className="h-full" />
    </div>
  );
};

export default Logo;
