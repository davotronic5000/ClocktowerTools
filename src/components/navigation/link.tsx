"use client";
import { Route } from "next";
import {
    Link as LinkAria,
    LinkProps as LinkAriaProps,
} from "react-aria-components";

export interface LinkProps<T extends string>
    extends Omit<LinkAriaProps, "href"> {
    href: Route<T> | URL;
}

const Link = <T extends string>({ href, ...rest }: LinkProps<T>) => {
    return <LinkAria href={href as string} {...rest} />;
};

export default Link;
