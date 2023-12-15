"use client";

import { Route } from "next";
import { ReactNode } from "react";
import Link from "../navigation/link";
import { usePathname } from "next/navigation";

interface NavBarLinkProps<T extends string> {
    path: Route<T> | URL;
    children: ReactNode;
}

const NavBarLink = <T extends string>({ path, children }: NavBarLinkProps<T>) => {
    const pathname = usePathname();
    return (
        <Link
            href={path}
            aria-current={pathname === path ? 'page' : false}
            className={({ isCurrent }) =>`
                px-4
                underline-offset-4
                hover:text-amber-400
                ${isCurrent ? "text-amber-500 underline" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavBarLink;
