import { ReactNode } from "react";
import {
    Popover as BasePopover,
    PopoverProps as BasePopoverProps,
    OverlayArrow,
} from "react-aria-components";

interface PopoverProps extends BasePopoverProps {
    children?: ReactNode;
}

const Popover = ({ children, className = "", ...rest }: PopoverProps) => {
    return (
        <BasePopover
            className={`group overflow-auto border border-gray-600 bg-gray-900 p-4 text-gray-50 ${className}`}
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
            {children}
        </BasePopover>
    );
};

export default Popover;
