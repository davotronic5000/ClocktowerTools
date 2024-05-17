import { Fragment, ReactNode } from "react";

interface NightOrderPageProps {
    name: string;
    author?: string;
    nightType: "First Night" | "Other Night";
    children?: ReactNode;
}

const NightOrderPage = ({
    name,
    author,
    nightType,
    children,
}: NightOrderPageProps) => {
    return (
        <Fragment>
            <div className="z-0 col-span-full row-span-full grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content]">
                <div className="col-start-2 mb-2.5 mt-2.5 justify-self-center  text-amber-950">
                    <div className="font-title text-4xl leading-none">
                        {name}
                    </div>
                    {author && (
                        <div className="text-center font-serif text-sm leading-tight">
                            by {author}
                        </div>
                    )}
                </div>
                <div className="col-span-1 col-start-1 row-start-2 row-end-3 place-self-center whitespace-nowrap py-4 text-base font-extrabold uppercase text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] vertical-writing-rl orientation-upright">
                    {nightType}
                </div>
            </div>
        </Fragment>
    );
};

export default NightOrderPage;
