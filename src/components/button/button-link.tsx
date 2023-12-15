"use client";
import { Link } from "react-aria-components";
import { SharedButtonProps, generateButtonStyles } from "./shared-styles";
import { LinkProps } from "../navigation/link";

interface ButtonLinkProps<T extends string>
    extends SharedButtonProps, LinkProps<T> {
        }

const ButtonLink = <T extends string>({
    size,
    variant,
    className,
    href,
    ...rest
}: ButtonLinkProps<T>) => {
    return (
        <Link
            className={generateButtonStyles({ size, variant, className })}
            {...rest}
        />
    );
};

export default ButtonLink;
