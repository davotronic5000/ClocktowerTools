import { ReactNode } from "react";
import {
    Popover as BasePopover,
    PopoverProps as BasePopoverProps,
    OverlayArrow,
} from "react-aria-components";

interface PopoverProps extends BasePopoverProps {
    size?: "md" | "sm";
    children?: ReactNode;
}

const Popover = ({
    children,
    className = "",
    size = "md",
    ...rest
}: PopoverProps) => {
    return (
        <BasePopover
            className={`group flex flex-col border border-gray-600 bg-gray-900 ${
                size === "md" ? "p-4" : "p-2 text-sm"
            } max-w-[300px] text-gray-50 ${className}`}
            containerPadding={25}
            {...rest}
        >
            <OverlayArrow>
                <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    className="fill-gray-900 stroke-gray-600 group-placement-bottom:rotate-180"
                >
                    <path d="M0 0 L6 6 L12 0" />
                </svg>
            </OverlayArrow>
            <div className="flex-shrink-1 flex-grow-0 overflow-auto">
                {children}
            </div>
        </BasePopover>
    );
};

export default Popover;
