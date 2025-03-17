package server.common;

import java.util.regex.Pattern;

public class ValidationUtils {
    private static final String EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9]{2,}$";
    private static final String PHONE_REGEX = "^\\+?[0-9]{1,4}?[ -]?(\\(?[0-9]{2,4}\\)?[ -]?)?[0-9]{3,4}[ -]?[0-9]{3,4}$";

    private final static Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);
    private final static Pattern PHONE_PATTERN = Pattern.compile(PHONE_REGEX);

    public static boolean isValidEmail(String email) {
        return email != null && EMAIL_PATTERN.matcher(email).matches();
    }

    public static boolean isValidPhoneNumber(String phone) {
        return phone != null && Pattern.compile(PHONE_REGEX).matcher(phone).matches();
    }
}
