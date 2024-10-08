import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@context": path.resolve(__dirname, "./src/context"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
        },
    },
    plugins: [react()],
});
