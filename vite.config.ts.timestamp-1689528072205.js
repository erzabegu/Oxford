// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// postcss.config.js
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// tailwind.config.js
var tailwind_config_default = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        20: "1.25rem"
      },
      lineHeight: {
        60: "3.75rem"
      },
      colors: {
        primary: "#163369",
        secondary: "#47B5FF",
        mediumblue: "#465E8B",
        lightblue: "#0EA5E9",
        lightgray: "#909CB2",
        blue: "#3057A3",
        mediumblack: "#232323",
        "orange-50": "#FFF8ED",
        "cyan-50": "#ECFEFF",
        "teal-50": "#F0FDFA",
        "blue-50": "#F0F9FF"
      },
      padding: {
        "17px": "1.0625rem",
        "9px": "0.5625rem",
        "43px": "2.71875rem",
        "100px": "6.25rem",
        "38px": "2.375rem"
      },
      margin: {
        "100px": "6.25rem",
        "5px": "0.3125rem",
        "70px": "4.375rem",
        "145px": "9.0625rem"
      },
      gap: {
        "91px": "5.6875rem",
        "11px": "0.6875rem"
      },
      height: {
        "714px": "44.625rem",
        "52px": "3.25rem",
        "190px": "11.875rem"
      },
      width: {
        "52px": "3.25rem"
      },
      spacing: {
        "261px": "16.3125rem",
        "67px": "4.1875rem"
      },
      borderRadius: {
        "10px": "0.625rem"
      }
    }
  },
  plugins: []
};

// postcss.config.js
var postcss_config_default = {
  plugins: [tailwind(tailwind_config_default), autoprefixer]
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: postcss_config_default
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicG9zdGNzcy5jb25maWcuanMiLCAidGFpbHdpbmQuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgcG9zdGNzcyBmcm9tICcuL3Bvc3Rjc3MuY29uZmlnLmpzJztcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdHNjb25maWdQYXRocygpXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzcyxcbiAgfSxcbn0pO1xuIiwgImltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5pbXBvcnQgdGFpbHdpbmRDb25maWcgZnJvbSAnLi90YWlsd2luZC5jb25maWcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBsdWdpbnM6IFt0YWlsd2luZCh0YWlsd2luZENvbmZpZyksIGF1dG9wcmVmaXhlcl0sXG59O1xuIiwgIi8qKiBAdHlwZSB7aW1wb3J0KCd0YWlsd2luZGNzcycpLkNvbmZpZ30gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGVudDogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMvKiovKi57anMsdHMsanN4LHRzeH0nXSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgIDIwOiAnMS4yNXJlbScsXG4gICAgICB9LFxuICAgICAgbGluZUhlaWdodDoge1xuICAgICAgICA2MDogJzMuNzVyZW0nLFxuICAgICAgfSxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBwcmltYXJ5OiAnIzE2MzM2OScsXG4gICAgICAgIHNlY29uZGFyeTogJyM0N0I1RkYnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnIzQ2NUU4QicsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJyMwRUE1RTknLFxuICAgICAgICBsaWdodGdyYXk6ICcjOTA5Q0IyJyxcbiAgICAgICAgYmx1ZTogJyMzMDU3QTMnLFxuICAgICAgICBtZWRpdW1ibGFjazogJyMyMzIzMjMnLFxuICAgICAgICAnb3JhbmdlLTUwJzogJyNGRkY4RUQnLFxuICAgICAgICAnY3lhbi01MCc6ICcjRUNGRUZGJyxcbiAgICAgICAgJ3RlYWwtNTAnOiAnI0YwRkRGQScsXG4gICAgICAgICdibHVlLTUwJzogJyNGMEY5RkYnLFxuICAgICAgfSxcbiAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgJzE3cHgnOiAnMS4wNjI1cmVtJyxcbiAgICAgICAgJzlweCc6ICcwLjU2MjVyZW0nLFxuICAgICAgICAnNDNweCc6ICcyLjcxODc1cmVtJyxcbiAgICAgICAgJzEwMHB4JzogJzYuMjVyZW0nLFxuICAgICAgICAnMzhweCc6ICcyLjM3NXJlbScsXG4gICAgICB9LFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgICcxMDBweCc6ICc2LjI1cmVtJyxcbiAgICAgICAgJzVweCc6ICcwLjMxMjVyZW0nLFxuICAgICAgICAnNzBweCc6ICc0LjM3NXJlbScsXG4gICAgICAgICcxNDVweCc6ICc5LjA2MjVyZW0nLFxuICAgICAgfSxcbiAgICAgIGdhcDoge1xuICAgICAgICAnOTFweCc6ICc1LjY4NzVyZW0nLFxuICAgICAgICAnMTFweCc6ICcwLjY4NzVyZW0nLFxuICAgICAgfSxcbiAgICAgIGhlaWdodDoge1xuICAgICAgICAnNzE0cHgnOiAnNDQuNjI1cmVtJyxcbiAgICAgICAgJzUycHgnOiAnMy4yNXJlbScsXG4gICAgICAgICcxOTBweCc6ICcxMS44NzVyZW0nLFxuICAgICAgfSxcbiAgICAgIHdpZHRoOiB7XG4gICAgICAgICc1MnB4JzogJzMuMjVyZW0nLFxuICAgICAgfSxcbiAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgJzI2MXB4JzogJzE2LjMxMjVyZW0nLFxuICAgICAgICAnNjdweCc6ICc0LjE4NzVyZW0nLFxuICAgICAgfSxcbiAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICAnMTBweCc6ICcwLjYyNXJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtdLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7OztBQ0YxQixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7OztBQ0F6QixJQUFPLDBCQUFRO0FBQUEsRUFDYixTQUFTLENBQUMsZ0JBQWdCLDRCQUE0QjtBQUFBLEVBQ3RELE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSLElBQUk7QUFBQSxNQUNOO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixJQUFJO0FBQUEsTUFDTjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0gsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQztBQUNaOzs7QUR2REEsSUFBTyx5QkFBUTtBQUFBLEVBQ2IsU0FBUyxDQUFDLFNBQVMsdUJBQWMsR0FBRyxZQUFZO0FBQ2xEOzs7QUREQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUFBLEVBQ2xDLEtBQUs7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
