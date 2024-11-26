import { useParams } from "react-router-dom"
import { TaxiData } from "../../util/taxiService"
import Button from '../../ui/button'
import { useState } from "react"

const SingleTaxi = () => {
  const [driver, setDriver] = useState(false)
  const {id} = useParams() 
  return (
    <div className="nt:my-40 max-nt:my-32">
      <h2 className="text-center font-bold font-titleFont text-green-500 text-4xl max-pl:text-2xl mb-8">Taxi Haqida</h2>
        {TaxiData.filter(c => c.id == id).map((item, ind) => (
          <section className="flex justify-around max-pl:flex-col items-center pl:w-[90vw] w-[95vw] mx-auto"  key={ind}>
              <div className="pl:w-[44%] w-full max-pl:h-[40vh] h-[60vh]">
                <img src={item.img} alt="image" className="w-full h-full rounded-md" />
              </div>
              <div className="pl:w-[44%] w-full flex flex-col items-start gap-4">
                <h3 className="font-bold text-3xl">Avtomobil: <span className="text-orange-500 capitalize">{item.title}</span></h3>
                <h3  className="font-bold text-2xl">Avtomobil Rangi: <span className="px-4 ml-2 rounded-full" style={{background: item.color}}></span></h3>
                <h3 className="font-bold text-2xl">Yo'l Narxi: Masofaga qarab</h3>
                <h3 className="font-bold text-2xl">Mashina raqami: +{item.number}</h3>
                {driver && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold font-titleFont text-2xl">Haydovchining ismi: <span className="text-orange-500">{item.name}</span></h3>
                    <h3 className="font-semibold text-2xl">Yashash joyi: <span className="text-orange-500">Istiqlol</span></h3>
                    <h3 className="font-semibold text-2xl">Telefon raqami: <span className="text-orange-500">+{item.number}</span></h3>
                  </div>
                )}
                <div className="flex justify-between gap-5">
                  <Button name={"Hozir Bog'lanish"} link={"/contact"}/>
                  <button className="py-2 rounded-sm px-8 relative home__btn border-none text-white font-bold" onClick={() => setDriver(p => !p)}>
                      <span className="z-10">{"Haydovchi haqida"}</span>
                  </button>
                </div>
              </div>
          </section>
        ))}
    </div>
  )
}

export default SingleTaxi