import getBackupRoleImage from "@/components/images/get-role-image";
import { RoleType } from "@/components/json-upload/universal-json-validator";
import Image from "next/image";
import { Fragment, ReactNode } from "react";

interface NightSuggestedProps {
    children?: ReactNode;
    roles: RoleType[];
}

const NightSuggested = ({ children, roles }: NightSuggestedProps) => {
    return roles.filter(({ team }) => team === "traveler" || team === "fabled")
        .length > 0 ? (
        <Fragment>
            <div className="col-span-1 col-start-1 row-span-1 row-start-2 place-self-center py-4 font-content text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                Recommended
            </div>
            <div className="flex flex-col">
                <div className="pt-1 text-center font-semibold uppercase">
                    Travelers and Fabled
                </div>
                <div className="col-start-1 flex flex-shrink flex-grow flex-col flex-wrap gap-y-1 overflow-hidden py-1">
                    <div className="h-0 w-full"></div>
                    <div className="grid w-full grid-cols-2">
                        {roles
                            .filter(
                                ({ team }) =>
                                    team === "traveler" || team === "fabled",
                            )
                            .sort((a, b) => (a.team! > b.team! ? 1 : -1))
                            .map((role) => (
                                <div
                                    key={role.id}
                                    className="grid grid-cols-[50px_auto] items-center"
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
                </div>
            </div>
        </Fragment>
    ) : null;
};

export default NightSuggested;
