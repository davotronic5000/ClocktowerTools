import { ReactNode } from "react";
import { Heading } from "../typography";

interface SideBarProps {
    heading: string;
    children: ReactNode;
}

const SideBar = ({ heading, children }: SideBarProps) => {
    return (
        <section className="h-full w-96 shrink-0 overflow-auto border-r-2 border-solid border-gray-600 bg-indigo-950 px-8 py-4 text-gray-200 shadow-xl shadow-gray-900">
            <Heading className="mb-4 border-b border-solid border-gray-200 px-4">
                {heading}
            </Heading>
            {children}
        </section>
    );
};

export default SideBar;
