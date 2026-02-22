const AuthLayout = ({ children }) => {
  return (
    <div className="flex gap-5 min-h-screen">
      <div className="flex-2">{children}</div>
      <div className="flex-1 p-5 flex justify-center items-center bg-sky-300">
        <h2 className="text-5xl font-bold">Welcome For Authentication</h2>
      </div>
    </div>
  );
};

export default AuthLayout;
