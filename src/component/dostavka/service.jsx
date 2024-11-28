import { dostafkaService } from "../../util/constants"
import Button from '../../ui/button'

const Service = () => {
  return (
    <>  
            <h1 className="text-center text-6xl font-bold font-titleFont">Bizning Xizmatlar</h1>
            <section className="flex justify-around items-center gap-3 w-[95vw] mx-auto flex-wrap my-8">
                {dostafkaService.map(item => (
                    <div className="w-[30vw] hover:relative">
                        <div>
                            <img src={item.img} alt={item.img} className="rounded-md w-full h-[280px]"/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="w-full font-titleFont text-2xl my-2">{item.title}</h2>
                            <p className="w-[30vw] text-justify mb-3">{item.description}</p>
                            <Button name={"Buyurtma qilish"} link={""}/>
                        </div>
                        <i className="fa-regular fa-heart text-3xl p-2 bg-white absolute top-2 right-2 rounded-sm"></i>
                    </div>
                ))}
            </section>
    </>
  )
}

export default Service