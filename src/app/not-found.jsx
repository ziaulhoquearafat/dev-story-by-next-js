import Link from "next/link";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex gap-5 flex-col justify-center items-center">
      <h2 className="text-5xl">404 - Page Not Found</h2>
      <Link href="/" className="underline">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound404;
