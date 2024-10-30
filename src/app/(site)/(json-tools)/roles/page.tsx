import Link from "@/components/navigation/link";
import { Heading } from "@/components/typography";

interface PageProps {}

const Page = ({}: PageProps) => {
    return (
        <div className="m-4 flex w-full flex-col items-center">
            <Heading className="text-white underline underline-offset-2">
                Role Info
            </Heading>
            <Link
                href="/roles/undertaker"
                className={`
                w-full
                p-4
                text-center
                underline-offset-4
                hover:text-amber-400
                md:w-auto
                md:py-0
                md:text-left`}
            >
                Undertaker
            </Link>
        </div>
    );
};

export default Page;
