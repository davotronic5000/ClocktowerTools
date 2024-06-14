import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import CoverPage from "./cover-page";
import NightJinx from "./night-order-jinx";
import NightOrderPage from "./night-order-page";
import NightSuggested from "./night-order-suggested";
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
        useGradient: script.scriptColourOptions.useGradient,
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
            <ScriptPageWithSideBar {...colourOptions}>
                <NightOrderPage
                    name={script.name}
                    nightType="First Night"
                    roles={script.roles}
                >
                    <NightSuggested roles={roles} />
                </NightOrderPage>
            </ScriptPageWithSideBar>
            <ScriptPageWithSideBar {...colourOptions}>
                <NightOrderPage
                    name={script.name}
                    nightType="Other Night"
                    roles={script.roles}
                >
                    <NightJinx roles={script.roles} />
                </NightOrderPage>
            </ScriptPageWithSideBar>
        </PageViewer>
    );
};

export default ScriptLayout;
