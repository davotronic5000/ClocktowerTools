import { ButtonLink } from "@/components/button";
import { ComponentType } from "react";

const Page: ComponentType = () => {
    return (
        <div className="mx-auto flex w-[600px] flex-col items-center">
            <ButtonLink href="/script">Script Generator</ButtonLink>
            <div className="divider">OR</div>
            <ButtonLink href="/token">Token Generator</ButtonLink>
        </div>
    );
};

export default Page;
