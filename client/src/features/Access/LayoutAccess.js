import { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";

function LayoutAccess() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/access/signIn')
    }, []);

    return (
        <div className=''>
            <Outlet/>
        </div>
    )
}
export default LayoutAccess