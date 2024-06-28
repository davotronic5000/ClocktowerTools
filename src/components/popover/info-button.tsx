"use client";
import { ReactNode } from "react";
import { Button, Dialog, DialogTrigger } from "react-aria-components";
import Popover from "./popover";

interface InfoButtonProps {
    text: ReactNode;
    children?: ReactNode;
}

const InfoButton = ({ children, text }: InfoButtonProps) => {
    return (
        <DialogTrigger>
            <Button className="flex items-center rounded-sm bg-amber-500 px-2 py-1 text-xs font-bold uppercase leading-none text-black">
                {text}
            </Button>
            <Popover size="sm">
                <Dialog className="outline-none">{children}</Dialog>
            </Popover>
        </DialogTrigger>
    );
};

export default InfoButton;
