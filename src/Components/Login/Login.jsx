import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { PrivateContext } from "../../Context/PrivateContext";

const Login = () => {
    const {loginUser}=use(PrivateContext)
    const location=useLocation()
    const navigate=useNavigate('')
    const handleLogInWithPassword=(e)=>{
        e.preventDefault();
       const email=e.target.email.value
       const password=e.target.password.value
       loginUser(email,password)
       .then((result)=>{
        toast.success("Successfully login")
        navigate(location?.state || '/')
       })
       .catch((error)=>{
        console.log(error);
        toast.error(error.message)
       })
    }
  return (
    <div
      className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-neutral-600 text-white"
      bis_skin_checked="1"
    >
      <div className="mb-8 text-center" bis_skin_checked="1">
        <h1 className="my-3 text-4xl font-bold">Log in</h1>
        <p className="text-sm dark:text-gray-600">
          Log in to access your account
        </p>
      </div>
      <form onSubmit={handleLogInWithPassword} className="space-y-12">
        <div className="space-y-4" bis_skin_checked="1">
          <div bis_skin_checked="1">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div bis_skin_checked="1">
            <div className="flex justify-between mb-2" bis_skin_checked="1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2" bis_skin_checked="1">
          <div bis_skin_checked="1">
            <button 
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md cursor-pointer bg-violet-600 dark:text-gray-50"
            >
             Log In
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
            to='/register'
              className="hover:underline dark:text-violet-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
