import { useNavigate } from "react-router-dom"
import Button from "../ui/button"

const Home = () => {
  const navigate = useNavigate()
  return (
    <section className="nt:mt-28 pl:mt-16 mt-12 pt-24 flex justify-between nt:flex-row pl:gap-0 gap-12 flex-col w-[70vw] pl:mx-auto mx-2 nt:mb-[20vh] mb-[9vh]">
      <div className="flex flex-col pl:gap-4 gap-8 max-pl:w-[100vw] max-nt:mb-[9vh]">
        <h3 className="font-bold font-titleFont text-4xl text-[#32bb78] text-center">Xush Kelibsiz!</h3>
        <div className="flex items-start">
          <span className="px-2 mr-2 text-white bg-[#32bb78] rounded-full">1</span>   
          <h5 className="font-bodyFont font-semibold text-2xl">Endi sizning uch xil yechimingiz <br /> Bitta <span className="text-orange-500">Platformada !</span></h5>
        </div>
        <div className="flex items-start">
          <span className="px-2 mr-2 text-white bg-[#32bb78] rounded-full">2</span>   
          <h5 className="font-bodyFont font-semibold text-2xl">Bizda barchasi <span className="text-orange-500">oson</span> va<br /> <span className="text-orange-500">Tushunarli !</span></h5>
        </div>
        <div className="flex items-start">
          <span className="px-2 mr-2 text-white bg-[#32bb78] rounded-full">3</span>   
          <h5 className="font-bodyFont font-semibold text-2xl">Biz bilan muammolaringizga<br /> <span className="text-orange-500">Yechim</span> toping!</h5>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-7 max-pl:w-[100vw]">
          <h3 className="font-bold text-4xl leading-0 font-titleFont text-orange-500">Xizmat turini tanlang</h3>
          <Button name={"Taxi Xizmatlari"} link={"/uzun/taxi"}/>
          <Button name={"Logistika Xizmatlari"} link={"/uzun/logistika"}/>
          <Button name={"Yetkazib-berish Xizmatlari"} link={"/uzun/dastavka"}/>
      </div>
    </section>
  )
}

export default Home