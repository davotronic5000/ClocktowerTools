import getBackupRoleImage from "@/components/images/get-role-image";
import getRole from "@/components/json-upload/get-role";
import { Heading } from "@/components/typography";
import Image from "next/image";

interface RoleItemProps {
    id: string;
    name: string;
    description: string;
    inverted?: boolean;
    className?: string;
}

const RoleItem = ({
    id,
    name,
    description,
    inverted = false,
    className = "",
}: RoleItemProps) => {
    return (
        <div
            className={`col-span-2 grid grid-cols-[50px_auto] gap-x-1 rounded-sm ${
                inverted ? "bg-slate-400" : ""
            } ${className}`}
        >
            <Image
                alt={`role-${id}`}
                src={getRole(id).image || getBackupRoleImage()}
                priority
                width={50}
                height={50}
                style={{
                    objectFit: "cover",
                }}
                quality={100}
            />
            <div
                className={`p-2 pl-0 ${
                    inverted ? "text-slate-900" : "text-slate-200"
                }`}
            >
                <Heading as="h3">{name}</Heading>
                <div className="leading-tight">{description}</div>
            </div>
        </div>
    );
};

export default RoleItem;
