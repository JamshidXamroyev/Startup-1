import Button from "../ui/button"
import { aboutStatistics, aboutlogo } from "../util/constants"

const About = () => {
  return (
    <div className="my-28 pl:mx-10 mx-5">
        <p className="text-center text-green-500 cursor-default text-xl mb-4">About Us</p>
        <h4 className="text-center font-bold text-4xl font-bodyFont">Kompaniyamiz Haqida qisqacha!</h4>
        <section className="flex justify-between items-start max-pl:flex-col gap-10 mt-14 pl:h-[44vh]">
            <div className="flex justify-center items-center pl:w-1/2 w-full pl:h-full h-[40vh]">
                <img src={aboutlogo} alt="Aboutimage" className="h-full w-full rounded-lg border" />
            </div>
            <div className="flex items-start flex-col pl:w-2/3 w-full">
                <h2 className="text-orange-400 pl:text-3xl text-4xl font-titleFont mb-3 ">Kompaniya tarixi</h2>
                <p className=" text-[18px] mb-4 pl:w-3/4 w-full max-pl:text-justify">Lorem Lore Veniam deleniti ea adipisci distinctio magnam est iste. Corporis, dolorum. Cumque odio expedita id eaque ipsam. Perspiciatis dolores odit adipisci in ratione molestias. ipsum dolor, sit amet consectetur adipisicing elit. Ipsa harum quas id natus, ipsam commodi? Quod aliquid incidunt harum totam delectus, suscipit architecto!</p>
                <Button name={"Bog'lanish"} link={'/contact'}/>
            </div>
        </section>
        <section className="flex justify-around items-center my-20 max-pl:flex-col max-pl:gap-6">
            {aboutStatistics.map(item => (
                <div key={item.number} className="pl:w-[15vw] w-[90vw] py-4 border flex justify-center items-center flex-col gap-3 rounded-md">
                    <h2 className="pl:text-4xl text-2xl text-green-400">{item.icon}</h2>
                    <div className="flex items-center gap-1">
                        <p className="text-2xl font-bold">{item.number}</p>
                        <h3 className="tracking-wide text-orange-500 capitalize text-2xl font-bold font-titleFont">{item.title}</h3>
                    </div>
                </div>
            ))}
        </section>
    </div>
  )
}

export default About