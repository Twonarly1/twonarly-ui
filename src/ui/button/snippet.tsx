import { ark, type HTMLArkProps } from "@ark-ui/react";
import { VariantProps } from "tailwind-variants";
import { styled } from "lib/util/styled";
import { buttonStyles } from "./recipe";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;
export type ButtonProps = ButtonVariantProps & HTMLArkProps<"button">;

const Button = styled<ButtonProps>(ark.button, buttonStyles);

export default Button;
