import { ReactNode } from "react";

interface PageViewerProps {
    children?: ReactNode;
}

const PageViewer = ({ children }: PageViewerProps) => {
    return (
        <article className="flex h-full grow flex-wrap justify-center overflow-auto">
            {children}
        </article>
    );
};

export default PageViewer;
