import { Link } from "react-router-dom";

function SignIn() {
    function abc() {

    }

    return (
        <div className='w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center'>
            <div
                className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-black opacity-50 z-40'
                onClick={abc}></div>
            <div className='flex flex-col p-6 z-50 rounded-md bg-white'>
            <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Đăng nhập</span>
                <div className="flex mb-2">
                    <label className='basis-[30%]' htmlFor="username-signup">Tên tài khoản: </label>
                    <input type="text" name="username-signup" id="username-signup"
                        className='bg-soft-gray grow px-3 py-1 rounded-md'
                    />
                </div>
                <div className="flex mb-2">
                    <label className='basis-[30%]' htmlFor="password-signup">Mật khẩu: </label>
                    <input type="password" name="password-signup" id="password-signup"
                        className='bg-soft-gray grow px-3 py-1 rounded-md'
                    />
                </div>
                <div className="flex items-center mb-2 h-8 ">
                    <div className="grow flex items-center duration-200">
                        <input type="checkbox" name="rememberMe" id="rememberMe" className='h-4 w-4 mr-1 hover:cursor-pointer'/>
                        <label className="" htmlFor="rememberMe">Duy trì đăng nhập</label>
                    </div>
                    <Link to='/access/forgotPassword' className='text-blue'>Quên mật khẩu?</Link>
                </div>

                <button 
                    className='p-3 w-full text-white bg-blue rounded-md mb-2 font-semibold
                    duration-200 hover:cursor-pointer hover:bg-soft-blue active:scale-90'
                    >
                    Sign Up
                </button>
                <div>
                    <span>Bạn chưa có tài khoản?</span>
                    <span className='text-blue ml-2'>Tạo tài khoản mới tại đây</span>
                </div>
            </div>
        </div>
    )
}
export default SignIn;