import { ReactNode } from "react";

interface PageViewerProps {
    children?: ReactNode;
    noPageGap?: boolean;
}

const PageViewer = ({ children, noPageGap = false }: PageViewerProps) => {
    return (
        <article
            className={`flex h-full grow flex-wrap justify-center ${
                noPageGap ? "" : "space-y-4"
            } overflow-auto`}
        >
            {children}
        </article>
    );
};

export default PageViewer;
