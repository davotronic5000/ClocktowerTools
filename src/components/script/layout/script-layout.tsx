import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import { ReactNode } from "react";
import oldStandard from "./old-standard-loader";
import oswaldPro from "./oswald-loader";

interface ScriptLayoutProps {
    children?: ReactNode;
}

const roleTypeOrder = ["townsfolk", "outsider", "minion", "demon"];

const ScriptLayout = ({ children }: ScriptLayoutProps) => {
    return (
        <PageViewer>
            <SinglePage>
                <div
                    className={`grid h-full w-full grid-cols-[40px_1fr] grid-rows-[min-content_auto_40px] ${oswaldPro.variable} ${oldStandard.variable}`}
                >
                    <div className="col-start-1 row-span-full border-r border-stone-700 bg-red-800" />
                    <div className="font-title col-start-2 mb-2.5 mt-1.5 justify-self-center text-4xl text-amber-950">
                        Title
                    </div>
                    <div className="font-content col-span-full row-start-2 grid grid-cols-[40px_1fr] grid-rows-[min-content]">
                        {roleTypeOrder.map((role) => (
                            <div
                                className="vertical-writing-rl orientation-upright col-span-1 col-start-1 place-self-center text-base font-extrabold uppercase text-gray-200"
                                key={role}
                            >
                                {role}
                            </div>
                        ))}
                        Roles
                    </div>
                    <div className="font-title col-start-2 self-end justify-self-center text-lg">
                        *Not The First Night
                    </div>
                </div>
            </SinglePage>
        </PageViewer>
    );
};

export default ScriptLayout;
