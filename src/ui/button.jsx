import { useNavigate } from "react-router-dom"

const Button = ({name, link}) => {
  const navigate = useNavigate()
  return (
        <button className="py-2 rounded-sm px-8 relative home__btn border-none text-white font-bold" onClick={() => navigate(link)}>
            <span className="z-10">{name}</span>
        </button>
  )
}

export default Button