import { useNavigate } from "react-router-dom"
import { footerIcons, footerList, logo } from "../util/constants"
import Button from "../ui/button"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-[100vw]">
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
          <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div className="flex justify-center">
              {footerIcons.slice(0, 6).map((item, ind) => (
                <a key={ind} href="#!" className="cursor-pointer mr-6 hover:-translate-y-1 hover:text-orange-500 duration-300 text-[#32bb78]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentcolor" viewBox="0 0 24 24">{item.link}</svg>
                </a>
              ))}
            </div>

          </div>
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid md:grid-cols-2 km:grid-cols-5 gap-8">
              <div>
                <h3 className="mb-4 flex items-center cursor-pointer font-bold text-2xl font-titleFont justify-center uppercase md:justify-start">
                  Kompaniya nomi
                </h3>
                <p className="mb-2">
                  Here you can use rows and columns to organize your footer content.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <Button name={"Batafsil"} link={"/about"}/>
              </div>

                <div>
                  <h6 className="mb-4 text-orange-500 cursor-pointer font-titleFont flex justify-center font-semibold uppercase md:justify-start">
                    Products
                  </h6>
                  {footerList.slice(0, 4).map(item => (
                    <p className="mb-4" key={item}>
                      <a href="#!" className="duration-300 hover:text-[#32bb78]">{item.title}</a>
                    </p>
                  ))}
                </div>
                
                <div>
                  <h6 className="mb-4 text-orange-500 flex font-titleFont cursor-pointer justify-center font-semibold uppercase md:justify-start">
                    About Dev
                  </h6>
                    {footerList.slice(8, 12).map(item => (
                        <p className="mb-4">
                          <a href="#!" className="hover:text-[#32bb78] duration-300">{item.title}</a>
                        </p>
                      ))}   
                </div>

                <div>
                  <h6 className="mb-4 text-orange-500 flex font-titleFont cursor-pointer justify-center font-semibold uppercase md:justify-start">
                    Useful links
                  </h6>
                    {footerList.slice(4, 8).map(item => (
                        <p className="mb-4">
                          <a href="#!" className="hover:text-[#32bb78] duration-300">{item.title}</a>
                        </p>
                      ))}   
                </div>


                <div>
                <h6 className="mb-4 font-titleFont text-orange-500 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                {footerIcons.slice(6).map(item => (
                  <p className="mb-4 flex items-center cursor-pointer duration-300 hover:text-green-400 justify-center md:justify-start">
                    {item.link} {item.name}
                  </p>
                ))}
                </div>
            </div>
          </div>
          <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span>© 2024 Copyright: <span className="text-green-500 font-bold text-[20px] font-titleFont">Kompany Name</span></span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer