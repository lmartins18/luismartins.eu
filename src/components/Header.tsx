import { useRef, useContext, useCallback, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Header = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const darkTheme = useRef<boolean>();
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);
  const changeToggle = useCallback(() => {
    setToggleNav(!toggleNav);
  }, [toggleNav]);
  function changeTheme() {
    changeCurrentTheme(currentTheme === "light" ? "dark" : "light");
    darkTheme.current = !darkTheme.current;
    localStorage.setItem("theme", darkTheme.current ? "dark" : "light");
  }
  useEffect(() => {
    // Dark mode
    darkTheme.current = localStorage.getItem("theme") === "dark";
    changeCurrentTheme(darkTheme.current ? "dark" : "light");
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
  const NavItem = ({ href, text }: { href: string; text: string }) => (
    <li>
      <a
        className="text-gray-500 transition dark:text-inherit hover:text-gray-500/75 dark:hover:text-red-700"
        href={href}
      >
        {text}
      </a>
    </li>
  );
  return (
    <>
      <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a
                className="block bg-gradient-to-r dark:from-black dark:via-red-700 dark:to-black from-white via-cyan-500 to-white bg-clip-text bg-[length:350%] font-monoton text-3xl text-transparent animate-aurora"
                href="/"
              >
                Luis Martins
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  <NavItem href={"/"} text={"About"} />
                  <NavItem href={"/"} text={"Careers"} />
                  <NavItem href={"/"} text={"History"} />
                  <NavItem href={"/"} text={"Services"} />
                  <NavItem href={"/"} text={"Projects"} />
                  <NavItem href={"/"} text={"Blog"} />
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button
                  title="github"
                  name="github"
                  className="outline-none border-none rounded-lg bg-transparent"
                >
                  <a
                    href="https://github.com/lmartins18"
                    className="text-cyan-600 dark:text-red-600 bg-transparent text-2xl"
                  >
                    <AiFillGithub />
                  </a>
                </button>
                {/* todo dry this */}
                <button
                  title="github"
                  name="github"
                  className="outline-none border-none rounded-lg bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/luis-martinsie/"
                    className="text-cyan-600 dark:text-red-600 bg-transparent text-2xl"
                  >
                    <AiFillLinkedin />
                  </a>
                </button>

                <button
                  id="theme-toggle"
                  title="toggle-dark-mode-button"
                  type="button"
                  className="outline-none border-none rounded-lg text-sm p-2.5 mr-1"
                  onClick={changeTheme}
                >
                  <a className="text-cyan-600 dark:text-red-600 text-xl">
                    {darkTheme.current ? (
                      <BsFillMoonStarsFill id="theme-toggle-light-icon" />
                    ) : (
                      <BsFillSunFill id="theme-toggle-dark-icon" />
                    )}
                  </a>
                </button>
              </div>

              <div className="block md:hidden">
                <button
                  title="btn"
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  onClick={changeToggle}
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
