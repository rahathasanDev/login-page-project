import React from 'react';
import logo from '../assets/logo.png';
import bannerImg from '../assets/illustration.png';

const SignIn = () => {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { password, email };
    console.log(user);
    form.reset();
  }
  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-[1100px]  ">
        <img src={bannerImg} alt="Banner" className="h-full w-full object-cover" />
      </div>



      <div className="w-full md:w-1/4 mt-8">
        <div className="max-w-xs mx-auto ">
          <div className="mb-4 ">
            <img src={logo} alt="Logo" className="mx-auto" />
          </div>
          <p className='mt-12'> Sign in</p>






          <form onSubmit={handleAddUser} className="mt-10">
            <div className="mb-4">

              <input
                className=" border outline outline-1 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-2 focus:shadow-outline"
                id="username"
                type="text"
                name="email"
                placeholder="someone@gmai.com"
              />
            </div>
            <div className="mb-6">

              <input
                className=" border rounded outline outline-1   w-full py-1 px-3 text-gray-700 leading-tight focus:outline-2 focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-1  px-4  focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>

            </div>
          </form>
          <p className="  text-sm mt-8 ">
            Sign in to leyton using your username (John Smith: jsmith)
          </p>

          <footer className=" text-gray-500 text-xs py-4 absolute bottom-0  ">
            © {new Date().getFullYear()} Microsoft
          </footer>


        </div>

      </div>
    </div>
  );
};

export default SignIn;
