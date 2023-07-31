import { cva } from "class-variance-authority";
import { FC } from "react";

interface ButtonProps {}

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outlin-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
 {
    variants: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200"
    }
 }
);

const Button: FC<ButtonProps> = ({}) => {
  return (<div>Button</div>);
};

export default Button;
