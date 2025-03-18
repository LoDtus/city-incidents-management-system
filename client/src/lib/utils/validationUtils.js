export function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
    return emailRegex.test(email);
};

export function isValidPhone(phone) {
    const phoneRegex = /^\+?[0-9]{1,4}?[ -]?(\(?[0-9]{2,4}\)?[ -]?)?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return phoneRegex.test(phone);
};

