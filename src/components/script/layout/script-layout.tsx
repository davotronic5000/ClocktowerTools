import { ScriptToolSchemaType } from "@/app/(site)/script/_script-context/script-submission-schema";
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
    noPageGap?: boolean;
    children?: ReactNode;
}

const roleTypeOrder = ["townsfolk", "outsider", "minion", "demon"];

const ScriptLayout = ({ script, noPageGap, children }: ScriptLayoutProps) => {
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
        <PageViewer noPageGap={noPageGap}>
            <SinglePage>
                <div
                    className={`grid h-full w-full grid-cols-[40px_1fr] grid-rows-[min-content_auto_40px] ${oswaldPro.variable} ${oldStandard.variable}`}
                >
                    <div
                        style={{
                            background: script.secondaryColour
                                ? `linear-gradient(${script.colour}, ${script.secondaryColour})`
                                : script.colour,
                        }}
                        className="z-1 col-span-1 col-start-1 row-span-full border-r border-stone-700"
                    >
                        <Image
                            alt="background-texture"
                            src={backPattern}
                            style={{
                                objectFit: "cover",
                                mixBlendMode: script.colourBlendType
                                    ? script.colourBlendType
                                    : "difference",
                            }}
                            placeholder="blur"
                            quality={100}
                            className="h-full w-full opacity-60"
                        />
                    </div>
                    <div className="col-start-2 mb-2.5 mt-2.5 justify-self-center  text-amber-950">
                        <div className="font-title text-4xl leading-none">
                            {script.name}
                        </div>
                        {script.author && (
                            <div className="text-center font-serif text-sm leading-tight">
                                by {script.author}
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
                                                            role.image
                                                                ? role.image
                                                                : `/roles/modern/${role.id}.webp`
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
                </div>
            </SinglePage>
            <SinglePage>
                <div
                    style={{
                        background: script.secondaryColour
                            ? `linear-gradient(${script.colour}, ${script.secondaryColour})`
                            : script.colour,
                    }}
                    className={`relative flex h-full items-center justify-center overflow-hidden ${oswaldPro.variable} ${oldStandard.variable}`}
                >
                    <Image
                        alt="background-texture"
                        src={backPattern}
                        style={{
                            objectFit: "cover",
                            mixBlendMode: script.colourBlendType
                                ? script.colourBlendType
                                : "difference",
                        }}
                        placeholder="blur"
                        quality={100}
                        sizes="100%"
                        fill
                        className=" opacity-60"
                    />
                    <span className="text-center font-title text-7xl text-amber-950 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                        {script.name}
                    </span>
                </div>
            </SinglePage>
        </PageViewer>
    );
};

export default ScriptLayout;
