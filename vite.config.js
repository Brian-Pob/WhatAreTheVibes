import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  // server: {
  //   https: true,
  // },
  plugins: [
    mkcert(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "My Awesome App",
        short_name: "MyApp",
        description: "My Awesome App description",
        theme_color: "#1a1a1a",

        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "preview.png",
            sizes: "1204x958",
            type: "image/png",
            form_factor: "wide",
            label: "Screenshots 1",
          },
          {
            src: "preview.png",
            sizes: "1204x958",
            type: "image/png",
            label: "Screenshots 1",
          },
        ],
      },
    }),
  ],
});
