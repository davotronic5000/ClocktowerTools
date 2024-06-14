import Image from "next/image";
import parchment from "public/token_parchment.png";
import generateTokenPages, { LayoutToken } from "./generate-token-pages";
import hexToRGBA from "./hex-to-rgba";
import TokenSVG from "./token-svg";

export interface TokenProps {
    token: LayoutToken;
    pageLayout: ReturnType<typeof generateTokenPages>;
}

const Token = ({ token, pageLayout }: TokenProps) => {
    const type = "leaves" in token ? "role" : "reminder";
    const { tokenAreaSize, tokenSquareSize, tokenSize, circle } =
        pageLayout.generatedTokenDetails[type];
    const generatedBorderStyles = {
        borderWidth: `${pageLayout.tokenConfig.tokenStyles.border.thickness}px`,
        borderColor: hexToRGBA(
            pageLayout.tokenConfig.tokenStyles.border.colour,
            pageLayout.tokenConfig.tokenStyles.border.alpha,
        ),
    };

    return (
        <div
            className={`relative flex items-center justify-center ${pageLayout.tokenConfig.tokenStyles.fontSize[type]}`}
            style={{
                width: `${tokenAreaSize}px`,
                height: `${tokenAreaSize}px`,
            }}
        >
            {pageLayout.tokenConfig.tokenStyles.tokenBackground &&
                pageLayout.tokenConfig.tokenStyles.tokenBackgroundBleed && (
                    <Image
                        alt="parchment"
                        src={parchment}
                        style={{
                            objectFit: "cover",
                        }}
                        priority
                        placeholder="blur"
                        quality={100}
                        sizes={`${tokenAreaSize}px`}
                        fill
                    />
                )}
            <div
                className="z-10"
                style={{
                    width: `${tokenSquareSize}px`,
                    height: `${tokenSquareSize}px`,
                    ...(pageLayout.tokenConfig.tokenStyles.border.squareBorder
                        ? generatedBorderStyles
                        : undefined),
                }}
            >
                <div
                    className="flex h-full w-full flex-col items-center justify-start rounded-[50%] border-solid"
                    style={{
                        height: `${tokenSize}px`,
                        width: `${tokenSize}px`,
                        ...(pageLayout.tokenConfig.tokenStyles
                            .tokenBackground &&
                        !pageLayout.tokenConfig.tokenStyles.tokenBackgroundBleed
                            ? {
                                  backgroundImage: `url(${parchment.src})`,
                                  backgroundSize: "cover",
                              }
                            : undefined),
                        ...(pageLayout.tokenConfig.tokenStyles.border
                            .circleBorder
                            ? generatedBorderStyles
                            : undefined),
                    }}
                >
                    <TokenSVG pageLayout={pageLayout} token={token} />
                </div>
            </div>
        </div>
    );
};

export default Token;
