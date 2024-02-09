import Image from "next/image";
import parchment from "public/parchment.jpg";
import { ReactNode } from "react";

interface SinglePageProps {
    pageSize?: "a4";
    children?: ReactNode;
}

const pageSizes = {
    a4: {
        height: 1123,
        width: 794,
    },
};

const SinglePage = ({ pageSize = "a4", children }: SinglePageProps) => {
    return (
        <div
            style={{
                height: pageSizes[pageSize].height,
                width: pageSizes[pageSize].width,
            }}
            className="relative overflow-hidden"
        >
            <Image
                alt="parchment"
                src={parchment}
                style={{ objectFit: "cover" }}
                placeholder="blur"
                quality={100}
                fill
            />
            <div className="absolute bottom-0 left-0 right-0 top-0">
                {children}
            </div>
        </div>
    );
};

export default SinglePage;
