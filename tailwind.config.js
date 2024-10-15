/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./templates/**/*.{html,js}", // Pastikan untuk memasukkan semua file HTML dan JS
    "./src/**/*.{html,js}", // Tambahkan jalur ini jika Anda memiliki file di dalam folder src
  ],
  theme: {
    extend: {
      // Kustomisasi tema Anda di sini
    },
  },
  plugins: [
    require("daisyui"),
    // Tambahkan plugin lain jika diperlukan
  ],
});
