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
        const tokenSize = tokenSizes.tokenSize + tokenSizes.tokenMargin * 2;
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
    const roleCircleSize =
        (tokenToolJSON.tokenConfig.tokenSizes.role.tokenSize -
            tokenToolJSON.tokenConfig.tokenSizes.role.tokenMargin -
            (tokenToolJSON.tokenConfig.tokenStyles.border.circleBorder
                ? tokenToolJSON.tokenConfig.tokenStyles.border.thickness
                : 0)) /
        2;
    const roleMidPoint =
        tokenToolJSON.tokenConfig.tokenSizes.role.tokenSize / 2;
    return {
        printableHeight,
        printableWidth,
        tokenConfig: tokenToolJSON.tokenConfig,
        generatedTokenDetails: {
            role: {
                circle: createCircle(
                    roleMidPoint,
                    roleMidPoint,
                    roleCircleSize,
                    135,
                ),
                tokenAreaSize:
                    tokenToolJSON.tokenConfig.tokenSizes.role.tokenSize +
                    tokenToolJSON.tokenConfig.tokenSizes.role.tokenMargin * 2,
                tokenSquareSize:
                    tokenToolJSON.tokenConfig.tokenSizes.role.tokenSize +
                    (tokenToolJSON.tokenConfig.tokenStyles.border.squareBorder
                        ? tokenToolJSON.tokenConfig.tokenStyles.border
                              .thickness * 2
                        : 0),
                imageSize:
                    tokenToolJSON.tokenConfig.tokenSizes.role.tokenSize -
                    tokenToolJSON.tokenConfig.tokenSizes.role.tokenMargin * 2 -
                    (tokenToolJSON.tokenConfig.tokenStyles.border.squareBorder
                        ? tokenToolJSON.tokenConfig.tokenStyles.border
                              .thickness * 2
                        : 0),
                imageMargin:
                    tokenToolJSON.tokenConfig.tokenSizes.role.tokenMargin +
                    (tokenToolJSON.tokenConfig.tokenStyles.border.squareBorder
                        ? tokenToolJSON.tokenConfig.tokenStyles.border.thickness
                        : 0),
            },
        },
        pages: pageLayout,
    };
};

export default generateTokenPages;
