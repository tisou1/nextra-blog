import type { ComponentType } from 'react'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog'

const themeComponents = getThemeComponents()

export function useMDXComponents(components: Record<string, ComponentType> = {}) {
  return {
    ...themeComponents,
    ...components,
  }
}