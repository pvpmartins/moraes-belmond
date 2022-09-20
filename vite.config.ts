import {resolve} from 'path'
import {defineConfig} from 'vite'

// const outDir = resolve()

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "/index.html"),
                sobre: resolve(__dirname, "/sobre.html"),
                contato: resolve(__dirname, "/contato.html"),
            },
        },
    },
});