const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-sky-700 to bg-sky-400 px-3 py-2 rounded">
      <h2 className="text-5xl font-bold">{children}</h2>
    </div>
  );
};

export default Title;
