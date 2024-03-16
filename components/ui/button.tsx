import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "transition-all",
    "duration-1000",
    "p-4",
  ],
  {
    variants: {
      colour: {
        red: ["bg-red-500"],
        green: ["bg-green-500"],
        blue: ["bg-blue-500"],
      },
      radius: {
        none: ["rounded-none"],
        md: ["rounded-lg"],
        lg: ["rounded-xl"],
        full: ["rounded-full"],
      },
      fontFamily: {
        mono: ["font-mono"],
        sans: ["font-sans"],
        serif: ["font-serif"],
      },
    },
    compoundVariants: [{}, {}],

    defaultVariants: {
      colour: "red",
      radius: "none",
      fontFamily: "mono",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  colour,
  radius,
  fontFamily,
  ...props
}) => (
  <button
    className={button({ colour, radius, fontFamily, className })}
    {...props}
  />
);
