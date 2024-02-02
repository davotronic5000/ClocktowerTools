import { ReactNode } from "react";

interface PageViewerProps {
    children: ReactNode;
}

const PageViewer = ({ children }: PageViewerProps) => {
    return <div>{children}</div>;
};

export default PageViewer;
