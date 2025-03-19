import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useRedirectByRole() {
    const router = useRouter();

    const redirectByRole = useCallback((role) => {
        switch (role) {
            case 'ROLE_ADMIN':
                router.push('/admin/map');
                break;
            case 'ROLE_MANAGER':
                router.push('/manager/map');
                break;
            case 'ROLE_STAFF':
                router.push('/staff/map');
                break;
            case 'ROLE_USER':
                router.push('/user/map');
                break;
            default:
                router.push('/guest/map');
                break;
        }
    }, [router]);

    return redirectByRole;
}