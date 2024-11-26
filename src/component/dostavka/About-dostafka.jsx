import { dostafkaAboutImg } from "../../util/constants"
import Button from "../../ui/button"

const AboutDostafka = () => {
  return (
    <>
        <h2 className="font-bold font-titleFont text-center text-4xl my-5 ">Biz bilan tanishing</h2>
        <section className="py-10 flex items-center nt:w-[90vw] w-[96vw] nt:flex-row flex-col nt:gap-0 gap-10 nt:mx-0 mx-4 border-b-2">
          <div className="nt:w-1/3 w-full mx-auto">
            <img src={dostafkaAboutImg} alt={dostafkaAboutImg} />
          </div>
          <div className="nt:w-1/3 w-full mx-auto">
            <h3 className="text-orange-500 font-bold text-2xl mb-3">Biz Kimmiz</h3>
            <p className="">
              Biz - bu dunyoning 30 dan ortiq mamlakatlaridagi iste'molchilarni sevimli mahalliy bizneslari bilan bog'laydigan texnologiya kompaniyasi. 2013-yilda tashkil etilgan DoorDash biznesga innovatsiyalar kiritish, o‘sish va ko‘proq mijozlarni jalb qilish uchun mahsulot va xizmatlar ishlab chiqaradi. DoorDash - bu sizning ko'proq eshigingiz: mahalliy savdo
            </p>
            <div className="mt-4">
              <Button name={"Koproq"} link={"/about"}/>
            </div>
          </div>
        </section>    
    </>
  )
}

export default AboutDostafka