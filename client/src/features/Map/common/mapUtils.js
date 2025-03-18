export function getTooltip(size) {
    const tooltip = document.createElement('div');
    tooltip.className = `w-full h-full px-5 py-3`;

    const sizeTxt = document.createElement('div');
    sizeTxt.className = 'mb-1';
    sizeTxt.textContent = `Size: ${size}m`;

    const showMore = document.createElement('button');
    showMore.className = 'w-full px-5 py-2 bg-[#0866ff] font-semibold text-white rounded-md active:scale-90';
    showMore.textContent = 'Show more'

    tooltip.appendChild(sizeTxt);
    tooltip.appendChild(showMore);
    return tooltip;
};

export function addIncident() {

};

export function backHome() {

};

export function updateCircles() {

};