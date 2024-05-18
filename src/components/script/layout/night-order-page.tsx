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
    author,
    nightType,
    roles,
    children,
}: NightOrderPageProps) => {
    return (
        <Fragment>
            <div className="z-0 col-span-full row-span-full grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content]">
                <div className="col-start-2 mb-2.5 mt-2.5 justify-self-center  text-amber-950">
                    <div className="font-title text-4xl leading-none">
                        {name}
                    </div>
                    {author && (
                        <div className="text-center font-serif text-sm leading-tight">
                            by {author}
                        </div>
                    )}
                </div>
                <div className="col-span-1 col-start-1 row-span-full row-start-2 place-self-center whitespace-nowrap py-4 text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                    {nightType}
                </div>
                <div
                    className="col-start-2 grid grid-flow-row grid-cols-[35px_auto_1fr] gap-x-1 gap-y-1"
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
            </div>
        </Fragment>
    );
};

export default NightOrderPage;
