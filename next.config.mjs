/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "images.microcms-assets.io",
            },
        ],
    },
};

export default nextConfig;
