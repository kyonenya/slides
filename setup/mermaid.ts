import { defineMermaidSetup } from '@slidev/types';

/**
 * @see https://sli.dev/custom/config-mermaid
 * @see https://mermaid.js.org/config/theming.html
 */
export default defineMermaidSetup(() => ({
  // Mermaid 内の日本語が文字化けする問題の対処
  fontFamily:
    /** @see https://sli.dev/custom/config-fonts.html#fallback-fonts */
    '"Noto Sans JP",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
}));
