import jinxes from "@/data/jinx";
import roles from "@/data/roles";
import RoleItem from "./role-item";

const sortedJinxes = Object.keys(jinxes).sort((a, b) => {
    let returnValue = -1;
    switch (roles[a].team) {
        case "townsfolk":
            returnValue = -1;
            break;
        case "outsider":
            returnValue = roles[b].team === "townsfolk" ? 1 : -1;
            break;
        case "minion":
            returnValue = roles[b].team === "demon" ? -1 : 1;
            break;
        case "demon":
            returnValue = 1;
            break;
    }
    return returnValue;
});

const Page = () => {
    return (
        <div>
            <div
                className={`grid h-full w-full grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-2 p-2 sm:gap-4 sm:p-4`}
            >
                {/* <div className="p2 rounded bg-indigo-950">Hello</div> */}
                {sortedJinxes.map((key) => {
                    const role = roles[key];
                    const jinxList = jinxes[key].jinx;
                    const jinxSize = jinxList.length + 1;
                    return (
                        <div
                            key={key}
                            className="grid auto-rows-min grid-cols-2 rounded bg-indigo-950 p-2"
                            style={{
                                gridRow: `span ${jinxSize} / span ${jinxSize}`,
                            }}
                        >
                            <RoleItem
                                inverted
                                id={key}
                                name={role.name || "Unknown"}
                                description={role.ability || "Unknown"}
                            />
                            {jinxList.map((jinxContent) => (
                                <RoleItem
                                    key={jinxContent.id}
                                    id={jinxContent.id}
                                    name={
                                        roles[jinxContent.id].name || "Unknown"
                                    }
                                    description={jinxContent.reason}
                                    updates={jinxContent.updates}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
