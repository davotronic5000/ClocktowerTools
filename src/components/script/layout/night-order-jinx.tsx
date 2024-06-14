import getBackupRoleImage from "@/components/images/get-role-image";
import GetRole from "@/components/json-upload/get-role";
import { RoleType } from "@/components/json-upload/universal-json-validator";
import jinxes from "@/data/jinx";
import Image from "next/image";
import qrCode from "public/qr-code.png";
import { Fragment, ReactNode } from "react";

interface NightJinxProps {
    children?: ReactNode;
    roles: RoleType[];
}

const NightJinx = ({ children, roles }: NightJinxProps) => {
    const onScriptJinxes = Object.keys(jinxes)
        .filter((key) => roles.some((role) => role.id === key))
        .reduce(
            (acc, cur) => [
                ...acc,
                ...jinxes[cur].jinx
                    .filter((jinx) => roles.some((role) => role.id === jinx.id))
                    .reduce(
                        (acc1, cur1) => [
                            ...acc1,
                            { id1: cur, id2: cur1.id, reason: cur1.reason },
                        ],
                        [] as { id1: string; id2: string; reason: string }[],
                    ),
            ],
            [] as { id1: string; id2: string; reason: string }[],
        )
        .reduce(
            (acc, cur, index, array) => {
                if (index % 2 === 0) {
                    acc.push(array.slice(index, index + 2));
                }
                return acc;
            },
            [] as { id1: string; id2: string; reason: string }[][],
        );

    return onScriptJinxes.length > 0 ? (
        <Fragment>
            <div className="col-span-1 col-start-1 row-span-1 row-start-2 place-self-center py-4 font-content text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                Jinxes
            </div>
            <div className="flex flex-col">
                <div className="col-start-1 flex flex-shrink flex-grow flex-col flex-wrap gap-y-1 overflow-hidden py-1">
                    <div className="h-0 w-full"></div>
                    {onScriptJinxes.map((jinxPair, i) => (
                        <div key={i} className="grid w-full grid-cols-2">
                            {jinxPair.map((jinx) => (
                                <div
                                    key={jinx.id1 + "_" + jinx.id2}
                                    className="grid grid-cols-[35px_35px_auto] items-center"
                                >
                                    <Image
                                        alt={`jinx-${jinx.id1}`}
                                        src={
                                            GetRole(jinx.id1).image ||
                                            getBackupRoleImage()
                                        }
                                        priority
                                        width={35}
                                        height={35}
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        quality={100}
                                    />
                                    <Image
                                        alt={`jinx-${jinx.id2}`}
                                        src={
                                            GetRole(jinx.id2).image ||
                                            getBackupRoleImage()
                                        }
                                        priority
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
                            ))}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-[50px_auto] gap-x-1 place-self-center pb-2">
                    <Image
                        alt={"QR Code"}
                        src={qrCode}
                        width={45}
                        height={45}
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                        quality={100}
                    />
                    <div className="flex items-center font-content text-sm font-semibold leading-tight">
                        A full list of Jinxes are available on
                        https://clocktower.guru/jinx. Scan the QR code to
                        access.
                    </div>
                </div>
            </div>
        </Fragment>
    ) : null;
};

export default NightJinx;
