import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname.startsWith(href) && "bg-sky-500 py-2 px-3 rounded-lg"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
