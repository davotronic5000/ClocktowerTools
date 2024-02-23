import { ScriptSubmissionType } from "@/app/script/_script-context/script-submission-schema";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import { Fragment, ReactNode } from "react";
import oldStandard from "./old-standard-loader";
import oswaldPro from "./oswald-loader";

interface ScriptLayoutProps {
    script: ScriptSubmissionType;
    children?: ReactNode;
}

const roleTypeOrder = ["townsfolk", "outsider", "minion", "demon"];

const ScriptLayout = ({ script, children }: ScriptLayoutProps) => {
    console.log(script);
    return (
        <PageViewer>
            <SinglePage>
                <div
                    className={`grid h-full w-full grid-cols-[40px_1fr] grid-rows-[min-content_auto_40px] ${oswaldPro.variable} ${oldStandard.variable}`}
                >
                    <div className="col-start-1 row-span-full border-r border-stone-700 bg-red-800" />
                    <div className="col-start-2 mb-2.5 mt-1.5 justify-self-center font-title text-4xl text-amber-950">
                        Title
                    </div>
                    <div className="col-span-full row-start-2 grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content_min-content_min-content] font-content">
                        {roleTypeOrder.map((roleType) => (
                            <Fragment key={roleType}>
                                <div className="col-span-1 col-start-1 place-self-center py-4 text-base font-extrabold uppercase text-gray-200 vertical-writing-rl orientation-upright">
                                    {roleType}
                                </div>
                                <div className="col-start-2 flex border-b border-stone-700 last:border-b-0">
                                    {script.roles
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
