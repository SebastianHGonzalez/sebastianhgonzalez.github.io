export function desktop(css: TemplateStringsArray): string {
  return `@media (min-width: 767px) {
        ${css}
    }`;
}

export function landscape(css: TemplateStringsArray): string {
  return `@media (orientation: landscape) {
        ${css}
    }`;
}
