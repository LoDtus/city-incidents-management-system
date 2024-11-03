export function getCurrentTime() {
    const timestamp = new Date();
    return timestamp.toISOString();
};

export function convertDate2String(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const result = `${day}/${month}/${year}`;
    return result;
};

export function getDayOfWeek(day) {
    const dayOfWeek_vn = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    const date = new Date(day);
    return dayOfWeek_vn[date.getDay()];
};