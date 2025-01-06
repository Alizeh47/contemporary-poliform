interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = 'primary', children, className = '' }: ButtonProps) => {
  const baseStyles = "px-6 py-3 transition-colors duration-200";
  const variants = {
    primary: "bg-[#8B7355] text-white hover:bg-[#4A4139]",
    secondary: "border border-[#8B7355] text-[#8B7355] hover:bg-[#F8F7F4]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
