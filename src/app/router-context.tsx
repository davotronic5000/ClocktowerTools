"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { RouterProvider } from "react-aria-components";

const AriaRouterProvider = ({ children }: { children: ReactNode }) => {
    let router = useRouter();
    return <RouterProvider navigate={router.push as (path: string) => void}>{children}</RouterProvider>;
};

export default AriaRouterProvider;