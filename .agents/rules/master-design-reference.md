# Master Design System Reference

- **Stitch Project ID**: `12635430573370270229`
- **Master Screen ID**: `9f41c22f65334e1f88c8741bbc796641`
- **Full Screen Resource Name**: `projects/12635430573370270229/screens/9f41c22f65334e1f88c8741bbc796641`
- **Screen Title**: `Master Component Library`
- **Device Type**: `DESKTOP` (2560 x 5532)

---

## Direct Artifact URLs

- **Screenshot Asset**: `projects/12635430573370270229/files/2592673212385800298`
- **HTML Asset**: `projects/12635430573370270229/files/16625636191810691780`
- **Direct HTML Download URL**:
  `https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJyEgxzdGl0Y2hfZmlsZXMaYgosc3RpdGNoX2h0bWxfMDAwNjVkM2NjYmNiZjU4ZjA0NWFkYjRkN2IyOGY4ZmUSCxIHEMD80JKbERgBkgEkCgpwcm9qZWN0X2lkEhZCFDEyNjM1NDMwNTczMzcwMjcwMjI5&filename=&opi=89354086`

---

## Core Component Specifications

1. **Naming Standard**: Always generic (no "CampusPulse" branding in code, prop types, or tokens).
2. **Spacing & Sizing**:
   - Touch-compliant minimum touch targets (`44px` for `md`, `36px` for `sm`, `52px` for `lg`).
   - Strict 8px grid cadence (`--ui-space-sm`: 8px, `--ui-space-md`: 16px, `--ui-space-lg`: 24px).
   - **Component Size Coupling Rule**: Never use `--ui-space-xs` (4px) on default/`md`/`lg` controls unless parent is explicitly `sm`.
3. **Multi-Select with Avatars & Chips**:
   - Interactive trigger box with removable chips (`Chip` component with 20px avatar and close icon).
   - Search filter input inside trigger/menu.
   - Popover dropdown list with Avatar, full name, email/subtitle, and checkmark indicator.
