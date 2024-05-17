import JSONContextProvider from "@/components/json-upload/json-context-provider";
import { ReactNode } from "react";

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex grow overflow-auto">
            <JSONContextProvider>{children}</JSONContextProvider>
        </div>
    );
};

export default Layout;
