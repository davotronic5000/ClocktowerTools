import getBackupRoleImage from "@/components/images/get-role-image";
import getRole from "@/components/json-upload/get-role";
import {
    RoleType,
    categories,
} from "@/components/json-upload/universal-json-validator";
import jinxes from "@/data/jinx";
import Image from "next/image";
import { Fragment } from "react";

interface RoleListProps {
    roles: RoleType[];
    spaceEfficientLayout: boolean;
}

const sortRolesEfficiently = (roles: RoleType[]) => {
    const groups = categories.filter((category) =>
        roles.some((role) => role.category === category),
    );
    let sortedRoles: RoleType[] = [];
    groups.forEach((group, i) => {
        const groupRoles = roles
            .filter((role) => role.category === group)
            .sort((a, b) => {
                const aLength = a.ability?.length || 0;
                const bLength = b.ability?.length || 0;
                const isEven = i % 2 === 0;
                return isEven ? aLength - bLength : bLength - aLength;
            });
        sortedRoles = sortedRoles.concat(groupRoles);
    });
    return sortedRoles;
};

const RoleList = ({ roles, spaceEfficientLayout }: RoleListProps) => {
    const sortedRoles = spaceEfficientLayout
        ? sortRolesEfficiently(roles)
        : roles;
    return (
        <Fragment>
            {sortedRoles.map((role) => (
                <div
                    key={role.id}
                    className="grid grid-cols-[50px_auto] gap-x-1"
                >
                    <div>
                        <Image
                            alt={`role-${role.id}`}
                            src={role.image || getBackupRoleImage()}
                            priority
                            width={50}
                            height={50}
                            style={{
                                objectFit: "cover",
                            }}
                            quality={100}
                        />
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <div className="font-semibold leading-tight">
                                {role.name}
                            </div>
                            <div className="flex">
                                {jinxes[role.id]?.jinx
                                    .filter((jinx) =>
                                        roles.some((e) => e.id === jinx.id),
                                    )
                                    .slice(0, 8)
                                    .map((jinx) => (
                                        <Image
                                            key={jinx.id}
                                            alt={`jinx-${jinx.id}`}
                                            src={
                                                getRole(jinx.id).image ||
                                                getBackupRoleImage()
                                            }
                                            priority
                                            width={20}
                                            height={20}
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            quality={100}
                                        />
                                    ))}
                            </div>
                            <div className="font-semibold leading-tight ">
                                {jinxes[role.id]?.jinx.length >= 8
                                    ? "..."
                                    : null}
                            </div>
                        </div>
                        <div className="w-[97%] text-sm leading-tight">
                            {role.ability}
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default RoleList;
