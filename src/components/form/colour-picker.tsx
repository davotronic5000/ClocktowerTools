import {
    Button,
    ColorArea,
    ColorField,
    ColorPicker,
    ColorPickerProps,
    ColorSlider,
    ColorSwatch,
    Dialog,
    DialogTrigger,
    Input,
    Label,
    SliderOutput,
    SliderTrack,
} from "react-aria-components";
import Popover from "../popover/popover";
import ColourThumbPicker from "./colour-thumb-picker";
import FieldLabel from "./field-label";

interface ColourPickerProps extends Omit<ColorPickerProps, "onChange"> {
    label: string;
    name: string;
    onChange: (value: string) => void;
}

const ColourPicker = ({
    label,
    name,
    onChange,
    ...rest
}: ColourPickerProps) => {
    return (
        <div className="flex flex-col items-start text-sm">
            <FieldLabel>{label}</FieldLabel>
            <ColorPicker
                onChange={(value) => onChange(value.toString("hex"))}
                {...rest}
            >
                <DialogTrigger>
                    <Button>
                        <ColorSwatch
                            className="h-8 w-8 border border-gray-600"
                            style={({ color }) => ({
                                background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
                            })}
                        />
                    </Button>
                    <Popover placement="bottom start">
                        <Dialog className="outline-none">
                            {
                                <>
                                    <ColorArea
                                        className="h-40 w-40"
                                        colorSpace="hsb"
                                        xChannel="saturation"
                                        yChannel="brightness"
                                    >
                                        <ColourThumbPicker />
                                    </ColorArea>
                                    <ColorSlider
                                        colorSpace="hsb"
                                        channel="hue"
                                        className="grid w-full grid-cols-2 gap-2 text-sm"
                                    >
                                        <Label />
                                        <SliderOutput className="text-right" />
                                        <SliderTrack className="col-span-2 h-[28px] rounded-sm">
                                            <ColourThumbPicker className="top-[50%]" />
                                        </SliderTrack>
                                    </ColorSlider>
                                    <ColorField
                                        name={name}
                                        className="flex flex-col text-sm"
                                    >
                                        <FieldLabel>Hex</FieldLabel>
                                        <Input className="w-40 border border-gray-600 bg-gray-900 px-2 py-1 invalid:border-red-500" />
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
