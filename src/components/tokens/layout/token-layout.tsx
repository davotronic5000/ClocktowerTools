import { TokenToolSchemaType } from "@/app/(site)/token/validators/token-tool-schema";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";

interface TokenLayoutProps {
    tokenScript: TokenToolSchemaType;
    noPageGap?: boolean;
}

const TokenLayout = ({ noPageGap, tokenScript }: TokenLayoutProps) => {
    return (
        <PageViewer noPageGap={noPageGap}>
            <SinglePage>
                <div className="h-full w-full">
                    <title>{tokenScript.name} - Page: </title>
                </div>
            </SinglePage>
        </PageViewer>
    );
};

export default TokenLayout;
