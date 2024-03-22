import { TokenToolSchemaType } from "../validators/token-tool-schema";

export interface BaseLayoutToken {
    id: string;
}

export interface RoleLayoutToken extends BaseLayoutToken {
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

const generateTokenPages = (tokenToolJSON: TokenToolSchemaType) => {
    const { reminderList, roleList } = tokenToolJSON.roles.reduce(
        (acc, curr) => {
            for (let i = 0; i < curr.count; i++) {
                acc.roleList.push({
                    id: curr.id,
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

    const pageSizes = tokenToolJSON.page;
    const printableHeight = pageSizes.height - pageSizes.margin * 2;
    const printableWidth = pageSizes.width - pageSizes.margin * 2;
    let availablePageSpace = printableHeight;
    let availableRowSpace = printableWidth;
    let currentPage = 0;
    let currentRow = 0;
    const pageLayout: PageLayout = [];

    const addTokenToPage = (token: LayoutToken) => {
        const type = "leaves" in token ? "role" : "reminder";
        const tokenSizes = pageSizes.tokenSizes[type];
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
    return pageLayout;
};

export default generateTokenPages;
