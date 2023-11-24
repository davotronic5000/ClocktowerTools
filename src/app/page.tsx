import { ButtonLink } from "@/components/button";
import { ComponentType } from "react";

const Page: ComponentType = () => {
    return (
        <div className="mx-auto flex w-[600px] flex-col items-center self-center">
            <ButtonLink href="/script">Script Generator</ButtonLink>
            <div className="flex w-full items-center py-2 font-bold text-gray-200">
                <div className="h-0.5 grow bg-gray-400" />
                <span className="px-2">OR</span>
                <div className="h-0.5 grow bg-gray-400" />
            </div>
            <ButtonLink href="/token">Token Generator</ButtonLink>
        </div>
    );
};

export default Page;
