import { useParams } from "react-router-dom"
import {TaxiData} from '../../util/taxiService'
import Button from "../../ui/button"

const FilterTaxi = () => {
  const {type} = useParams()
  
  return (
    <div className="mt-36">
      <section className="">
        <h1 className="text-center font-bold font-titleFont text-green-500 text-4xl">Siz uchun barcha <span className="capitalize">{type}</span>lar</h1>
        <div className="flex justify-start items-start w-[90vw] mx-auto flex-wrap gap-8 my-8">
          {TaxiData.map((item, ind) => {
            if(item.type === type) {
              return (
                <div key={ind} className="mx-auto nt:w-[23%] pl:w-[31%] xs:w-[47%] w-full text-center border p-2 rounded-md">
                    <>
                      <div className="w-full">
                        <img src={item.img} alt={item.type} className="w-full rounded-md" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-2xl mt-2 font-titleFont text-orange-500">{item.title}</h3>
                        <p className="text-base text-justify">{item.description.slice(0, 50)}</p>
                        <Button name={"Ko'proq bilish"} link={`/uzun/taxi/${type}/${item.id}`}/>
                      </div>
                    </>
                </div>
              )
            }
          })}
        </div>
      </section>
    </div>
  )
}

export default FilterTaxi