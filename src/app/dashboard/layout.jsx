import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 min-h-screen border-r-2">
        <h2>Navigation</h2>
        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="px-2 py-3 bg-amber-200"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="px-2 py-3 bg-amber-200"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link className="px-2 py-3 bg-amber-200" href={"/dashboard/settings"}>
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
