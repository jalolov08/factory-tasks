// Basic Colors
export const primaryColor = "#3498db"; // Blue
export const secondaryColor = "#2ecc71"; // Green
export const accentColor = "#e74c3c"; // Red

// Neutral Colors
export const white = "#ffffff";
export const black = "#000000";
export const grayLight = "#ecf0f1"; // Light Gray
export const grayDark = "#95a5a6"; // Dark Gray

// Background and Surface Colors
export const backgroundColor = "#f8f9fa"; // Light Background
export const surfaceColor = "#ffffff"; // White Surface

// Text Colors
export const textPrimary = "#2c3e50"; // Dark Text
export const textSecondary = "#7f8c8d"; // Lighter Text

// Status Colors
export const successColor = "#2ecc71"; // Success Green
export const errorColor = "#e74c3c"; // Error Red
export const warningColor = "#f39c12"; // Warning Yellow

// Additional Custom Colors (Optional)
export const infoColor = "#1abc9c"; // Info Teal
export const linkColor = "#2980b9"; // Link Blue

// Exporting all colors as an object (optional)
export const colors = {
  primary: primaryColor,
  secondary: secondaryColor,
  accent: accentColor,
  background: backgroundColor,
  surface: surfaceColor,
  text: {
    primary: textPrimary,
    secondary: textSecondary,
  },
  status: {
    success: successColor,
    error: errorColor,
    warning: warningColor,
  },
  additional: {
    info: infoColor,
    link: linkColor,
  },
};
