import { ReactNode } from "react";

const ButtonNavigation = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mt-4 flex justify-between border-t border-solid border-gray-200 pt-4">
            {children}
        </div>
    );
};

export default ButtonNavigation;
