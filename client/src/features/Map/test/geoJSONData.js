export const data = [
    { coordinates: [50.10164799, 14.44891924], size: 500, color: [255, 0, 0, 0.8] },
    { coordinates: [50.22763919, 14.09765223], size: 1500, color: [0, 255, 0, 0.8] },
    { coordinates: [49.98581544, 14.15183071], size: 1200, color: [0, 0, 255, 0.8] },
    { coordinates: [50.10728931, 13.71442186], size: 1800, color: [255, 255, 0, 0.8] },
    { coordinates: [50.67929326, 13.86138742], size: 2000, color: [255, 0, 255, 0.8] },
    { coordinates: [50.05775298, 14.43533886], size: 1400, color: [0, 255, 255, 0.8] },
    { coordinates: [50.08837499, 14.41751829], size: 1600, color: [128, 0, 128, 0.8] },
    { coordinates: [50.4950314, 13.66133656], size: 500, color: [255, 165, 0, 0.8] },
    { coordinates: [50.72570461, 15.15851486], size: 2500, color: [128, 128, 0, 0.8] },
    { coordinates: [49.23212433, 17.68167867], size: 1000, color: [75, 0, 130, 0.8] },
    { coordinates: [50.17182042, 12.6608715], size: 1300, color: [220, 20, 60, 0.8] },
    { coordinates: [49.5026322, 16.52083723], size: 500, color: [244, 164, 96, 0.8] },
    { coordinates: [49.80754202, 18.24596618], size: 2100, color: [139, 69, 19, 0.8] },
    { coordinates: [49.76212188, 16.47547337], size: 1700, color: [255, 192, 203, 0.8] },
    { coordinates: [49.96282452, 15.27562567], size: 1900, color: [128, 128, 128, 0.8] },
    { coordinates: [49.16196452, 15.20627902], size: 500, color: [0, 128, 128, 0.8] },
    { coordinates: [50.0764765, 14.42292431], size: 1200, color: [128, 0, 0, 0.8] },
    { coordinates: [50.73742831, 15.61324983], size: 2300, color: [0, 0, 0, 0.8] },
];

export const dataMarkers = data.map(point => point.coordinates);
export const dataSizes = data.map(i => i.size);
export const dataColors = data.map(item => {
    const [r, g, b, a] = item.color;
    return { r, g, b, a };
});