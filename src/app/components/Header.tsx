// "use client";
import React from "react";
import Image from "next/image";

import { Search } from "./Search";

import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";
import { Container } from "./Container";
import { ItemMenu } from "./ItemMenu";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

export function Header() {
  return (
    <>
      <header className="fixed flex items-center w-full h-20 bg-primary-orange z-50">
        <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0 hidden lg:block"></div>
        <Container>
          <div className="flex flex-1 items-center justify-between  ">
            <div className="flex items-center gap-14 ">
              {/* Logo */}
              <Link href={"/"}>
                <Image src={Logo} alt="Logo" />
              </Link>
              {/* Nav Items */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-12  ">
                  <li>
                    <ItemMenu name="Para você" />
                  </li>
                  <li>
                    <ItemMenu name="Para empresas" />
                  </li>
                  <li>
                    <ItemMenu name="Serviços" />
                  </li>
                  <li>
                    <ItemMenu name="Ajuda" />
                  </li>
                </ul>
              </nav>
            </div>
            {/* Search */}
            <div className="hidden lg:block">
              <Search />
            </div>
          </div>
          {/* Login */}
          <button
            className="lg:flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10 hidden "
            aria-label="Access Account">
            <Image src={IconUser} alt="Icon user" />
            <span className="text-white font-bold">Acessar conta</span>
          </button>
          {/* Mobile menu component */}
          <MobileMenu />
        </Container>
      </header>
    </>
  );
}
