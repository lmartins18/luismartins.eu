import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { NavBarButton } from "./NavBarButton";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const SocialLinks = () => {
  const darkTheme = useRef<boolean>();
  darkTheme.current = localStorage.getItem("theme") === "dark";
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);
  function changeTheme() {
    changeCurrentTheme(darkTheme.current ? "dark" : "light");
    changeCurrentTheme(currentTheme === "light" ? "dark" : "light");
    darkTheme.current = !darkTheme.current;
    localStorage.setItem("theme", darkTheme.current ? "dark" : "light");
  }
  useEffect(() => {
    // Dark mode
    darkTheme.current = localStorage.getItem("theme") === "dark";
  }, []);
  return (
    <div className="flex gap-8 sm:absolute sm:right-0 justify-evenly sm:justify-center p-4">
      <NavBarButton
        title={"github"}
        href={"https://github.com/lmartins18"}
        icon={<AiFillGithub />}
      />
      <NavBarButton
        title={"github"}
        href="https://www.linkedin.com/in/luis-martinsie/"
        icon={<AiFillLinkedin />}
      />
      <NavBarButton
        title={"github"}
        onClick={changeTheme}
        icon={
          <>
            {darkTheme.current ? (
              <BsFillMoonStarsFill id="theme-toggle-light-icon" />
            ) : (
              <BsFillSunFill id="theme-toggle-dark-icon" />
            )}
          </>
        }
      />
    </div>
  );
};
