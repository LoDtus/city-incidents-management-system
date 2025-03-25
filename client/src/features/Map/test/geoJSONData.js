export const data = [
    { coordinates: [21.0296, 105.8522], size: 500, color: [255, 0, 0, 0.8] },
    { coordinates: [21.0791, 105.9024], size: 1500, color: [0, 255, 0, 0.8] },
    { coordinates: [21.0023, 105.7895], size: 1200, color: [0, 0, 255, 0.8] },
    { coordinates: [21.0457, 105.9502], size: 1800, color: [255, 255, 0, 0.8] },
    { coordinates: [20.9854, 105.8123], size: 2000, color: [255, 0, 255, 0.8] },
    { coordinates: [21.1124, 105.8675], size: 1400, color: [0, 255, 255, 0.8] },
    { coordinates: [21.0903, 105.9231], size: 1600, color: [128, 0, 128, 0.8] },
    { coordinates: [21.0356, 105.7809], size: 500, color: [255, 165, 0, 0.8] },
    { coordinates: [20.9921, 105.9342], size: 2500, color: [128, 128, 0, 0.8] },
    { coordinates: [21.0607, 105.8214], size: 1000, color: [75, 0, 130, 0.8] },
    { coordinates: [20.9712, 105.8457], size: 1300, color: [220, 20, 60, 0.8] },
    { coordinates: [21.0785, 105.7943], size: 500, color: [244, 164, 96, 0.8] },
    { coordinates: [21.0241, 105.8832], size: 2100, color: [139, 69, 19, 0.8] },
    { coordinates: [20.9605, 105.8887], size: 1700, color: [255, 192, 203, 0.8] },
    { coordinates: [21.0458, 105.7549], size: 1900, color: [128, 128, 128, 0.8] },
    { coordinates: [21.0083, 105.9136], size: 500, color: [0, 128, 128, 0.8] },
    { coordinates: [21.1102, 105.8129], size: 1200, color: [128, 0, 0, 0.8] },
    { coordinates: [20.9547, 105.8705], size: 2300, color: [0, 0, 0, 0.8] },
];

export const dataMarkers = data.map(point => point.coordinates);
export const dataSizes = data.map(i => i.size);
export const dataColors = data.map(item => {
    const [r, g, b, a] = item.color;
    return { r, g, b, a };
});