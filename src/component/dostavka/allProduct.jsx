import { dostafkaAllProductImg } from "../../util/constants"
import Button from '../../ui/button' 

const AllProduct = () => {
  return (
    <>
        <section className="flex justify-start my-8 nt:flex-row flex-col nt:mx-0 mx-4 border-b-2 py-5 nt:gap-0 gap-6">
            <div className="nt:w-1/3 w-full mx-auto">
                <h4 className="pl:text-4xl text-2xl font-bold font-titleFont mb-3">Siz xohlagan <br className="pl:block hidden"/> Barcha mahsulotlar <br />Tezda yetkazib beriladi.</h4>
                <p className="text-justify mb-3">
                    A'zolar DashPass buyurtmalarida $0 yetkazib berish to'lovi, olib ketish buyurtmalarida 5% qaytarib olish va boshqalarni oladi. Bundan tashqari, u 30 kun davomida bepul. Yetkazib berish haydovchisi sifatida pul ishlang va jadvalingiz bo'yicha ishlang. Bir necha daqiqada ro'yxatdan o'ting.
                </p>
                <Button name={"Qo'shilish"} link={""}/>
            </div>
            <div className="nt:w-1/3 w-full h-full mx-auto">
                <img src={dostafkaAllProductImg} alt={dostafkaAllProductImg} className="w-full rounded-md h-full"/>
            </div>
        </section>
    </>
  )
}

export default AllProduct