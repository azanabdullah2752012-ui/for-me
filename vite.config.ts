import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' 
    ? '/' 
    : (process.env.CAPACITOR_BUILD === 'true' ? './' : (process.env.VITE_BASE || '/for-me/')),
}));

