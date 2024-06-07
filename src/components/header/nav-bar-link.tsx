"use client";

import { Route } from "next";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "../navigation/link";

interface NavBarLinkProps<T extends string> {
    path: Route<T> | URL;
    children: ReactNode;
}

const NavBarLink = <T extends string>({
    path,
    children,
}: NavBarLinkProps<T>) => {
    const pathname = usePathname();
    return (
        <Link
            href={path}
            aria-current={pathname === path ? "page" : false}
            className={({ isCurrent }) => `
                w-full
                p-4
                text-center
                underline-offset-4
                hover:text-amber-400
                md:w-auto
                md:py-0
                md:text-left
                ${isCurrent ? "text-amber-500 underline" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavBarLink;
