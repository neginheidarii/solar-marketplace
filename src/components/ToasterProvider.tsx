"use client";
import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 2600,
        // Tailwind classes for most styling
        className:
          "rounded-xl shadow-lg border border-gray-200 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800",
        // Inline styles for anything not covered by classes
        style: {
          fontSize: "0.95rem",
          padding: "10px 14px",
        },
        success: {
          // Success-specific overrides
          iconTheme: { primary: "#2563eb", secondary: "#fff" }, // blue
          className: "ring-1 ring-blue-200/60",
        },
        error: {
          iconTheme: { primary: "#ef4444", secondary: "#fff" },
          className: "ring-1 ring-red-200/60",
        },
      }}
      containerClassName="!bottom-6 !right-6"
      containerStyle={{}}
    />
  );
}
