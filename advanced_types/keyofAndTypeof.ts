export type Colors = typeof colors;
export type keyColors = keyof Colors;

export const colors = {
    red: "vermelho",
    green: "verde",
    blue: "azul",
    purple: "Roxo"
}

export function translateColors(color: keyColors, colors: Colors) {
    return colors[color];
}


translateColors("red", colors);
