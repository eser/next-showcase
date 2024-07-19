/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	experimental: {
		reactCompiler: true,
		ppr: true, // 'incremental',
	},
};

export default nextConfig;
