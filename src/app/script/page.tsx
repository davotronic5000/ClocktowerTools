import { Heading } from "@/components/typography";

const Page = () => {
    return (
        <div className="flex grow overflow-auto">
            <section className="bg-indigo-950 overflow-auto h-full border-r-2 border-gray-600 border-solid shadow-xl shadow-gray-900 text-gray-200 py-4 px-8">
                <Heading className="px-4 border-b border-gray-200 border-solid">
                    Script Tool Options
                </Heading>
            </section>
            <article className="overflow-auto h-full grow">
                PDF
                <div className="h-[2000px]">Stuff</div>
            </article>
        </div>
    );
};

export default Page;
