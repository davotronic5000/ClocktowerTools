import oldStandard from "@/components/font-loader/old-standard-loader";
import oswaldPro from "@/components/font-loader/oswald-loader";
import getBackupRoleImage from "@/components/images/get-role-image";
import GetRole from "@/components/json-upload/get-role";
import jinxes from "@/data/jinx";
import roles from "@/data/roles";
import Image from "next/image";

const Page = () => {
    return (
        <div
            className={`grid h-full w-full grid-cols-3 ${oswaldPro.variable} ${oldStandard.variable}`}
        >
            {Object.keys(jinxes)
                .sort((a, b) => {
                    let returnValue = -1;
                    switch (roles[a].team) {
                        case "townsfolk":
                            returnValue = -1;
                            break;
                        case "outsider":
                            returnValue =
                                roles[b].team === "townsfolk" ? 1 : -1;
                            break;
                        case "minion":
                            returnValue = roles[b].team === "demon" ? -1 : 1;
                            break;
                        case "demon":
                            returnValue = 1;
                            break;
                    }
                    return returnValue;
                })
                .map((key) => (
                    <div
                        key={key}
                        className="m-2 grid auto-rows-min grid-cols-2 rounded-lg bg-indigo-950 pb-2 font-content"
                    >
                        <div className="col-span-2 m-2 grid grid-cols-[50px_auto] gap-x-1 rounded-sm bg-slate-400 p-2">
                            <div>
                                <Image
                                    alt={`role-${roles[key].id}`}
                                    src={
                                        GetRole(key).image ||
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
                                    {roles[key].name}
                                </div>
                                <div className="w-[97%] text-sm leading-tight">
                                    {roles[key].ability}
                                </div>
                            </div>
                        </div>
                        {jinxes[key].jinx.map((jinxContent) => (
                            <div
                                key={jinxContent.id}
                                className="grid grid-cols-[50px_auto] gap-x-1 p-1"
                            >
                                <div>
                                    <Image
                                        alt={`role-${jinxContent.id}`}
                                        src={
                                            GetRole(jinxContent.id).image ||
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
                                    <div className="font-semibold leading-tight text-gray-200">
                                        {roles[jinxContent.id].name}
                                    </div>
                                    <div className="w-[97%] text-sm leading-tight text-gray-200">
                                        {jinxContent.reason}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default Page;