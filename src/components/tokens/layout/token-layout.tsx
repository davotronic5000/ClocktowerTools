import oldStandard from "@/components/font-loader/old-standard-loader";
import getBackupRoleImage from "@/components/images/get-role-image";
import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import generateTokenPages from "./generate-token-pages";
import hexToRGBA from "./hex-to-rgba";
import { reminderPipsGenerator } from "./reminder-pips";

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
                                className="flex flex-col items-center justify-center"
                            >
                                {page.map((row, i) => {
                                    return (
                                        <div key={i} className="flex w-full">
                                            {row.map((token, i) => {
                                                if ("leaves" in token) {
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
                                                                    className="flex h-full w-full flex-col items-center justify-start rounded-[50%] border-solid"
                                                                    style={{
                                                                        height: `${pageLayout.generatedTokenDetails.role.totalTokenSize}px`,
                                                                        width: `${pageLayout.generatedTokenDetails.role.totalTokenSize}px`,
                                                                        ...(pageLayout
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
                                                                            : undefined),
                                                                    }}
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
                                                                                stroke="black"
                                                                                id="layout-circle-role"
                                                                            />
                                                                        </defs>
                                                                        <text className="token-text name">
                                                                            <textPath
                                                                                startOffset="75%"
                                                                                textAnchor="middle"
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
                                                                                textAnchor="middle"
                                                                                startOffset="25%"
                                                                                xlinkHref="#layout-circle-role"
                                                                                fill={
                                                                                    pageLayout
                                                                                        .tokenConfig
                                                                                        .tokenStyles
                                                                                        .reminder
                                                                                        .colour
                                                                                }
                                                                            >
                                                                                {"leaves" in
                                                                                    token && (
                                                                                    <tspan
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: reminderPipsGenerator(
                                                                                                pageLayout
                                                                                                    .tokenConfig
                                                                                                    .tokenStyles
                                                                                                    .reminder
                                                                                                    .icon,
                                                                                                token
                                                                                                    .leaves
                                                                                                    .reminders,
                                                                                            ),
                                                                                        }}
                                                                                    />
                                                                                )}
                                                                            </textPath>
                                                                        </text>
                                                                        <text className="token-text first-night-pip">
                                                                            <textPath
                                                                                textAnchor="middle"
                                                                                startOffset="50%"
                                                                                xlinkHref="#layout-circle-role"
                                                                                fill={
                                                                                    pageLayout
                                                                                        .tokenConfig
                                                                                        .tokenStyles
                                                                                        .firstNight
                                                                                        .colour
                                                                                }
                                                                            >
                                                                                {"leaves" in
                                                                                    token &&
                                                                                token
                                                                                    .leaves
                                                                                    .firstNight ? (
                                                                                    <tspan
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: pageLayout
                                                                                                .tokenConfig
                                                                                                .tokenStyles
                                                                                                .firstNight
                                                                                                .icon,
                                                                                        }}
                                                                                    />
                                                                                ) : (
                                                                                    ""
                                                                                )}
                                                                            </textPath>
                                                                        </text>
                                                                        <text className="token-text other-night-pip">
                                                                            <textPath
                                                                                textAnchor="middle"
                                                                                startOffset="0"
                                                                                xlinkHref="#layout-circle-role"
                                                                                fill={
                                                                                    pageLayout
                                                                                        .tokenConfig
                                                                                        .tokenStyles
                                                                                        .otherNight
                                                                                        .colour
                                                                                }
                                                                            >
                                                                                {"leaves" in
                                                                                    token &&
                                                                                token
                                                                                    .leaves
                                                                                    .otherNight ? (
                                                                                    <tspan
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: pageLayout
                                                                                                .tokenConfig
                                                                                                .tokenStyles
                                                                                                .otherNight
                                                                                                .icon,
                                                                                        }}
                                                                                    />
                                                                                ) : (
                                                                                    ""
                                                                                )}
                                                                            </textPath>
                                                                        </text>
                                                                        <text className="token-text setup-pip">
                                                                            <textPath
                                                                                textAnchor="middle"
                                                                                startOffset="12.5%"
                                                                                xlinkHref="#layout-circle-role"
                                                                                fill={
                                                                                    pageLayout
                                                                                        .tokenConfig
                                                                                        .tokenStyles
                                                                                        .setup
                                                                                        .colour
                                                                                }
                                                                            >
                                                                                {"leaves" in
                                                                                    token &&
                                                                                token
                                                                                    .leaves
                                                                                    .setup ? (
                                                                                    <tspan
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: pageLayout
                                                                                                .tokenConfig
                                                                                                .tokenStyles
                                                                                                .setup
                                                                                                .icon,
                                                                                        }}
                                                                                    />
                                                                                ) : (
                                                                                    ""
                                                                                )}
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
                                                }
                                                return (
                                                    <div
                                                        key={i}
                                                        className="flex items-center justify-center"
                                                        style={{
                                                            width: `${pageLayout.generatedTokenDetails.reminder.tokenAreaSize}px`,
                                                            height: `${pageLayout.generatedTokenDetails.reminder.tokenAreaSize}px`,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: `${pageLayout.generatedTokenDetails.reminder.tokenSquareSize}px`,
                                                                height: `${pageLayout.generatedTokenDetails.reminder.tokenSquareSize}px`,
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
                                                                className="flex h-full w-full flex-col items-center justify-start rounded-[50%] border-solid"
                                                                style={{
                                                                    height: `${pageLayout.generatedTokenDetails.reminder.totalTokenSize}px`,
                                                                    width: `${pageLayout.generatedTokenDetails.reminder.totalTokenSize}px`,
                                                                    ...(pageLayout
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
                                                                        : undefined),
                                                                }}
                                                            >
                                                                <svg
                                                                    width={`${pageLayout.tokenConfig.tokenSizes.reminder.tokenSize}px`}
                                                                    height={`${pageLayout.tokenConfig.tokenSizes.reminder.tokenSize}px`}
                                                                    viewBox={`0 0 ${pageLayout.tokenConfig.tokenSizes.reminder.tokenSize} ${pageLayout.tokenConfig.tokenSizes.reminder.tokenSize}`}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <defs>
                                                                        <path
                                                                            d={`${pageLayout.generatedTokenDetails.reminder.circle}`}
                                                                            fill="transparent"
                                                                            stroke="black"
                                                                            id="layout-circle-reminder"
                                                                        />
                                                                    </defs>
                                                                    <text className="token-text name">
                                                                        <textPath
                                                                            startOffset="75%"
                                                                            textAnchor="middle"
                                                                            xlinkHref="#layout-circle-reminder"
                                                                        >
                                                                            {"reminderText" in
                                                                            token
                                                                                ? token.reminderText
                                                                                : "Unknown"}
                                                                        </textPath>
                                                                    </text>
                                                                    <image
                                                                        href={
                                                                            token.image ||
                                                                            getBackupRoleImage()
                                                                        }
                                                                        width={`${pageLayout.generatedTokenDetails.reminder.imageSize}px`}
                                                                        height={`${pageLayout.generatedTokenDetails.reminder.imageSize}px`}
                                                                        x={`${pageLayout.generatedTokenDetails.reminder.imageMargin}`}
                                                                        y={`${pageLayout.generatedTokenDetails.reminder.imageMargin}`}
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
