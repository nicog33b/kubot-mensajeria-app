import React from "react";
import AsideNav from "../components/asideMenu/asideNav";
import Logo from "../components/asideMenu/logo";

export default function AsideLeft() {
  return (
    <div className="flex flex-col h-full">
      <section id="asideLeftSection" className="h-full flex flex-col">
        <section id="logo" className="px-3 py-1">
          <div className="cursor-pointer hover:scale-105 transition-transform m-1">
            <Logo />
          </div>
        </section>

        <AsideNav />
      </section>
    </div>
  );
}
