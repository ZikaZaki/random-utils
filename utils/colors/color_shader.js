/**
 * Adjusts the shade of a given hex color by a specified percentage.
 * Can lighten or darken based on the `lightMode` flag.
 *
 * @param {string} hexColor - The hex color string to be adjusted (e.g., '#1E5CC4').
 * @param {number} percentage - The percentage by which to lighten or darken (e.g., 10 for 10%).
 * @param {boolean} [lightMode=true] - If true, lightens the color; if false, darkens it.
 * @returns {string} - The adjusted hex color string.
 * @throws {Error} - Throws an error if the hex color is invalid.
 */
function shadeColor(hexColor, percentage = 10, lightMode = true) {
    // Ensure valid hex color
    if (!/^#([0-9A-F]{6})$/i.test(hexColor)) {
        throw new Error("Invalid hex color format. Expected '#RRGGBB'.");
    }

    // Parse the hex color into RGB components
    let r = parseInt(hexColor.slice(1, 3), 16);
    let g = parseInt(hexColor.slice(3, 5), 16);
    let b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate the adjustment factor based on light or dark mode
    const adjustmentFactor = lightMode ? (percentage / 100) : -(percentage / 100);

    // Adjust the RGB components by moving them closer to 255 (lightening) or 0 (darkening)
    r = adjustColorComponent(r, adjustmentFactor, lightMode);
    g = adjustColorComponent(g, adjustmentFactor, lightMode);
    b = adjustColorComponent(b, adjustmentFactor, lightMode);

    // Return the new hex color
    return rgbToHex(r, g, b);
}

/**
 * Adjusts an individual RGB color component based on the adjustment factor.
 *
 * @param {number} component - The RGB component value (between 0 and 255).
 * @param {number} factor - The adjustment factor to apply (positive for lighten, negative for darken).
 * @param {boolean} lightMode - Indicates whether to lighten or darken the color.
 * @returns {number} - The adjusted RGB component value.
 */
function adjustColorComponent(component, factor, lightMode) {
    const newComponent = component + (factor * (lightMode ? 255 - component : component));
    return Math.min(255, Math.max(0, Math.round(newComponent))); // Ensure value stays within 0-255
}

/**
 * Converts RGB values to a hex color string.
 *
 * @param {number} r - The red component (between 0 and 255).
 * @param {number} g - The green component (between 0 and 255).
 * @param {number} b - The blue component (between 0 and 255).
 * @returns {string} - The corresponding hex color string.
 */
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Example usage:
console.log(shadeColor("#1E5CC4", 50, true));  // Lighten by 10%
console.log(shadeColor("#1E5CC4", 10, false)); // Darken by 10%


