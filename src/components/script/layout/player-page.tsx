import getBackupRoleImage from "@/components/images/get-role-image";
import { RoleType } from "@/components/json-upload/universal-json-validator";
import Image from "next/image";
import { Fragment, ReactNode } from "react";

interface PlayerPageProps {
    name: string;
    author?: string;
    roles: RoleType[];
    children?: ReactNode;
}

const roleTypeOrder = ["townsfolk", "outsider", "minion", "demon"] as const;

const PlayerPage = ({ name, author, roles }: PlayerPageProps) => {
    return (
        <Fragment>
            <div className="col-start-2 mb-2.5 mt-2.5 justify-self-center  text-amber-950">
                <div className="font-title text-4xl leading-none">{name}</div>
                {author && (
                    <div className="text-center font-serif text-sm leading-tight">
                        by {author}
                    </div>
                )}
            </div>
            <div className="z-0 col-span-full row-start-2 grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content_min-content_min-content] font-content">
                {roleTypeOrder.map((roleType) => (
                    <Fragment key={roleType}>
                        <div className="col-span-1 col-start-1 place-self-center py-4 text-base font-extrabold uppercase text-gray-200 vertical-writing-rl orientation-upright">
                            {roleType}
                        </div>
                        <div
                            className="col-start-2 grid grid-cols-2 gap-y-1 border-b border-stone-700 py-2 last:border-b-0"
                            style={{
                                gridTemplateRows: `repeat(${
                                    roles.filter(
                                        ({ team }) => team === roleType,
                                    ).length / 2
                                }, auto)`,
                            }}
                        >
                            {roles
                                .filter(({ team }) => team === roleType)
                                .map((role) => (
                                    <div
                                        key={role.id}
                                        className="grid grid-cols-[50px_auto] gap-x-1"
                                    >
                                        <div>
                                            <Image
                                                alt={`role-${role.id}`}
                                                src={
                                                    role.image ||
                                                    getBackupRoleImage()
                                                }
                                                width={50}
                                                height={50}
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                                quality={100}
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold leading-tight">
                                                {role.name}
                                            </div>
                                            <div className="w-[97%] text-sm leading-tight">
                                                {role.ability}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </Fragment>
                ))}
            </div>
            <div className="col-start-2 self-end justify-self-center font-title text-lg">
                *Not The First Night
            </div>
        </Fragment>
    );
};

export default PlayerPage;
