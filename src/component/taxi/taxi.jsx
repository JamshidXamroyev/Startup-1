import { useState } from "react"
import  Button  from "../../ui/button"
import { taxiComfortImgDamas, taxiHomePageImg, taxiService, tayyorTaxi } from "../../util/constants"
import { useNavigate } from "react-router-dom"


const Taxi = () => {
  const [name, setName] = useState("")
  const [text, setText] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="my-28">
        <section className="flex justify-between items-start pl:flex-row flex-col pl:gap-20 gap-10 pl:mx-10 mx-2 pl:my-32 my-10 pb-8 border-b">
            <div className="pl:w-1/2 w-full">
                <img src={taxiHomePageImg} alt="image" className="rounded-md" />
            </div>
            <div className="flex items-start justify-start pl:gap-2 gap-4 flex-col pl:w-1/2 w-full">
              <p className="text-green-500 text-[20px]">Taxi Xizmatlari</p>
              <h2 className="pl:text-4xl nt:text-5xl km:text-6xl text-3xl font-bold nt:tracking-2 leading-10 font-titleFont pl:mb-7">Biz bilan barcha <br className="pl:block hidden"/><span className="text-orange-500">Sayohatlar</span> va <span className="text-orange-500">Manzillar</span> <br className="pl:block hidden"/>Tomon Boring</h2>
              <Button name={"Batafsil"} link={"/about"}/>
            </div>
        </section>

        <section className="flex justify-between items-start pl:flex-row flex-col pl:gap-20 gap-10 pl:mx-20 mx-2 pl:my-32 my-10 pb-8 border-b">
            <div className="flex items-start justify-start pl:gap-2 gap-4 flex-col pl:w-1/2 w-full">
              <p className="text-green-500 text-[22px]">Qulay Taxi</p>
              <h2 className="pl:text-3xl nt:text-4xl km:text-5xl text-2xl font-bold pl:leading-10 font-titleFont">Koplab Sayohatlarni <br />Yanada  <span className="text-orange-500">Qulayroq</span> qilish</h2>
              <p className="nt:w-2/3 w-full text-justify">
                Biz transport asosiy zarurat ekanligiga ishonamiz. Saylov uchastkalariga, sog'liqni saqlash muassasalariga, oziq-ovqat do'konlariga yoki buvisining uyiga tashrif buyurish. Bularning barchasi qulay, ishonchli transportni talab qiladi. Shuning uchun biz har bir ehtiyojmandga hamyonbop, ishonchli avtomobillarni taklif qilish ustida ishlamoqdamiz. Ularning daromadi, pochta indeksi yoki pochta indeksidan qat'i nazar.
              </p>
              <Button name={"Hozir Bog'lanish"} link={"/contact"}/>
            </div>
            <div className="pl:w-1/2 w-full">
                <img src={taxiComfortImgDamas} alt="image" className="rounded-[20px]" />
            </div>
        </section>

        <section className="pl:mx-6 nt:mx-16 mx-2 pl:my-32 my-10 pb-8 border-b">
          <h2 className="text-center text-5xl font-bold text-blue-950">Bizning xizmatlarimiz</h2>
          <div className="flex justify-start items-start flex-wrap gap-4 mt-8">
            {taxiService.map((item, ind) => (
              <div className="flex flex-col km:w-[24%] nt:w-[30%] xs:w-[46%] w-full relative  my-5 border px-2 duration-300" onClick={() => setName(ind)}>
                <div className="w-full py-2" onClick={() => setText(prev => !prev)}>
                  <img src={item.img} alt="image" className="rounded-[8px] max-xs:h-[54vh] max-pl:h-[60vh] h-[200px] w-full"/>
                </div>
                <div className="px-2 py-2 text-center">
                  <div className="flex justify-between border-t items-center cursor-pointer">
                    <h3 className="text-2xl font-titleFont font-bold capitalize">{item.title}</h3>
                    <p className="text-base my-2">{item.description}</p>
                  </div>
                  {name === ind && text === true && (
                    <div className="absolute p-2 bg-white z-10 shadow-lg w-full left-0">
                      <p className="text-center mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, impedit. Totam in odit voluptas voluptates qui, voluptatem provident cumque error esse delectus cum!</p>
                       <Button name={"Tanlash"} link={`/uzun/taxi/${item.type}`}/>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="flex justify-between items-start pl:flex-row flex-col pl:gap-20 gap-10 pl:mx-20 mx-2 pl:my-32 my-10 pb-8 border-b">
            <div className="pl:w-1/2 w-full">
                <img src={"https://car24.uz/wp-content/uploads/2024/01/4c78fd8c-654e-41b8-9c1a-5868d6af06c34-1.jpg"} alt="image" className="rounded-[20px]" />
            </div>
            <div className="flex items-start justify-start pl:gap-2 gap-4 flex-col pl:w-1/2 w-full">
              <p className="text-green-500 text-[22px]">Tayyor Taxi</p>
              <h2 className="pl:text-3xl pl:w-2/3 nt:text-4xl km:text-5xl text-2xl font-bold pl:leading-10 font-titleFont">Talab qilingan odamlar uchun talab bo'yicha sayohatlar</h2>
              <p className="pl:w-2/3 text-justify">
                Sizning smenangiz 8 da boshlanadi. Verandada baxtli soat faqat bir soat davom etadi. Va sizning oilangiz sizning yuzingizni yana ko'rishni xohlaydi, ASAP. Biz sizni bir necha soniya ichida haydovchi bilan moslashtiramiz, sizga eng tez avtobus yo‘nalishini ko‘rsatamiz yoki sizga eng yaqin velosiped yoki skuterni topishga yordam beramiz.
              </p>
              <Button name={"Bog'lanish"} link={"/contact"}/>
            </div>
        </section>
    </div>
  )
}

export default Taxi