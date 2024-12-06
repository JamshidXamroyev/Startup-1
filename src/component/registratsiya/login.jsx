import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="my-32">
        <form action="/login" method="post" className="flex justify-center items-center flex-col gap-5 w-1/3 mx-auto">
            <input type="email" placeholder="Enter your email" name="email" className="px-4 py-2 border w-full focus:outline-4 focus:outline-blue-500 border-blue-500"/>
            <input type="password" placeholder="Enter email password" name="password" className="px-4 py-2 border w-full focus:outline-4 border-blue-500 focus:outline-blue-500"/>
            <button className="py-2 px-8 relative w-full home__btn border-none text-white font-bold" type="submit">
                <span className="z-10">Kirish</span>
            </button>
            <Link to={"/register"}>
                <p className="text-green-700">Ro'yxatdan O'tish</p>
            </Link>
        </form>
    </div>
  )
}

export default Login