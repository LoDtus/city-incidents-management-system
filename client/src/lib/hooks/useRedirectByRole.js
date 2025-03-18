import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useRedirectByRole() {
    const router = useRouter();

    const redirectByRole = useCallback((role) => {
        switch (role) {
            case 'ROLE_ADMIN':
                router.push('/admin');
                break;
            case 'ROLE_MANAGER':
                router.push('/manager');
                break;
            case 'ROLE_STAFF':
                router.push('/staff');
                break;
            case 'ROLE_USER':
                router.push('/user');
                break;
            default:
                router.push('/guest');
                break;
        }
    }, [router]);

    return redirectByRole;
}