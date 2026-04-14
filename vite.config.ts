import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babelPlugin from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [react(), babelPlugin({ presets: [reactCompilerPreset()] }), tailwindcss()],
})
