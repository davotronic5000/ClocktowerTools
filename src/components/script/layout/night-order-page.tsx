import getBackupRoleImage from "@/components/images/get-role-image";
import { RoleType } from "@/components/json-upload/universal-json-validator";
import Image from "next/image";
import { Fragment, ReactNode } from "react";

interface NightOrderPageProps {
    name: string;
    author?: string;
    nightType: "First Night" | "Other Night";
    roles: RoleType[];
    children?: ReactNode;
}

const NightOrderPage = ({
    name,
    nightType,
    roles,
    children,
}: NightOrderPageProps) => {
    return (
        <div className="col-span-full row-span-full grid grid-rows-[min-content_min-content_min-content]">
            <div className="col-start-2 mb-2.5 mt-2.5 justify-self-center text-amber-950">
                <div className="font-title text-4xl leading-none">{name}</div>
            </div>
            <div className="col-span-1 col-start-1 row-span-1 row-start-2 place-self-center py-4 font-content text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                {nightType}
            </div>
            <div
                className="col-start-2 grid grid-cols-[35px_auto_auto] gap-x-1 gap-y-2 font-content"
                style={{
                    gridTemplateRows: `repeat(${
                        nightType === "First Night"
                            ? roles.filter(({ firstNight }) => firstNight)
                                  .length
                            : roles.filter(({ otherNight }) => otherNight)
                                  .length
                    }, auto)`,
                }}
            >
                {roles
                    .filter(({ firstNight, otherNight }) =>
                        nightType === "First Night"
                            ? firstNight && firstNight !== undefined
                            : otherNight && otherNight !== undefined,
                    )
                    .sort((a, b) =>
                        nightType === "First Night"
                            ? a.firstNight! - b.firstNight!
                            : a.otherNight! - b.otherNight!,
                    )
                    .map((role) => (
                        <Fragment key={role.id}>
                            <div className="col-span-1 col-start-1 content-center">
                                <Image
                                    alt={`role-${role.id}`}
                                    src={role.image || getBackupRoleImage()}
                                    width={35}
                                    height={35}
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    quality={100}
                                />
                            </div>
                            <div className="col-span-1 col-start-2 content-center font-semibold leading-tight">
                                {role.name}
                            </div>
                            <div className="col-span-1 col-start-3 content-center text-sm leading-tight">
                                {nightType === "First Night"
                                    ? role.firstNightReminder
                                    : role.otherNightReminder}
                            </div>
                        </Fragment>
                    ))}
            </div>
            {children}
        </div>
    );
};

export default NightOrderPage;
