export function useVisualRerender(light) {
    const letters = light ? "ABCDEF" : "01234567";
    return {
        // Visual effect to see a rerender
        getBackgroundColor() {
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }

            return color;
        },
    };
}
