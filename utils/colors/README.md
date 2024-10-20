# ShadeColor Function

## Overview

The `shadeColor` function is a utility that adjusts the shade of a given hex color by a specified percentage. It allows you to either lighten or darken a color based on a `lightMode` flag. This can be useful for generating color variations in web design, theming, or visual applications.

## Features

- **Lighten or Darken a Color**: You can adjust the color's shade by either lightening or darkening it by a given percentage.
- **Supports Hex Color Format**: Accepts standard 6-character hex color strings (e.g., `#1E5CC4`).
- **Percentage-based Adjustment**: Adjust the shade by any percentage, providing fine control over the final color.

## Functionality

### `shadeColor(hexColor, percentage = 10, lightMode = true)`

The main function that adjusts the shade of a hex color.

#### Parameters:
- **`hexColor`** (`string`): A 6-character hex color string (e.g., `#1E5CC4`).
- **`percentage`** (`number`): The percentage to adjust the color by. Default is `10%`.
  - A positive percentage will either lighten or darken the color based on the `lightMode` flag.
- **`lightMode`** (`boolean`): Determines whether to lighten (`true`) or darken (`false`) the color. Default is `true` (lighten).

#### Returns:
- **`string`**: The adjusted hex color string.

#### Throws:
- **`Error`**: If the input `hexColor` is invalid or not in the correct format.

#### Example:
```javascript
console.log(shadeColor("#1E5CC4", 10, true));  // Lightens by 10%: #4375CF
console.log(shadeColor("#1E5CC4", 10, false)); // Darkens by 10%: #1949A3
```

### Helper Functions

#### `adjustColorComponent(component, factor, lightMode)`
A helper function that adjusts an individual RGB color component based on the provided percentage.

#### Parameters:
- **`component`** (`number`): The value of an individual RGB color component (between 0 and 255).
- **`factor`** (`number`): The adjustment factor derived from the percentage.
- **`lightMode`** (`boolean`): A flag indicating whether to lighten or darken the component.

#### Returns:
- **`number`**: The adjusted color component, clamped between 0 and 255.

---

#### `rgbToHex(r, g, b)`
A helper function that converts RGB values back into a hex color string.

#### Parameters:
- **`r`** (`number`): The red color component.
- **`g`** (`number`): The green color component.
- **`b`** (`number`): The blue color component.

#### Returns:
- **`string`**: A hex color string representing the RGB values.

---

## Usage

To use this function in your project:

1. Copy the code into your project.
2. Call the `shadeColor()` function with a valid hex color, adjustment percentage, and the mode (lighten or darken).
3. The function will return a new hex color string based on the specified adjustments.

Example:
```javascript
const newColor = shadeColor("#1E5CC4", 15, false); // Darkens the color by 15%
console.log(newColor); // Output: A darker hex color string
```

## Error Handling

If an invalid hex color string is provided, the function will throw an error. Ensure that the input color is in the format `#RRGGBB`.

## License

This code is free to use and distribute under the MIT License.

---

### Contribution

Feel free to fork and modify the code. Pull requests are welcome for bug fixes or feature additions.

