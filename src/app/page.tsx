import Link from "next/link";
import { ComponentType } from "react";

const Page: ComponentType = () => {
    return (
        <main>
            <Link href="/script" className="btn btn-primary">
                Script Generator
            </Link>
            <Link href="/token" className="btn btn-secondary">
                Token Generator
            </Link>
        </main>
    );
};

export default Page;
