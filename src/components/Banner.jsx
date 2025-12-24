"use client";

import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter Your Password");
    if (password == "1234") {
      console.log(router);
      router.push("/dashboard");
    }
  };

  return (
    <div className="text-center space-y-5 bg-linear-30 from-cyan-300 to-amber-300 p-20 text-black rounded">
      <h2 className="text-4xl font-bold">Welcome to Dev-Story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-amber-400 hover:text-black duration-200"
      >
        Share-Story
      </button>
    </div>
  );
};

export default Banner;
