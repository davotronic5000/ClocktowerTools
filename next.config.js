const witMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    experimental: {
        typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**",
            },
        ],
    },
};

module.exports = witMDX(nextConfig);
