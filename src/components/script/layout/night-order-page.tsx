import { Fragment, ReactNode } from "react";

interface NightOrderPageProps {
    nightType: "First Night" | "Other Night";
    children?: ReactNode;
}

const NightOrderPage = ({ nightType, children }: NightOrderPageProps) => {
    return (
        <Fragment>
            <div className="z-0 col-span-full row-span-full grid grid-cols-[40px_1fr] grid-rows-[min-content_min-content]">
                <div className="col-span-1 col-start-1 row-span-full place-self-center py-4 text-base font-extrabold uppercase text-gray-200 vertical-writing-rl orientation-upright">
                    {nightType}
                </div>
                <div className="col-start-2 row-span-1 row-start-1"></div>
                <div className="col-start-2 row-span-1 row-start-2">
                    {children}
                </div>
            </div>
        </Fragment>
    );
};

export default NightOrderPage;
