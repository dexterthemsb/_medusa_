import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#111827"
      }
    }
  },
  fonts: {
    body: "Inter, 'sans-serif'",
    heading: "Inter, 'sans-serif'",
    mono: "Consolar, 'monospace'"
  },
  colors: {
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    }
  },
  radii: {
    default: "8px"
  },
  shadows: {
    base: "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
    expanded:
      "0px 4px 6px 0px rgba(0, 0, 0, 0.1), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "indigo.500"
      },
      sizes: {
        sm: {
          field: {
            borderRadius: "default",
            p: 2,
            size: "sm",
            h: "9",
            borderWidth: "1px",
            borderStyle: "solid",
            boxSizing: "border-box"
          }
        }
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "indigo.500"
      },
      sizes: {
        sm: {
          field: {
            p: 2,
            size: "sm",
            h: "9",
            borderWidth: "1px",
            borderStyle: "solid",
            boxSizing: "border-box"
          }
        }
      }
    }
  }
});

console.log(theme);

export default theme;
