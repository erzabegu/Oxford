const Button = ({ className = '', ...rest }) => {
  const buttonClasses = `rounded-md whitespace-nowrap bg-secondary text-white py-9px px-17px text-base font-medium cursor-pointer shadow-sm ${className}`;

  return (
    <button {...rest} className={buttonClasses}>
      {rest.children}
    </button>
  );
};

export default Button;
