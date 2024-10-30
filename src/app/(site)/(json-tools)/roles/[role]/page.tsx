import getBackupRoleImage from "@/components/images/get-role-image";
import getRole from "@/components/json-upload/get-role";
import { Heading } from "@/components/typography";
import Image from "next/image";

interface PageProps {
    params: {
        role: string;
    };
}

const Page = ({ params }: PageProps) => {
    const role = getRole(params.role);
    return (
        <div className="flex w-full flex-col items-center justify-center p-4">
            <div className="flex h-full w-full flex-col items-center rounded-lg bg-indigo-950 p-4 text-slate-200 md:h-auto md:w-[450px] md:p-8">
                <Image
                    alt={`role-${role.id}`}
                    src={role.image || getBackupRoleImage()}
                    priority
                    width={200}
                    height={200}
                    style={{
                        objectFit: "cover",
                    }}
                    quality={100}
                />
                <Heading className="mb-0 leading-none">{role.name}</Heading>
                <Heading
                    as="h3"
                    className="mb-2 leading-none text-slate-400 md:mb-4"
                >
                    {role.team}
                </Heading>
                <p>{role.ability}</p>
            </div>
        </div>
    );
};

export default Page;
