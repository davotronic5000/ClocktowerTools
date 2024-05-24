import { ReactNode } from "react";
import { Label } from "react-aria-components";

interface FieldLabelProps {
    children?: ReactNode;
}

const FieldLabel = ({ children }: FieldLabelProps) => {
    return <Label className="text-sm font-bold">{children}</Label>;
};

export default FieldLabel;
