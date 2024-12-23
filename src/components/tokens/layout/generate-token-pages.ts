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
    const marginSpacer =
        tokenToolJSON.tokenConfig.tokenSizes.tokenSpacerMargin * 2;

    const tokenSize = tokenSizeConfig.tokenSize + circleBorderThickness;
    const tokenSquareSize = tokenSize + squareBorderThickness;
    const tokenAreaSize = tokenSquareSize + marginSpacer;

    return {
        circle: createCircle(
            roleMidPoint,
            roleMidPoint,
            textCircleSize,
            type === "reminder" ? 90 : 0,
        ),
        tokenSize,
        tokenSquareSize,
        tokenAreaSize,
        imageSize:
            tokenSizeConfig.tokenSize -
            tokenSizeConfig.tokenMargin * 2 -
            (type === "reminder"
                ? tokenSizeConfig.tokenImageBMargin
                : tokenSizeConfig.tokenImageBMargin * 2),
        imageMarginX:
            tokenSizeConfig.tokenMargin +
            (type === "reminder"
                ? tokenSizeConfig.tokenImageBMargin / 2
                : tokenSizeConfig.tokenImageBMargin),
        imageMarginY:
            type === "reminder"
                ? tokenSizeConfig.tokenMargin
                : tokenSizeConfig.tokenMargin +
                  tokenSizeConfig.tokenImageBMargin,
    };
};

const generateTokenPages = (tokenToolJSON: ScriptJSONSchemaType) => {
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
    const printableHeight = pageSizes.height - 20 - pageSizes.margin * 2;
    const printableWidth = pageSizes.width - pageSizes.margin * 2;
    let availablePageSpace = printableHeight;
    let availableRowSpace = printableWidth;
    let currentPage = 0;
    let currentRow = 0;
    const pageLayout: PageLayout = [];

    const generatedTokenDetails = {
        role: generateTokenSizes(tokenToolJSON, "role"),
        reminder: generateTokenSizes(tokenToolJSON, "reminder"),
    };

    const addTokenToPage = (token: LayoutToken) => {
        const type = "leaves" in token ? "role" : "reminder";
        const tokenSizes = generatedTokenDetails[type];
        const tokenSize = tokenSizes.tokenAreaSize;
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
        generatedTokenDetails,
        pages: pageLayout,
    };
};

export default generateTokenPages;
