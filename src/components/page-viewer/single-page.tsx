import { pageSizes } from "@/utilities/page-sizes";
import Image from "next/image";
import parchment from "public/parchment.jpg";
import { ReactNode } from "react";

interface SinglePageProps {
    pageSize?: "a4" | { height: number; width: number };
    lowInk?: boolean;
    children?: ReactNode;
}

const SinglePage = ({
    pageSize = "a4",
    lowInk = false,
    children,
}: SinglePageProps) => {
    const pSize =
        typeof pageSize === "object"
            ? pageSize
            : {
                  height: pageSizes[pageSize].height,
                  width: pageSizes[pageSize].width,
              };
    return (
        <div
            style={{
                height: pSize.height,
                width: pSize.width,
                minHeight: pSize.height,
                minWidth: pSize.width,
            }}
            className="relative overflow-hidden bg-white"
        >
            {!lowInk && (
                <Image
                    alt="parchment"
                    src={parchment}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    quality={100}
                    sizes={`${pSize.width}px`}
                    fill
                />
            )}
            <div className="absolute bottom-0 left-0 right-0 top-0">
                {children}
            </div>
        </div>
    );
};

export default SinglePage;
