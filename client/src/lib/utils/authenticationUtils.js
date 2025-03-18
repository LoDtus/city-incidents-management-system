import Cookies from "js-cookie";
import { setAuth } from "./apiUtils";

export function saveUserData(id, email, password, active, role, rememberMe) {
    setAuth(email, password);
    const data = {
        "id": id,
        "email": email,
        "password": password,
        "active": active,
        "role": role,
    }

    if(rememberMe && typeof window !== 'undefined') {
        localStorage.setItem("auth", JSON.stringify(data));
        // localStorage.setItem("token", "jwt_token");
        // luu voi cookies
    } else if (!rememberMe && typeof window !== 'undefined') {
        sessionStorage.setItem("auth", JSON.stringify(data));
    }
    Cookies.set('role', role, { path: '/', expires: 60 });
}