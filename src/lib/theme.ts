/**
 * Trust Design System - Core Theme Configuration
 *
 * This file exports all colors and typography settings as TypeScript constants.
 * Use these exports directly in your components for consistent styling.
 */

// ============================================
// PRIMARY PALETTE
// ============================================

export const colors = {
  // Primary Brand Colors
  primary: {
    green: "#5b7b67",
    greenHover: "#5b7b69",
    contrast: "#ffffff",
    dark: "#0f172a",
    blue: "#3b82f6",
  },

  // Wallet & Funds Colors
  balance: {
    available: "#16a34a",
    pending: "#facc15",
    escrow: "#2563eb",
    locked: "#64748b",
  },

  // Background Colors
  background: {
    main: "#ffffff",
    surface: "#f8fafc",
    highlight: "#ecfdf3",
    highlightBlue: "#eff6ff",
    highlightYellow: "#fefce8",
  },

  // Status Colors
  status: {
    success: "#16a34a",
    warning: "#eab308",
    error: "#dc2626",
    info: "#2563eb",
  },

  // UI Colors (Neutrals)
  ui: {
    charcoal: "#0f172a",
    charcoalSoft: "#1e293b",
    offWhite: "#f8fafc",
    warmGrey: "#e2e8f0",
    mutedGrey: "#64748b",
    slate: "#475569",
    border: "#e2e8f0",
    input: "#e2e8f0",
  },

  // Accent Colors
  accent: {
    green: "#22c55e",
    greenLight: "#4ade80",
    greenDark: "#16a34a",
    blue: "#3b82f6",
    purple: "#8b5cf6",
  },

  // Semantic Colors
  semantic: {
    card: "#ffffff",
    sidebar: "#ffffff",
    popover: "#ffffff",
  },

  // Text Colors (shorthand for common use)
  text: {
    primary: "#0f172a",
    secondary: "#64748b",
    muted: "#475569",
    light: "#94a3b8",
    white: "#ffffff",
    cream: "#fffacd",
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const fonts = {
  // Font Families
  family: {
    headline: '"DM Serif Display", Georgia, serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    ubuntu: '"Ubuntu", sans-serif',
    serifAccent: '"PT Serif", serif',
  },

  // Font Weights
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    snug: 1.4,
    normal: 1.6,
    relaxed: 1.8,
  },

  // Letter Spacing
  letterSpacing: {
    tight: "-0.02em",
    normal: "-0.01em",
    wide: "0.05em",
  },
} as const;

// ============================================
// ANIMATION TIMING
// ============================================

export const transitions = {
  fast: "120ms",
  normal: "200ms",
  slow: "300ms",
} as const;

// ============================================
// SPACING & SIZING
// ============================================

export const spacing = {
  radius: "0.5rem",
  radiusSm: "0.25rem",
  radiusMd: "0.375rem",
  radiusLg: "0.5rem",
  radiusXl: "0.75rem",
} as const;

// ============================================
// HELPER TYPES
// ============================================

export type ColorKey = keyof typeof colors;
export type FontKey = keyof typeof fonts.family;
export type WeightKey = keyof typeof fonts.weight;

// ============================================
// STYLE HELPER FUNCTIONS
// ============================================

/**
 * Creates inline style object for text color
 */
export const textColor = (color: string) => ({ color });

/**
 * Creates inline style object for background color
 */
export const bgColor = (color: string) => ({ backgroundColor: color });

/**
 * Creates inline style object for border color
 */
export const borderColor = (color: string) => ({ borderColor: color });

/**
 * Creates inline style object for font family
 */
export const fontFamily = (family: keyof typeof fonts.family) => ({
  fontFamily: fonts.family[family],
});

// ============================================
// TAILWIND ARBITRARY VALUE HELPERS
// ============================================

/**
 * Creates a Tailwind bg-[color] class string
 */
export const tw = {
  bg: (color: string) => `bg-[${color}]`,
  text: (color: string) => `text-[${color}]`,
  border: (color: string) => `border-[${color}]`,
} as const;
