import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";

export interface BaseLayoutToken {
    id: string;
    image?: string;
}

export interface RoleLayoutToken extends BaseLayoutToken {
    name: string;
    leaves: {
        firstNight: boolean;
        otherNight: boolean;
        setup: boolean;
        reminders: number;
    };
}

export interface ReminderLayoutToken extends BaseLayoutToken {
    reminderText: string;
}

export type LayoutToken = RoleLayoutToken | ReminderLayoutToken;

export type PageLayout = LayoutToken[][][];

const createCircle = (cx: number, cy: number, r: number, deg: number) => {
    var theta = (deg * Math.PI) / 180,
        dx = r * Math.cos(theta),
        dy = -r * Math.sin(theta);
    return `
        M ${cx} ${cy}
        m ${dx},${dy}
        a ${r},${r} 0 1,0 ${-2 * dx},${-2 * dy}
        a ${r},${r} 0 1,0 ${2 * dx},${2 * dy}
    `;
};

const generateTokenSizes = (
    tokenToolJSON: ScriptJSONSchemaType,
    type: "role" | "reminder",
) => {
    const tokenSizeConfig = tokenToolJSON.tokenConfig.tokenSizes[type];
    const tokenStyleConfig = tokenToolJSON.tokenConfig.tokenStyles;

    const textCircleSize =
        tokenSizeConfig.tokenSize / 2 - tokenSizeConfig.tokenMargin;
    const roleMidPoint = tokenSizeConfig.tokenSize / 2;
    const circleBorderThickness = tokenStyleConfig.border.circleBorder
        ? tokenStyleConfig.border.thickness * 2
        : 0;
    const squareBorderThickness = tokenStyleConfig.border.squareBorder
        ? tokenStyleConfig.border.thickness * 2
        : 0;

    return {
        circle: createCircle(
            roleMidPoint,
            roleMidPoint,
            textCircleSize,
            type === "reminder" ? 90 : 0,
        ),
        tokenAreaSize:
            tokenSizeConfig.tokenSize +
            tokenToolJSON.tokenConfig.tokenSizes.tokenSpacerMargin * 2 +
            circleBorderThickness,
        totalTokenSize: tokenSizeConfig.tokenSize + circleBorderThickness,
        tokenSquareSize:
            tokenSizeConfig.tokenSize +
            squareBorderThickness +
            circleBorderThickness,
        imageSize:
            tokenSizeConfig.tokenSize -
            tokenSizeConfig.tokenMargin * 2 -
            tokenSizeConfig.tokenImageBMargin,
        imageMarginX:
            tokenSizeConfig.tokenMargin + tokenSizeConfig.tokenImageBMargin / 2,
        imageMarginY: tokenSizeConfig.tokenMargin,
    };
};

const generateTokenPages = (tokenToolJSON: ScriptJSONSchemaType) => {
    console.log(tokenToolJSON);
    const { reminderList, roleList } = tokenToolJSON.roles.reduce(
        (acc, curr) => {
            for (let i = 0; i < curr.count; i++) {
                acc.roleList.push({
                    id: curr.id,
                    name: curr.name || "Unknown",
                    image: curr.image,
                    leaves: {
                        firstNight: !!curr.firstNight,
                        otherNight: !!curr.otherNight,
                        setup: !!curr.setup,
                        reminders:
                            curr.reminders?.reduce((a, c) => a + c.count, 0) ||
                            0,
                    },
                });
            }
            curr.reminders?.forEach((reminder) => {
                for (let p = 0; p < reminder.count; p++) {
                    acc.reminderList.push({
                        id: curr.id,
                        image: curr.image,
                        reminderText: reminder.text,
                    });
                }
            });
            return acc;
        },
        {
            roleList: [] as RoleLayoutToken[],
            reminderList: [] as ReminderLayoutToken[],
        },
    );

    const pageSizes = tokenToolJSON.tokenConfig.page;
    const printableHeight = pageSizes.height - 14 - pageSizes.margin * 2;
    const printableWidth = pageSizes.width - pageSizes.margin * 2;
    let availablePageSpace = printableHeight;
    let availableRowSpace = printableWidth;
    let currentPage = 0;
    let currentRow = 0;
    const pageLayout: PageLayout = [];

    const addTokenToPage = (token: LayoutToken) => {
        const type = "leaves" in token ? "role" : "reminder";
        const tokenSizes = tokenToolJSON.tokenConfig.tokenSizes[type];
        const tokenSize =
            tokenSizes.tokenSize +
            tokenToolJSON.tokenConfig.tokenSizes.tokenSpacerMargin * 2 +
            (tokenToolJSON.tokenConfig.tokenStyles.border.circleBorder
                ? tokenToolJSON.tokenConfig.tokenStyles.border.thickness * 2
                : 0);
        if (!pageLayout.length) {
            pageLayout.push([[]]);
            availablePageSpace -= tokenSize;
        }
        if (availableRowSpace > tokenSize) {
            pageLayout[currentPage][currentRow].push(token);
            availableRowSpace -= tokenSize;
        } else {
            const newRow = [token];
            if (availablePageSpace > tokenSize) {
                pageLayout[currentPage].push(newRow);
                currentRow++;
                availablePageSpace -= tokenSize;
                availableRowSpace = printableWidth - tokenSize;
            } else {
                pageLayout.push([newRow]);
                currentPage++;
                currentRow = 0;
                availablePageSpace = printableHeight - tokenSize;
                availableRowSpace = printableWidth - tokenSize;
            }
        }
    };
    roleList.forEach(addTokenToPage);
    reminderList.forEach(addTokenToPage);

    return {
        printableHeight,
        printableWidth,
        tokenConfig: tokenToolJSON.tokenConfig,
        generatedTokenDetails: {
            role: generateTokenSizes(tokenToolJSON, "role"),
            reminder: generateTokenSizes(tokenToolJSON, "reminder"),
        },
        pages: pageLayout,
    };
};

export default generateTokenPages;
