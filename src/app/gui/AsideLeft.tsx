import React from "react";
import AsideNav from "../components/asideMenu/asideNav";
import Logo from "../components/asideMenu/logo";
import ProfileInfo from "../components/asideMenu/profileInfo";

export default function AsideLeft() {
  return (
    <div>
      <section id="asideLeftSection">
        <section id="logo" className="px-6 py-3">
          <div className="cursor-pointer hover:scale-110 m-2">
            <Logo />
          </div>
        </section>
        <AsideNav />
        <div className="mt-20 px-3">
          <ProfileInfo name="Federico Gonzales" initials="FG" />
        </div>
      </section>
    </div>
  );
}
