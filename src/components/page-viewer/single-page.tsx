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
            className={` bg-slate-100`}
        >
            Page
            {children}
        </div>
    );
};

export default SinglePage;
