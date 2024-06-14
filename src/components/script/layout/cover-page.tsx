import oldStandard from "@/components/font-loader/old-standard-loader";
import oswaldPro from "@/components/font-loader/oswald-loader";
import { ColourBlendTypeType } from "@/components/json-upload/universal-json-validator";
import Image from "next/image";
import backPattern from "public/back-pattern.png";
import { ReactNode } from "react";

interface CoverPageProps {
    name: string;
    primaryColour: string;
    secondaryColour?: string;
    colourBlendType?: ColourBlendTypeType;
    useGradient?: boolean;
    children?: ReactNode;
}

const CoverPage = ({
    name,
    primaryColour,
    secondaryColour,
    useGradient = false,
    colourBlendType,
}: CoverPageProps) => {
    return (
        <div
            style={{
                background: useGradient
                    ? `linear-gradient(${primaryColour}, ${secondaryColour})`
                    : primaryColour,
            }}
            className={`relative flex h-full items-center justify-center overflow-hidden ${oswaldPro.variable} ${oldStandard.variable}`}
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
                sizes="100%"
                fill
                priority
                className=" opacity-60"
            />
            <span className="text-center font-title text-7xl text-amber-950 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                {name}
            </span>
        </div>
    );
};

export default CoverPage;
