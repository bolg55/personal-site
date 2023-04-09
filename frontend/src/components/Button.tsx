interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...attributes }: ButtonProps) => {
  return (
    <button
      type='button'
      {...attributes}
      className='capitalize p-2.5 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out bg-dark text-light hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light'
    >
      {children}
    </button>
  );
};
export default Button;
