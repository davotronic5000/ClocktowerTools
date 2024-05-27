import getBackupRoleImage from "@/components/images/get-role-image";
import GetRole from "@/components/json-upload/get-role";
import { RoleType } from "@/components/json-upload/universal-json-validator";
import jinxes, { Jinxes } from "@/data/jinx";
import Image from "next/image";
import { Fragment, ReactNode } from "react";

interface NightJinxProps {
    children?: ReactNode;
    roles: RoleType[];
}

const NightJinx = ({ children, roles }: NightJinxProps) => {
    const onScriptJinxes = Object.keys(jinxes)
        .filter((key) => roles.some((role) => role.id === key))
        .reduce(
            (acc, cur) => ({
                ...acc,
                [cur]: {
                    ...jinxes[cur],
                    jinx: jinxes[cur].jinx.filter((jinx) =>
                        roles.some((role) => role.id === jinx.id),
                    ),
                },
            }),
            {} as Jinxes,
        );

    const onScriptJinxCount = Object.keys(onScriptJinxes).reduce(
        (acc, curr) => onScriptJinxes[curr].jinx.length,
        0,
    );

    return onScriptJinxes ? (
        <Fragment>
            <div className="col-span-1 col-start-1 row-span-1 row-start-3 place-self-center py-4 font-content text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                Jinxes
            </div>
            <div
                className="col-start-2 grid grid-cols-2 gap-y-1 border-b border-stone-700 py-2 last:border-b-0"
                style={{
                    gridTemplateRows: `repeat(${onScriptJinxCount / 2}, auto)`,
                }}
            >
                {Object.keys(onScriptJinxes).map((key) =>
                    onScriptJinxes[key].jinx.map((jinx) => (
                        <div
                            key={jinx.id}
                            className="grid grid-cols-[35px_35px_auto] gap-x-1"
                        >
                            <Image
                                alt={`jinx-${key}`}
                                src={GetRole(key).image || getBackupRoleImage()}
                                width={35}
                                height={35}
                                style={{
                                    objectFit: "cover",
                                }}
                                quality={100}
                            />
                            <Image
                                alt={`jinx-${jinx.id}`}
                                src={
                                    GetRole(jinx.id).image ||
                                    getBackupRoleImage()
                                }
                                width={35}
                                height={35}
                                style={{
                                    objectFit: "cover",
                                }}
                                quality={100}
                            />
                            <div className="w-[97%] font-content text-sm leading-tight">
                                {jinx.reason}
                            </div>
                        </div>
                    )),
                )}
            </div>
        </Fragment>
    ) : null;
};

export default NightJinx;
