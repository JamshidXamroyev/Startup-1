import shoes from '../../assets/imgs/p2393877-removebg-preview.png'
import osh from '../../assets/imgs/osh-in-the-house-removebg-preview.png'
import chips from '../../assets/imgs/ok-chips-ok-cheep-chips-sweet-corn-flavored-corn-chips-29758235836503-removebg-preview.png'
import phone from '../../assets/imgs/images-removebg-preview.png'
import AboutDostafka from './About-dostafka'
import AllProduct from './allProduct'

const Dostavka = () => {
  return (
      <>
          <section className="bg-orange-500 py-32 pl:h-[100vh] h-[100vh] flex items-center">
            <div className="pl:w-[70vw] w-full mx-auto text-center">
              <h2 className="text-white text-4xl font-titleFont font-bold mb-7">Istalgan narsangizga uydan turib <br className="pl:block hidden"/> buyurtma bering</h2>
              <form className='relative pl:w-1/2 w-[90%] mx-auto'>
                <i className="fa-solid fa-location-dot absolute left-1 top-3 text-[20px] text-gray-700"></i>
                <input type="text" placeholder='Location kiriting' className='w-full py-2 px-6 rounded-md outline-none focus:border-2 border-red-800'/>
                <button className="py-1 rounded-sm z-[12] px-8 home__btn border-none text-white font-bold absolute right-1 top-1">
                  <span className="z-10">Yuborish</span>
                </button>
              </form>
              </div>
              <img src={shoes} alt="shoes"  className='absolute pl:w-[190px] w-[80px] top-[10%] right-[10%]'/>
              <img src={osh} alt="osh" className='absolute pl:w-[210px] w-[100px] left-[7%] bottom-[23%]' />
              <img src={phone} alt="telefon"  className='absolute pl:w-[120px] w-[110px] left-[27%] top-[14%] rotate-12'/>
              <img src={chips} alt="chips"  className='absolute pl:w-[150px] w-[70px] right-[20%] bottom-[26%] -rotate-[23deg]'/>
          </section>
          <AboutDostafka />
          <AllProduct />
      </>
  )
}

export default Dostavka