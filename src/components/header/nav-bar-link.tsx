"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType, ReactNode } from "react";

interface NavBarLinkProps {
    path: string;
    children: ReactNode;
}

const NavBarLink: ComponentType<NavBarLinkProps> = ({ path, children }) => {
    const pathname = usePathname();
    return (
        <Link
            href={path}
            className={`
                px-4
                underline-offset-4
                hover:text-accent
                ${pathname === path ? "text-accent underline" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavBarLink;
