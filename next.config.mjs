/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        ppr: true, // 'incremental',
    },
};

export default nextConfig;
