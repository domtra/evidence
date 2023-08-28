# @evidence-dev/core-components

## 2.0.0

### Major Changes

- acd0be37: updates sankey chart animation duration to match other charts.

### Minor Changes

- 883c9ebb: Adds delta content type to DataTable
- 86b94da9: Add colour scale conditional formatting to DataTable

### Patch Changes

- ef3ec286: formatValue based on `data.y/xAxis` instead of `value` in ReferenceLine
- b9d54140: Added value prop alias for column to Value component
- 5639ac12: Change details component styling, adds open prop
- a1fa819e: bump vulnerable deps
- fc07d945: Updated style to enhance visibility of tabs and tab picker. And added a prop to customize background color of tab picker button.
- a00c7c76: Make Column component reactive to prop changes
- Updated dependencies [16112191]
  - @evidence-dev/component-utilities@1.1.1

## 1.2.1

### Patch Changes

- 9ade9c88: Add Definitions component
- 9432c6e4: limit `getFormatObjectFromString` in Value.svelte
- be1cc666: force NaN, null, and undefined to the top of ascending sort order and vice versa

## 1.2.0

### Minor Changes

- 78f2fab2: Adds modal, accordion and link button UI components

### Patch Changes

- 75560a31: Consolidate tailwind presets into tailwind package

## 1.1.0

### Minor Changes

- d999fe37: Consolidate all icons to steeze-ui and tabler icons
- 121c7868: Adds formatting control to components

### Patch Changes

- 4e94b57a: standardize exported date strings to ISO
- f6be30cf: Fix for grouped bar charts
- Updated dependencies [121c7868]
  - @evidence-dev/component-utilities@1.1.0

## 1.0.3

### Patch Changes

- 168af3bb: Add optional role and schema fields for snowflake
- 929a0074: fixes breadcrumb links, long breadcrumbs causing x-axis scrollbar, and bigvalue with object instead of array
- eb886615: switch to async + while loop to prevent requests building up

## 1.0.2

### Patch Changes

- 2b7809e6: added authenticator env var to listing, warning for browser-only auth

## 1.0.1

### Patch Changes

- 44c0c4ca: changed bigquery default connector
- a38148b5: Fixing the multi-line alert spacing

## 1.0.0

### Major Changes

- 4cd28cf5: Add support for component plugins; move @evidence-dev/components to @evidence-dev/core-components

### Patch Changes

- ac3d47d3: fixes bugs preventing usage directly from npm
- 7873115f: Added lineColor prop to AreaChart
- d7d4dfce: Add prop to allow wrapping in datatable
- 84208c04: updated licenses, general cleanup
- Updated dependencies [ac3d47d3]
- Updated dependencies [4cd28cf5]
- Updated dependencies [84208c04]
  - @evidence-dev/component-utilities@1.0.0
  - @evidence-dev/tailwind@1.0.0
