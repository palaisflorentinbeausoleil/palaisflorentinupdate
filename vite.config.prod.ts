import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// Configuration de production pour palaisflorentin.com
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimisations pour la production
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Code splitting optimisé
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          utils: ['clsx', 'tailwind-merge'],
        },
        // Optimisation des noms de fichiers
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext || '')) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Optimisation des assets
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 1000,
  },
  // Configuration pour la production
  base: 'https://palaisflorentin.com',
  // Optimisations CSS
  css: {
    devSourcemap: false, // Désactivé en production
  },
  // Optimisations pour les performances
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'clsx',
      'tailwind-merge',
    ],
  },
  // Configuration pour le PWA et le cache
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __PRODUCTION__: JSON.stringify(true),
  },
})
