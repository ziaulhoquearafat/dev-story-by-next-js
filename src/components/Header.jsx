import Link from "next/link";

const Header = () => {
  return (
    <div className="p-4 border-2 border-gray-400 flex justify-between items-center">
      <header>
        <Link href={"/"} className="text-lg font-semibold">
          Dev-Story🐬
        </Link>
      </header>

      <nav className="space-x-5">
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Header;
