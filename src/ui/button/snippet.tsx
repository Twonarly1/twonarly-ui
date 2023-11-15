import { ark } from "@ark-ui/react";
import { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./recipe";
import { styled } from "lib/util/styled";

import type { HTMLArkProps } from "@ark-ui/react";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;
export type ButtonProps = ButtonVariantProps & HTMLArkProps<"button">;

const Button = styled<ButtonProps>(ark.button, buttonStyles);

export default Button;
