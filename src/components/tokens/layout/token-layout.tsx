import oldStandard from "@/components/font-loader/old-standard-loader";
import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import generateTokenPages from "./generate-token-pages";
import hexToRGBA from "./hex-to-rgba";

interface TokenLayoutProps {
    tokenScript: ScriptJSONSchemaType;
    noPageGap?: boolean;
}

const TokenLayout = ({ noPageGap, tokenScript }: TokenLayoutProps) => {
    console.log(tokenScript);
    const pageLayout = generateTokenPages(tokenScript);
    return (
        <PageViewer noPageGap={noPageGap}>
            {pageLayout.pages.map((page, i) => {
                return (
                    <SinglePage key={i}>
                        <div
                            className={`h-full w-full ${oldStandard.variable} flex flex-col items-center justify-center text-center font-serif text-sm font-bold uppercase`}
                        >
                            <h4 className="m-0 leading-none">
                                {tokenScript.name} - Page: {i}
                            </h4>
                            <div
                                style={{
                                    width: pageLayout.printableWidth,
                                    height: pageLayout.printableHeight,
                                }}
                                className="flex flex-col items-center justify-center bg-red-200"
                            >
                                {page.map((row, i) => {
                                    return (
                                        <div key={i} className="flex w-full">
                                            {row.map((token, i) => {
                                                return (
                                                    <div
                                                        key={i}
                                                        className="flex items-center justify-center"
                                                        style={{
                                                            width: `${pageLayout.generatedTokenDetails.role.tokenAreaSize}px`,
                                                            height: `${pageLayout.generatedTokenDetails.role.tokenAreaSize}px`,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: `${pageLayout.generatedTokenDetails.role.tokenSquareSize}px`,
                                                                height: `${pageLayout.generatedTokenDetails.role.tokenSquareSize}px`,
                                                                ...(pageLayout
                                                                    .tokenConfig
                                                                    .tokenStyles
                                                                    .border
                                                                    .squareBorder
                                                                    ? {
                                                                          borderWidth: `${pageLayout.tokenConfig.tokenStyles.border.thickness}px`,
                                                                          borderColor:
                                                                              hexToRGBA(
                                                                                  pageLayout
                                                                                      .tokenConfig
                                                                                      .tokenStyles
                                                                                      .border
                                                                                      .colour,
                                                                                  pageLayout
                                                                                      .tokenConfig
                                                                                      .tokenStyles
                                                                                      .border
                                                                                      .alpha,
                                                                              ),
                                                                      }
                                                                    : undefined),
                                                            }}
                                                        >
                                                            <div
                                                                className="flex flex-col items-center justify-start rounded-[50%] border-solid"
                                                                style={
                                                                    pageLayout
                                                                        .tokenConfig
                                                                        .tokenStyles
                                                                        .border
                                                                        .circleBorder
                                                                        ? {
                                                                              borderWidth: `${pageLayout.tokenConfig.tokenStyles.border.thickness}px`,
                                                                              borderColor:
                                                                                  hexToRGBA(
                                                                                      pageLayout
                                                                                          .tokenConfig
                                                                                          .tokenStyles
                                                                                          .border
                                                                                          .colour,
                                                                                      pageLayout
                                                                                          .tokenConfig
                                                                                          .tokenStyles
                                                                                          .border
                                                                                          .alpha,
                                                                                  ),
                                                                          }
                                                                        : undefined
                                                                }
                                                            >
                                                                <svg
                                                                    width={`${pageLayout.tokenConfig.tokenSizes.role.tokenSize}px`}
                                                                    height={`${pageLayout.tokenConfig.tokenSizes.role.tokenSize}px`}
                                                                    viewBox={`0 0 ${pageLayout.tokenConfig.tokenSizes.role.tokenSize} ${pageLayout.tokenConfig.tokenSizes.role.tokenSize}`}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <defs>
                                                                        <path
                                                                            d={`${pageLayout.generatedTokenDetails.role.circle}`}
                                                                            fill="transparent"
                                                                            id="layout-circle-role"
                                                                        />
                                                                    </defs>
                                                                    <text className="token-text name">
                                                                        <textPath
                                                                            startOffset="37.5%"
                                                                            xlinkHref="#layout-circle-role"
                                                                        >
                                                                            {"name" in
                                                                            token
                                                                                ? token.name
                                                                                : "Unknown"}
                                                                        </textPath>
                                                                    </text>
                                                                    <text className="token-text reminder-pips">
                                                                        <textPath
                                                                            startOffset="87.5%"
                                                                            xlinkHref="#layout-circle-role"
                                                                        >
                                                                            {"leaves" in
                                                                                token &&
                                                                                token
                                                                                    .leaves
                                                                                    .reminders}
                                                                        </textPath>
                                                                    </text>
                                                                    <text className="token-text first-night-pip">
                                                                        <textPath
                                                                            startOffset="12.5%"
                                                                            xlinkHref="#layout-circle-role"
                                                                        >
                                                                            {"leaves" in
                                                                                token &&
                                                                            token
                                                                                .leaves
                                                                                .firstNight
                                                                                ? "Y"
                                                                                : "N"}
                                                                        </textPath>
                                                                    </text>
                                                                    <text className="token-text other-night-pip">
                                                                        <textPath
                                                                            startOffset="62.5%"
                                                                            xlinkHref="#layout-circle-role"
                                                                        >
                                                                            {"leaves" in
                                                                                token &&
                                                                            token
                                                                                .leaves
                                                                                .otherNight
                                                                                ? "Y"
                                                                                : "N"}
                                                                        </textPath>
                                                                    </text>
                                                                    <text className="token-text setup-pip">
                                                                        <textPath
                                                                            startOffset="75%"
                                                                            xlinkHref="#layout-circle-role"
                                                                        >
                                                                            {"leaves" in
                                                                                token &&
                                                                            token
                                                                                .leaves
                                                                                .setup
                                                                                ? "Y"
                                                                                : "N"}
                                                                        </textPath>
                                                                    </text>
                                                                    <image
                                                                        href={
                                                                            token.image
                                                                        }
                                                                        width={`${pageLayout.generatedTokenDetails.role.imageSize}px`}
                                                                        height={`${pageLayout.generatedTokenDetails.role.imageSize}px`}
                                                                        x={`${pageLayout.generatedTokenDetails.role.imageMargin}`}
                                                                        y={`${pageLayout.generatedTokenDetails.role.imageMargin}`}
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
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
