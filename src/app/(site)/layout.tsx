import { Header } from "@/components/header";
import DarkBox from "@/components/simple-styles/dark-box";
import CustomToaster from "@/components/toast/custom-toaster";
import { Fragment, ReactNode } from "react";

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <CustomToaster />
            <div className="flex h-screen flex-col justify-between">
                <Header />
                <main className="flex grow overflow-auto bg-gray-700">
                    {children}
                </main>
                <DarkBox>
                    <footer
                        className={`border-t-2 border-solid border-gray-600 p-2 text-sm `}
                    >
                        This project is not affiliated with The Pandemonium
                        Institute. All roles & content are the property of
                        Steven Medway and The Pandemonium Institute.
                    </footer>
                </DarkBox>
            </div>
        </Fragment>
    );
};

export default Layout;
