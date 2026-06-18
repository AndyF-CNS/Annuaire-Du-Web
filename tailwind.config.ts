export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Vérifiez que ce motif couvre bien src/components/ui/
  ],

  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' }, // Défile de 0 jusqu'à la moitié (le premier bloc)
        },
      },
    },
  }
}