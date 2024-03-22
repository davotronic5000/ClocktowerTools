import oldStandard from "@/components/font-loader/old-standard-loader";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import { TokenToolSchemaType } from "@/components/tokens/validators/token-tool-schema";
import generateTokenPages from "./generate-token-pages";

interface TokenLayoutProps {
    tokenScript: TokenToolSchemaType;
    noPageGap?: boolean;
}

const TokenLayout = ({ noPageGap, tokenScript }: TokenLayoutProps) => {
    const pageLayout = generateTokenPages(tokenScript);
    return (
        <PageViewer noPageGap={noPageGap}>
            {pageLayout.map((page, i) => {
                return (
                    <SinglePage key={i}>
                        <div
                            className={`h-full w-full ${oldStandard.variable}`}
                        >
                            <div className="text-center font-serif text-sm font-bold uppercase">
                                {tokenScript.name} - Page: {i}
                            </div>
                        </div>
                    </SinglePage>
                );
            })}
        </PageViewer>
    );
};

export default TokenLayout;
