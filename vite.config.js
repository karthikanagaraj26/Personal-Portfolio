import { defineConfig } from 'vite'
import react from '@reactjs/react-plugin' // (or vue, etc., depending on your framework)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Personal-Portfolio/', // 👈 ADD THIS LINE
  plugins: [react()],
})
