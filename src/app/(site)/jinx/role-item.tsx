import { Icon } from "@/components/icon";
import getBackupRoleImage from "@/components/images/get-role-image";
import getRole from "@/components/json-upload/get-role";
import InfoButton from "@/components/popover/info-button";
import { Heading } from "@/components/typography";
import { JinxContent } from "@/data/jinx";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import Image from "next/image";

interface RoleItemProps {
    id: string;
    name: string;
    description: string;
    inverted?: boolean;
    className?: string;
    updates?: JinxContent["updates"];
}

const RoleItem = ({
    id,
    name,
    description,
    inverted = false,
    updates = [],
    className = "",
}: RoleItemProps) => {
    const timeLimit = today(getLocalTimeZone()).subtract({ months: 2 });
    const newUpdates = updates.filter(
        (update) => parseDate(update.date).compare(timeLimit) > 0,
    );
    const latestUpdate = newUpdates.pop();
    return (
        <div
            className={`col-span-2 grid grid-cols-[50px_auto] gap-x-1 rounded-sm ${
                inverted ? "bg-slate-400" : ""
            } ${className}`}
        >
            <Image
                alt={`role-${id}`}
                src={getRole(id).image || getBackupRoleImage()}
                priority
                width={50}
                height={50}
                style={{
                    objectFit: "cover",
                }}
                quality={100}
            />
            <div
                className={`p-2 pl-0 ${
                    inverted ? "text-slate-900" : "text-slate-200"
                }`}
            >
                <div className="flex items-center justify-between">
                    <Heading as="h3">{name}</Heading>
                    {latestUpdate && (
                        <InfoButton
                            text={
                                <>
                                    <Icon type="sparkles" size="xxs" /> Updated!
                                </>
                            }
                        >
                            {latestUpdate.reason}
                        </InfoButton>
                    )}
                </div>
                <div className="leading-tight">{description}</div>
            </div>
        </div>
    );
};

export default RoleItem;
