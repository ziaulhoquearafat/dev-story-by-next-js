import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      className={`${pathname.startsWith(href) && "bg-sky-400 px-3 py-2 rounded"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
