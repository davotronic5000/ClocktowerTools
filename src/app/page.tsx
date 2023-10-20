import { ButtonLink } from "@/components/button";
import Link from "next/link";
import { ComponentType } from "react";

const Page: ComponentType = () => {
    return (
        <main>
            <div className="mx-auto flex w-[600px] flex-col items-center">
                <ButtonLink href="/script">Script Generator</ButtonLink>
                <div className="divider">OR</div>
                <ButtonLink href="/token">Token Generator</ButtonLink>
            </div>
        </main>
    );
};

export default Page;
