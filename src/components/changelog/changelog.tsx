import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

const ChangeLog = async () => {
    const changeLog = fs.readFileSync("changelog.mdx");
    return (
        <div className="prose prose-sm prose-slate prose-invert self-center">
            <MDXRemote source={changeLog} />
        </div>
    );
};

export default ChangeLog;
