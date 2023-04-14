interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...attributes }: ButtonProps) => {
  return (
    <button
      type='button'
      {...attributes}
      className='capitalize p-2.5 md:p-2 md:text-sm px-6 xs:p-1.5 xs:px-2 xs:text-xs xs:font-normal rounded-lg text-lg lg:text-base lg:font-medium font-semibold transition-all duration-300 ease-in-out bg-light text-dark hover:bg-dark hover:text-light border-2 hover:border-transparent border-dark dark:bg-dark dark:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark dark:hover:border-transparent'
    >
      {children}
    </button>
  );
};
export default Button;
