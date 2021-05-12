import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/swc-playground/",
  optimizeDeps: {
    exclude: ["./vendor/swc-wasm-web/*"],
  },
  plugins: [reactRefresh(), vanillaExtractPlugin()],
});
