import oldStandard from "@/components/font-loader/old-standard-loader";
import oswaldPro from "@/components/font-loader/oswald-loader";
import { ColourBlendTypeType } from "@/components/json-upload/universal-json-validator";
import SinglePage from "@/components/page-viewer/single-page";
import Image from "next/image";
import backPattern from "public/back-pattern.png";
import { ReactNode } from "react";

interface ScriptPageWithSideBarProps {
    primaryColour: string;
    secondaryColour?: string;
    colourBlendType?: ColourBlendTypeType;
    useGradient?: boolean;
    children?: ReactNode;
}

const ScriptPageWithSideBar = ({
    primaryColour,
    secondaryColour,
    colourBlendType,
    useGradient = false,
    children,
}: ScriptPageWithSideBarProps) => {
    return (
        <SinglePage>
            <div
                className={`grid h-full w-full grid-cols-[40px_1fr] grid-rows-[min-content_auto_40px] ${oswaldPro.variable} ${oldStandard.variable}`}
            >
                <div
                    style={{
                        background: useGradient
                            ? `linear-gradient(${primaryColour}, ${secondaryColour})`
                            : primaryColour,
                    }}
                    className="z-1 col-span-1 col-start-1 row-span-full border-r border-stone-700"
                >
                    <Image
                        alt="background-texture"
                        src={backPattern}
                        style={{
                            objectFit: "cover",
                            mixBlendMode: colourBlendType
                                ? colourBlendType
                                : "difference",
                        }}
                        placeholder="blur"
                        quality={100}
                        className="h-full w-full opacity-60"
                    />
                </div>
                {children}
            </div>
        </SinglePage>
    );
};

export default ScriptPageWithSideBar;
