import { Heading } from "@/components/typography";
import RoleSelector from "./role-selector";

interface PageProps {}

const Page = ({}: PageProps) => {
    return (
        <div className="m-4 flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center rounded-lg bg-indigo-950 p-4 text-slate-200 md:w-[450px] md:p-8">
                <Heading className="mb-4 text-white underline underline-offset-2">
                    Role Info
                </Heading>
                <RoleSelector />
            </div>
        </div>
    );
};

export default Page;
