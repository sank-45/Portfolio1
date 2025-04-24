// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 this makes Vite listen to all IPs
    port: 5173,      // 👈 or any other port you want
  },
});
