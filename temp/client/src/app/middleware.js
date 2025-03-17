import { NextResponse } from "next/server";

export function middleware(req) {
    const { nextUrl, cookies } = req;
    const role = cookies.get('role') || localStorage.getItem('role') || sessionStorage.getItem('role');

    const roleRoutes = {
        ROLE_ADMIN: '/admin',
        ROLE_MANAGER: '/manager',
        ROLE_STAFF: '/staff',
        ROLE_USER: '/user',
    };

    // Nếu người dùng không có role hoặc role không hợp lệ, chỉ cho phép vào trang chính
    if (!role || !roleRoutes[role]) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Nếu role hợp lệ nhưng user cố gắng truy cập vào route không thuộc về họ
    if (!nextUrl.pathname.startsWith(roleRoutes[role])) {
        return NextResponse.redirect(new URL(roleRoutes[role], req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/manager/:path*",
        "/staff/:path*",
        "/user/:path*",
    ],
};
