const Button = ({ children, ...rest }) => {
  return (
    <button
      className="w-full text-md bg-[#230b45] hover:bg-[#230b45e3] text-white p-[10px] disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-300
       dark:bg-gray-800 dark:text-gray-100"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
