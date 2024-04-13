/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "perenual.com",
            },
        ],
    },
};

export default nextConfig;
