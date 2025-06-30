
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.avalcard.com',
                pathname: '/storage/**',
            },
        ],
    },
};

export default nextConfig;
