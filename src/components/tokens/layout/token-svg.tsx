import { Fragment } from "react";
import { reminderPipsGenerator } from "./reminder-pips";
import { TokenProps } from "./token";

interface TokenSVGProps extends TokenProps {}

const TokenSVG = ({ pageLayout, token }: TokenSVGProps) => {
    const type = "leaves" in token ? "role" : "reminder";
    const { tokenSize } = pageLayout.tokenConfig.tokenSizes[type];
    const { imageSize, imageMarginX, imageMarginY, circle } =
        pageLayout.generatedTokenDetails[type];
    const { tokenStyles } = pageLayout.tokenConfig;
    const layoutCircle = `layout-circle-${type}`;
    const layoutCircleID = `#${layoutCircle}`;
    return (
        <svg
            width={`${tokenSize}px`}
            height={`${tokenSize}px`}
            viewBox={`0 0 ${tokenSize} ${tokenSize}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <path
                    d={`${circle}`}
                    fill="transparent"
                    stroke="black"
                    id={layoutCircle}
                />
            </defs>
            <text
                className="tracking-widest"
                fill={pageLayout.tokenConfig.tokenStyles.fontColour}
            >
                <textPath
                    startOffset={type === "role" ? "75%" : "50%"}
                    textAnchor="middle"
                    xlinkHref={layoutCircleID}
                >
                    {type === "role"
                        ? "name" in token
                            ? token.name
                            : "Unknown"
                        : "reminderText" in token
                        ? token.reminderText
                        : "Unknown"}
                </textPath>
            </text>
            {type === "role" && (
                <Fragment>
                    <text>
                        <textPath
                            textAnchor="middle"
                            startOffset="25%"
                            xlinkHref={layoutCircleID}
                            fill={tokenStyles.reminder.colour}
                        >
                            {"leaves" in token && (
                                <tspan
                                    dangerouslySetInnerHTML={{
                                        __html: reminderPipsGenerator(
                                            tokenStyles.reminder.icon,
                                            token.leaves.reminders,
                                        ),
                                    }}
                                />
                            )}
                        </textPath>
                    </text>
                    <text>
                        <textPath
                            textAnchor="middle"
                            startOffset="50%"
                            xlinkHref="#layout-circle-role"
                            fill={tokenStyles.firstNight.colour}
                        >
                            {"leaves" in token && token.leaves.firstNight ? (
                                <tspan
                                    dangerouslySetInnerHTML={{
                                        __html: tokenStyles.firstNight.icon,
                                    }}
                                />
                            ) : (
                                ""
                            )}
                        </textPath>
                    </text>
                    <text>
                        <textPath
                            textAnchor="middle"
                            startOffset="0"
                            xlinkHref="#layout-circle-role"
                            fill={tokenStyles.otherNight.colour}
                        >
                            {"leaves" in token && token.leaves.otherNight ? (
                                <tspan
                                    dangerouslySetInnerHTML={{
                                        __html: tokenStyles.otherNight.icon,
                                    }}
                                />
                            ) : (
                                ""
                            )}
                        </textPath>
                    </text>
                    <text>
                        <textPath
                            textAnchor="middle"
                            startOffset="12.5%"
                            xlinkHref="#layout-circle-role"
                            fill={tokenStyles.setup.colour}
                        >
                            {"leaves" in token && token.leaves.setup ? (
                                <tspan
                                    dangerouslySetInnerHTML={{
                                        __html: tokenStyles.setup.icon,
                                    }}
                                />
                            ) : (
                                ""
                            )}
                        </textPath>
                    </text>
                </Fragment>
            )}
            <image
                href={token.image}
                width={`${imageSize}px`}
                height={`${imageSize}px`}
                x={`${imageMarginX}`}
                y={`${imageMarginY}`}
            />
        </svg>
    );
};

export default TokenSVG;
