import { RoleType } from "@/components/json-upload/universal-json-validator";
import { Fragment, ReactNode } from "react";
import RoleList from "./role-list";

interface PlayerPageProps {
    name: string;
    author?: string;
    roles: RoleType[];
    children?: ReactNode;
    layoutOptions: {
        spaceEfficientLayout: boolean;
    };
}

const roleTypeOrder = ["townsfolk", "outsider", "minion", "demon"] as const;

const PlayerPage = ({
    name,
    author,
    roles,
    layoutOptions,
}: PlayerPageProps) => {
    return (
        <div className="col-span-full row-span-full grid grid-rows-[min-content_1fr]">
            <div className="col-start-1 mb-1 mt-2.5 justify-self-center  text-amber-950">
                <div className="font-title text-4xl leading-none">{name}</div>
                {author && (
                    <div className="text-center font-serif text-sm leading-tight">
                        by {author}
                    </div>
                )}
            </div>
            <div className="z-0 col-span-full row-span-full row-start-2 grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content_min-content_min-content] font-content">
                {roleTypeOrder.map((roleType) => (
                    <Fragment key={roleType}>
                        <div className="col-span-1 col-start-1 place-self-center py-2 text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                            {roleType}
                        </div>
                        <div
                            className="col-start-2 grid grid-cols-2 gap-y-1 border-b border-stone-700 py-1.5 last:border-b-0"
                            style={{
                                gridTemplateRows: `repeat(${
                                    roles.filter(
                                        ({ team }) => team === roleType,
                                    ).length / 2
                                }, auto)`,
                            }}
                        >
                            <RoleList
                                roles={roles.filter(
                                    ({ team }) => team === roleType,
                                )}
                                allRoles={roles}
                                spaceEfficientLayout={
                                    layoutOptions.spaceEfficientLayout
                                }
                            />
                        </div>
                    </Fragment>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 col-start-1 justify-self-center text-center font-title text-lg">
                *Not The First Night
            </div>
        </div>
    );
};

export default PlayerPage;
