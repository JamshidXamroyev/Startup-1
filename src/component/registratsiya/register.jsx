import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="my-32">
        <form action="/login" method="post" className="flex justify-center items-center flex-col gap-5 w-1/3 mx-auto">
          <div className="w-full flex gap-3">
            <input type="text" placeholder="Ismingizni kiriting" name="name" className="px-4 py-2 border w-full focus:shadow-md"/>
            <input type="text" placeholder="Familiyangizni kiriting" name="surname" className="px-4 py-2 border w-full focus:shadow-md"/>
          </div>
            <input type="email" placeholder="Enter your email" name="email" className="px-4 py-2 border w-full focus:shadow-md "/>
            <input type="password" placeholder="Enter email password" name="password" className="px-4 py-2 border w-full focus:shadow-md"/>
            <button className="py-2 px-8 relative w-full home__btn border-none text-white font-bold" type="submit">
                <span className="z-10">Ro'yxatdan O'tish</span>
            </button>
            <Link to={"/"}>
                <p className="text-green-700">Kirish</p>
            </Link>
        </form>
    </div>
  )
}

export default Register