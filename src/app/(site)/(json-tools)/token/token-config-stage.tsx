"use client";
import { useJSONContext } from "@/components/json-upload/use-json-context";
import TokenConfigForm from "./token-config-form";

interface TokenConfigProps {}

const TokenConfig = ({}: TokenConfigProps) => {
    const { json } = useJSONContext();
    if (json) {
        return <TokenConfigForm json={json} />;
    }
    return <div>An error has occured</div>;
};

export default TokenConfig;
