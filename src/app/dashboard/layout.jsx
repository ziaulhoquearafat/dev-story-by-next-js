import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <h2>Navigation</h2>
        <div className="flex flex-col gap-3 mt-10">
          <Link
            className="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-amber-400 hover:text-black duration-200 "
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-amber-400 hover:text-black duration-200 "
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-amber-400 hover:text-black duration-200 "
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
