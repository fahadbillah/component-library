---
'react-component-library': patch
---

Align `Navbar` styling, tokens, and Storybook documentation hierarchy with Stitch Master Component Library:

- Refactored `AppNavbar` and `Navbar` CSS to strictly utilize design tokens (`--ui-structural-outline: #A1E3F9`, `--ui-primary-tint: #D1F8EF`, `--ui-primary-accent: #3674B5`, `--ui-surface-container-low: #EEF5F4`).
- Upgraded desktop dropdown menus to match Stitch popover specifications with 12px border radius, maritime border, and elevated multi-layer box shadows.
- Updated `Navbar.stories.tsx` so the Desktop `Navbar` is the primary default story for `Components/Navbar` instead of `BottomNav`, with full Section 07 mobile and desktop parity.
