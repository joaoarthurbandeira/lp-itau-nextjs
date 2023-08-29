"use client";

import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburguer Buttom */}
      <button
        onClick={handleNav}
        className="lg:hidden cursor-pointer"
        aria-label="Open Menu">
        <AiOutlineMenu size="30" color="white" />
      </button>
      {/* Mobile Menu Screen */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 flex flex-col justify-center items-center  "
            : "fixed left-[-100%] w-[65%] h-screen top-0 p-10 ease-in duration-500"
        }>
        {/* Close button */}
        <div className="absolute top-4 right-6 p-4" aria-label="Close Menu">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="flex flex-col  gap-12  pt-4  ">
          {/* Navs Items */}
          <nav>
            <ul className="flex  flex-col  gap-12  ">
              <Link href="/você">
                <li onClick={() => setMenuOpen(false)}>
                  <ItemMenu
                    name="Para você"
                    textColor="text-black"
                    arrow={false}
                  />
                </li>
              </Link>
              <Link href="/empresas">
                <li onClick={() => setMenuOpen(false)}>
                  <ItemMenu
                    name="Para empresas"
                    textColor="text-black"
                    arrow={false}
                  />
                </li>
              </Link>
              <Link href="/serviços">
                <li onClick={() => setMenuOpen(false)}>
                  <ItemMenu
                    name="Serviços"
                    textColor="text-black"
                    arrow={false}
                  />
                </li>
              </Link>
              <Link href="/ajuda">
                <li onClick={() => setMenuOpen(false)}>
                  <ItemMenu name="Ajuda" textColor="text-black" arrow={false} />
                </li>
              </Link>
            </ul>
          </nav>
          {/* Search */}
          <div className="">
            <Search
              placeholdercolor="placeholder:text-black"
              textColor="text-black"
              searchcolor="black"
              aria-label="Search"
            />
          </div>
          {/* Social Media */}
          <div className="flex flex-row justify-around pt-10 items-center">
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer"
              color="EC7000"
              aria-label="Instagram"
            />
            <AiOutlineFacebook
              size={30}
              className="cursor-pointer"
              color="EC7000"
              aria-label="Facebook"
            />
            <AiOutlineTwitter
              size={30}
              className="cursor-pointer"
              color="EC7000"
              aria-label="Twitter"
            />
          </div>
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src={Logo} alt="Logo" className="pt-6 mx-auto" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
