"use client";

import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter Your Password");
    if (password == "1234") {
      //   console.log(router);
      router.push("/dashboard");
    }
  };

  return (
    <div className="p-10 bg-linear-90 from-sky-400 to-sky-200 rounded space-y-5 text-center">
      <h2 className="text-5xl font-bold">Welcome To My Dev Story</h2>
      <button
        onClick={handleBtn}
        className="rounded cursor-pointer px-5 py-3 font-bold bg-linear-60 from-orange-300 to-orange-500 hover:bg-none hover:bg-amber-400 duration-200"
      >
        Share-Story
      </button>
    </div>
  );
};

export default Banner;
