import { useCallback, useEffect, useState } from "react";

import { HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { Disclosure } from "@headlessui/react";
import * as classNames from "classnames";
import { SocialLinks } from "./SocialLinks";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  // TODO dry this shit
  const navigation = [
    { name: "About", href: "/about", current: location === "/about" },
    { name: "Team", href: "#", current: location === "#" },
    { name: "Projects", href: "#", current: location === "#" },
    { name: "Calendar", href: "#", current: location === "#" },
  ];
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const changeToggle = useCallback(() => {
    setToggleNav(!toggleNav);
  }, [toggleNav]);

  useEffect(() => {
    // Fechar NavMenu quando utilizador clicka fora da nav.
    document.addEventListener("click", (e) => {
      if (toggleNav) {
        const target = e.target;
        const navMenu = document.getElementById("navmenu")!;
        if (navMenu && !navMenu.contains(target as Node)) {
          changeToggle();
        }
      }
    });
  }, [toggleNav]);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiXMark className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <RxHamburgerMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 w-full items-center justify-between  sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ml-12 sm:ml-0">
                    <a href="/" className="block bg-gradient-to-r dark:from-black dark:via-red-500 dark:to-black from-white via-cyan-500 to-white bg-clip-text bg-[length:350%] font-monoton text-3xl text-transparent animate-aurora mr-auto">
                      Luis Martins
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-b-cyan-300 dark:border-b-red-600 text-white"
                              : "text-gray-300 hover:border-b-cyan-600 dark:hover:border-b-red-900 hover:text-white",
                            "border-4 border-transparent block  px-3 py-4 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                      <div className="flex items-center">
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium text-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <SocialLinks />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
