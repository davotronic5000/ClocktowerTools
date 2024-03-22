import {
    RoleType,
    ScriptToolSchemaType,
    TeamType,
} from "@/app/(site)/(json-upload)/script/_script-context/script-submission-schema";
import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import originalRoles from "@/data/roles";
import { toast } from "react-toastify";
import CoverPage from "./cover-page";
import PlayerPage from "./player-page";
import ScriptPageWithSideBar from "./script-page-with-sidebar";

interface ScriptLayoutProps {
    script: ScriptToolSchemaType;
    noPageGap?: boolean;
}

const ScriptLayout = ({ script, noPageGap }: ScriptLayoutProps) => {
    const roles = script.roles.map((role): RoleType => {
        if ("team" in role) {
            return role;
        }
        const roleId = role.id.replaceAll("_", "").toLowerCase();
        if (roleId in originalRoles) {
            return originalRoles[
                roleId as keyof typeof originalRoles
            ] as RoleType;
        }
        toast.error(`UNKNOWN ROLE: ${roleId} - Not found in roles.json`);
        return {
            id: role.id,
            name: "Unknown Role",
            team: "townsfolk" as TeamType,
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
            <ScriptPageWithSideBar
                primaryColour={script.colour}
                secondaryColour={script.secondaryColour}
                colourBlendType={script.colourBlendType}
            >
                <PlayerPage
                    name={script.name}
                    author={script.author}
                    roles={roles}
                />
            </ScriptPageWithSideBar>
            <SinglePage>
                <CoverPage
                    name={script.name}
                    primaryColour={script.colour}
                    secondaryColour={script.secondaryColour}
                    colourBlendType={script.colourBlendType}
                />
            </SinglePage>
        </PageViewer>
    );
};

export default ScriptLayout;
