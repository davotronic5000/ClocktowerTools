import { ReactNode } from "react";
import { Heading } from "../typography";

interface SideBarProps {
    heading: string;
    children: ReactNode;
}

const SideBar = ({ heading, children }: SideBarProps) => {
    return (
        <section className="bg-indigo-950 overflow-auto h-full border-r-2 border-gray-600 border-solid shadow-xl shadow-gray-900 text-gray-200 py-4 px-8">
            <Heading className="px-4 border-b border-gray-200 border-solid mb-4">
                {heading}
            </Heading>
            {children}
        </section>
    );
};

export default SideBar;
