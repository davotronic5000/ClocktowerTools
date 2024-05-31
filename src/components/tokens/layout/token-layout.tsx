import oldStandard from "@/components/font-loader/old-standard-loader";
import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import generateTokenPages from "./generate-token-pages";
import Token from "./token";

interface TokenLayoutProps {
    tokenScript: ScriptJSONSchemaType;
    noPageGap?: boolean;
}

const TokenLayout = ({ noPageGap, tokenScript }: TokenLayoutProps) => {
    const pageLayout = generateTokenPages(tokenScript);
    return (
        <PageViewer noPageGap={noPageGap}>
            {pageLayout.pages.map((page, i) => {
                return (
                    <SinglePage
                        key={i}
                        lowInk
                        pageSize={{
                            height: pageLayout.tokenConfig.page.height,
                            width: pageLayout.tokenConfig.page.width,
                        }}
                    >
                        <div
                            className={`h-full w-full ${oldStandard.variable} flex flex-col items-center justify-center text-center font-serif font-bold uppercase`}
                        >
                            <h4 className="mb-[6px] text-sm leading-none">
                                {tokenScript.name} - Page: {i + 1}
                            </h4>
                            <div
                                style={{
                                    width: pageLayout.printableWidth,
                                    height: pageLayout.printableHeight,
                                }}
                                className="flex flex-col items-center justify-between"
                            >
                                {page.map((row, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="flex w-full justify-between"
                                        >
                                            {row.map((token, i) => {
                                                return (
                                                    <Token
                                                        pageLayout={pageLayout}
                                                        token={token}
                                                        key={i}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </SinglePage>
                );
            })}
        </PageViewer>
    );
};

export default TokenLayout;
