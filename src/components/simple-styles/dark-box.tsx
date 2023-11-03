import { ReactNode } from "react";

const DarkBox = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`bg-gray-900 text-gray-200${
                className ? ` ${className}` : ""
            }`}
        >
            {children}
        </div>
    );
};

export default DarkBox;
