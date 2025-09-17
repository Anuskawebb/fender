import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  disable: false,
});

export default withPWA({
  output: "export",
  distDir: "./dist",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
  },

  // 👇 Add this to tell Next.js to ignore the folder
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /fender-contracts/,
      use: "ignore-loader",
    });
    return config;
  },

   typescript: {
    ignoreBuildErrors: true, // ⚠️ This skips ALL type errors, not just fender-contracts
  },
});
