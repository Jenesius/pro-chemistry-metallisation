import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
export default {
    // config options
    build: {
        assetsDir: "assets",
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                letters: resolve(__dirname, 'letters.html'),
                lights: resolve(__dirname, 'lights.html'),
            },
        },
    },
    publicDir: 'public'
}