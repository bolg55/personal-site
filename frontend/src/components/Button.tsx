interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...attributes }: ButtonProps) => {
  return (
    <button
      type='button'
      {...attributes}
      className='capitalize p-2.5 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out bg-light text-dark hover:bg-dark hover:text-light border-2 hover:border-transparent border-dark dark:bg-dark dark:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark dark:hover:border-transparent'
    >
      {children}
    </button>
  );
};
export default Button;
