import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import mkcert from "vite-plugin-mkcert";
import pwaoptions from "./pwaoptions";

export default defineConfig({
  plugins: [
    mkcert(),
    VitePWA(pwaoptions),
  ],
});
