import { ColorThumb } from "react-aria-components";

interface ColourThumbPickerProps {
    className?: string;
}

const ColourThumbPicker = ({ className = "" }: ColourThumbPickerProps) => {
    return (
        <ColorThumb
            className={`shadow-ring-outline h-[20px] w-[20px] rounded-full border-2 border-white shadow-black focus-visible:h-[24px] focus-visible:w-[24px] ${className}`}
        />
    );
};

export default ColourThumbPicker;
