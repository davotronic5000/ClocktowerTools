import { useScriptContext } from "./_script-context/use-script-context";

const Viewer = () => {
    const { scriptPDF } = useScriptContext();
    return (
        <article className="h-full grow overflow-auto">
            {scriptPDF ? "PDF" : "NO PDF"}
            <div className="h-[2000px]">Stuff</div>
        </article>
    );
};

export default Viewer;
