import Button from '../ui/button'
import { contactInfo } from '../util/constants'

const Contact = () => {
  return (
    <div>
       <section className="mt-32">

          <div className="flex justify-center">
              <div className="text-center md:max-w-xl lg:max-w-3xl">
                  <h2 className="mb-12 px-6 text-3xl font-bold font-titleFont text-orange-500">
                      Contact us
                  </h2>
              </div>
          </div>

          <div className="flex justify-center max-pl:flex-col gap-8">

              <form className="mb-12 pl:w-1/2 max-pl:order-1 w-full mx-5 pr-8">

                  <div className="mb-3 w-full">
                      <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                              Name
                      </label>
                      <input type="text" className="px-2 py-2 border w-full outline-none rounded-md focus:shadow-green-200 focus:shadow-md" id="exampleInput90" placeholder="Name" />
                  </div>

                  <div class="mb-3 w-full">
                      <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                              Email
                      </label>
                      <input type="email" className=" focus:shadow-green-200 focus:shadow-md px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                              placeholder="Enter your email address" />
                  </div>

                  <div className="mb-3 w-full">
                      <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                              Message
                      </label>
                      <textarea rows={6} className="focus:shadow-green-200 focus:shadow-md px-2 py-2 border rounded-[5px] w-full outline-none"></textarea>
                  </div>
                  <Button name={"Yuborish"} link={"/"}/>
              </form>

              <div className="pl:w-1/2 w-full my-8">
                  <div className="flex pl:flex-wrap max-pl:flex-col">
                      {contactInfo.map(item => (
                        <div className="mb-12 w-1/2">
                          <div className="flex items-start">
                              <div>
                                  <div className="p-4 text-teal-700">
                                      {item.icon}
                                  </div>
                              </div>
                              <div className="ml-6">
                                  <p className="mb-2 font-bold">
                                      {item.title}
                                  </p>
                                  <p className="text-neutral-500 ">
                                      {item.email}
                                  </p>
                                  <p className="text-neutral-500 ">
                                      {item.number}
                                  </p>
                              </div>
                          </div>
                      </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Contact