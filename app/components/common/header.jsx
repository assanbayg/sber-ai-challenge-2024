"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    setIsSticky(scrollPosition > 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full py-7 ${
        isSticky ? "bg-white opacity-80" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="relative mx-auto flex h-12 w-3/4 items-center justify-between">
        <p className="mr-10 -translate-x-1/2 transform font-bold">Pandas</p>
        {/* бургер меню видно только в мобильной версии */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
        </div>
        {/* ссылки отображены только в десктопе */}
        <div className="hidden w-full items-center justify-around md:flex">
          <Link href="/#hero" className="hover:underline">
            Главная
          </Link>
          <Link href="/#courses" className="hover:underline">
            Курсы
          </Link>
          <Link href="/#model" className="hover:underline">
            Контакты{" "}
          </Link>
          <button className="rounded-xl bg-blue-500 px-6 py-3 text-white shadow-sm hover:bg-blue-600">
            Логин
          </button>
        </div>
      </div>
      {/* мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0">
          <div
            className="z-10 flex h-screen flex-col items-center justify-center space-y-4 bg-blue-200 p-6 text-3xl opacity-90"
            onClick={(e) => {
              toggleMenu();
            }}
          >
            <Link href="/#hero" onClick={toggleMenu}>
              Главная
            </Link>
            <Link href="/#courses" onClick={toggleMenu}>
              Курсы
            </Link>
            <Link href="/#model" onClick={toggleMenu}>
              Контакты
            </Link>
            <button className="rounded-xl bg-blue-500 px-6 py-3 text-white shadow-sm hover:bg-blue-600">
              Логин
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
