import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import CoverPage from "./cover-page";
import PlayerPage from "./player-page";
import ScriptPageWithSideBar from "./script-page-with-sidebar";

interface ScriptLayoutProps {
    script: ScriptJSONSchemaType;
    noPageGap?: boolean;
}

const ScriptLayout = ({ script, noPageGap }: ScriptLayoutProps) => {
    const roles = script.roles;
    const colourOptions = {
        primaryColour: script.scriptColourOptions.colour,
        secondaryColour: script.scriptColourOptions.secondaryColour,
        colourBlendType: script.scriptColourOptions.colourBlendType,
    };
    return (
        <PageViewer noPageGap={noPageGap}>
            <ScriptPageWithSideBar {...colourOptions}>
                <PlayerPage
                    name={script.name}
                    author={script.author}
                    roles={roles}
                />
            </ScriptPageWithSideBar>
            <SinglePage>
                <CoverPage name={script.name} {...colourOptions} />
            </SinglePage>
        </PageViewer>
    );
};

export default ScriptLayout;
