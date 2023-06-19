import { ReactNode } from "react";

export const NavBarButton = ({
  title,
  href,
  onClick,
  icon,
}: {
  title: string;
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
}) => (
  <button
    title={title}
    name={title}
    className="outline-none border-none rounded-lg bg-transparent"
    onClick={onClick}
  >
    <a
      href={href}
      className="text-cyan-600 dark:text-red-500 bg-transparent text-2xl"
    >
      {icon}
    </a>
  </button>
);
