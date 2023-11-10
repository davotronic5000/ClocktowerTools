import { tw } from "@/utilities/tailwind";
import { ReactNode } from "react";
import { Icon } from "../icon";
import { iconTypes } from "../icon/icons";

export type toastStyle = "error" | "warning" | "success" | "info";

interface ToastProps {
    style?: toastStyle;
    iconType?: iconTypes;
    children: ReactNode;
}

const styleVariants = {
    error: tw`bg-red-700 text-gray-200`,
    warning: tw`bg-amber-500`,
    success: tw`bg-green-700 text-gray-200`,
    info: tw`bg-gray-200`,
};

const iconVariants: { [key in toastStyle]: iconTypes } = {
    error: "exclamation-triangle",
    success: "check-circle",
    warning: "exclamation-triangle",
    info: "check-circle",
};

const Toast = ({ style = "info", children, iconType }: ToastProps) => {
    return (
        <div
            className={`flex items-center px-4 py-2 shadow-blue-950/50 text-sm font-bold ${styleVariants[style]}`}
        >
            <Icon
                className="mr-2"
                size="xs"
                type={iconType || iconVariants[style]}
            />{" "}
            {children}
        </div>
    );
};

export default Toast;
