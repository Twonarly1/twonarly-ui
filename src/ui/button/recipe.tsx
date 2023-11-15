import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "cursor-pointer disabled:cursor-not-allowed disabled:text-disabled rounded-md text transition-all duration-300 ease-in-out",
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
  variants: {
    variant: {
      solid:
        "bg-gradient-to-br from-pink-500 to-pink-500/70 text-white hover:bg-pink-500/80",
      outline: "border bg-transparent hover:bg-subtle border-subtle",
      ghost: "bg-transparent hover:bg-subtle",
      disabled:
        "bg-disabled border border-disabled text-disabled cursor-not-allowed",
      link: "hover:text-primary hover:underline",
    },
    size: {
      xs: "text-xs px-2 py-0.5",
      sm: "text-sm px-3 py-1",
      md: "text-md px-4 py-1.5",
      lg: "text-lg px-5 py-2",
      xl: "text-xl px-5 py-2.5",
    },
  },
});
