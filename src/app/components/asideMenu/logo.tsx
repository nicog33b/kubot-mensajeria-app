import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-20 md:h-24">
      <Link href='/'>
      <Image width={600} height={600} src="/logo.svg" alt="Kubot Logo" className="rounded w-full h-full object-contain" />
      </Link>
    </div>
  );
};

export default Logo;
