import Link from "next/link";

const NotFound404 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <h1>404 | Your Page in Not Found</h1>
      <Link href={"/"}>
        <button className="bg-amber-300 px-3 py-2 rounded text-white font-bold cursor-pointer">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound404;
