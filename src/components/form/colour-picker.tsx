import {
    Button,
    ColorArea,
    ColorField,
    ColorPicker,
    ColorPickerProps,
    ColorSlider,
    ColorSwatch,
    ColorThumb,
    Dialog,
    DialogTrigger,
    Input,
    Label,
    Popover,
    SliderOutput,
    SliderTrack,
} from "react-aria-components";
import FieldLabel from "./field-label";

interface ColourPickerProps extends ColorPickerProps {
    label: string;
    name: string;
}

const ColourPicker = ({ label, name, ...rest }: ColourPickerProps) => {
    return (
        <div className="flex flex-col">
            <FieldLabel>{label}</FieldLabel>
            <ColorPicker {...rest}>
                <DialogTrigger>
                    <Button>
                        <ColorSwatch
                            className="h-8 w-8"
                            style={({ color }) => ({
                                background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
                            })}
                        />
                    </Button>
                    <Popover
                        placement="bottom start"
                        className="border border-gray-600 bg-gray-900 p-4 text-gray-50 "
                    >
                        <Dialog className="outline-none">
                            {
                                <>
                                    <ColorArea
                                        className="h-40 w-40"
                                        colorSpace="hsb"
                                        xChannel="saturation"
                                        yChannel="brightness"
                                    >
                                        <ColorThumb className="shadow-ring-outline h-[20px] w-[20px] rounded-full border-2 border-white shadow-black focus-visible:h-[24px] focus-visible:w-[24px]" />
                                    </ColorArea>
                                    <ColorSlider
                                        colorSpace="hsb"
                                        channel="hue"
                                        className="grid w-full grid-cols-2 gap-2 text-sm"
                                    >
                                        <Label />
                                        <SliderOutput className="text-right" />
                                        <SliderTrack className="col-span-2 h-[28px] rounded-sm">
                                            <ColorThumb className="shadow-ring-outline top-[50%] h-[20px] w-[20px] rounded-full border-2 border-white shadow-black focus-visible:h-[24px] focus-visible:w-[24px]" />
                                        </SliderTrack>
                                    </ColorSlider>
                                    <ColorField
                                        name={name}
                                        className="flex flex-col"
                                    >
                                        <FieldLabel>Hex</FieldLabel>
                                        <Input className="w-40 border border-gray-600 bg-gray-900 p-2 invalid:border-red-500" />
                                    </ColorField>
                                </>
                            }
                        </Dialog>
                    </Popover>
                </DialogTrigger>
            </ColorPicker>
        </div>
    );
};

export default ColourPicker;
