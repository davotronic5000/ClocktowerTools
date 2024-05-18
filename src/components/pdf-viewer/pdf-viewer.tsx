import { ReactNode } from "react";
import PDFDownloadButton, {
    PDFDownloadButtonProps,
} from "./pdf-download-button";

interface PDFViewerProps extends PDFDownloadButtonProps {
    children: ReactNode;
}

const PDFViewer = ({ children, ...rest }: PDFViewerProps) => {
    return (
        <div className="flex grow flex-col items-center">
            <PDFDownloadButton {...rest} />
            {children}
        </div>
    );
};

export default PDFViewer;
