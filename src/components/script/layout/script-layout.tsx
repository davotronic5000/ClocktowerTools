import { ScriptToolSchemaType } from "@/app/script/_script-context/script-submission-schema";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import originalRoles from "@/data/roles";
import Image from "next/image";
import backPattern from "public/back-pattern.png";
import { Fragment, ReactNode } from "react";
import { toast } from "react-toastify";
import oldStandard from "./old-standard-loader";
import oswaldPro from "./oswald-loader";

interface ScriptLayoutProps {
    script: ScriptToolSchemaType;
    children?: ReactNode;
}

const roleTypeOrder = ["townsfolk", "outsider", "minion", "demon"];

const ScriptLayout = ({ script, children }: ScriptLayoutProps) => {
    const roles = script.roles.map((role) => {
        if ("team" in role) {
            return role;
        }
        const roleId = role.id.replaceAll("_", "").toLowerCase();
        if (roleId in originalRoles) {
            return originalRoles[roleId as keyof typeof originalRoles];
        }
        toast.error(`UNKNOWN ROLE: ${roleId} - Not found in roles.json`);
        return {
            id: role.id,
            name: "Unknown Role",
            team: "townsfolk",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            ability: "This role is missing a definition",
            image: "good.png",
        };
    });
    return (
        <PageViewer>
            <SinglePage>
                <div
                    className={`grid h-full w-full grid-cols-[40px_1fr] grid-rows-[min-content_auto_40px] ${oswaldPro.variable} ${oldStandard.variable}`}
                >
                    <div
                        style={{ backgroundColor: "DarkGreen" }}
                        className="z-1 col-span-1 col-start-1 row-span-full border-r border-stone-700"
                    >
                        <Image
                            alt="background-texture"
                            src={backPattern}
                            style={{ objectFit: "cover" }}
                            placeholder="blur"
                            quality={100}
                            className="h-full w-full opacity-60 mix-blend-difference"
                        />
                    </div>
                    <div className="col-start-2 mb-2.5 mt-1.5 justify-self-center font-title text-4xl text-amber-950">
                        {script.name}
                    </div>
                    <div className="z-0 col-span-full row-start-2 grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content_min-content_min-content] font-content">
                        {roleTypeOrder.map((roleType) => (
                            <Fragment key={roleType}>
                                <div className="col-span-1 col-start-1 place-self-center py-4 text-base font-extrabold uppercase text-gray-200 vertical-writing-rl orientation-upright">
                                    {roleType}
                                </div>
                                <div className="col-start-2 flex border-b border-stone-700 last:border-b-0">
                                    {roles
                                        .filter(({ team }) => team === roleType)
                                        .map((role) => role.name)}
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <div className="col-start-2 self-end justify-self-center font-title text-lg">
                        *Not The First Night
                    </div>
                </div>
            </SinglePage>
        </PageViewer>
    );
};

export default ScriptLayout;
