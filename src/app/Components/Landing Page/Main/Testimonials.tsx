import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div>
      <section id="TestimonialsId">
      {/* testimonial part */}
      <div className="flex justify-center  p-4 bg-neutral-900">
        <div className="flex flex-col justify-center items-center text-center">
          {/* <div className="text-white text-3xl md:text-5xl font-custom  my-2">Tesimonials.</div> */}
          <span className=" decoration-solid text-6xl font-semibold whitespace-nowrap font-custom dark:text-white animate__animated animate__fadeInLeft animate__delay-4s">
            Testimonials.
          </span>
          <div className="font-custom text-custom-primary ">
            FEEDBACK FROM OUR CLIENTS
          </div>
          <div className=" my-2 flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div>
              <div className="flex flex-col  justify-center items-center ">
                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-black ">
                  <div className="flex flex-col md:flex-row items-center justify-center   ">
                    <div className="  items-center justify-center flex py-2">
                      <div className="flex flex-col   items-center justify-center text-center">
                        <div>
                          <RiDoubleQuotesR />
                        </div>
                        <div className="text-stone-200  m-2 px-8 text-xl">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque consequat bibendum turpis sit amet
                          pretium. Nunc ut dui ornare, vulputate augue sed,
                          varius velit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  items-center justify-center">
                  <img
                    src="https://source.unsplash.com/100x100/?man,boy"
                    alt=""
                    className="rounded-full h-16 w-16"
                  />
                  <div className="text-white text-sm font-medium">
                    John Doe, Designer
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col  justify-center items-center ">
                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-black">
                  <div className="flex flex-col md:flex-row items-center justify-center   ">
                    <div className="  items-center justify-center flex py-2">
                      <div className="flex flex-col  items-center justify-center text-center">
                        <div>
                          <RiDoubleQuotesR />
                        </div>
                        <div className="text-stone-200  m-2 px-8 text-xl">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque consequat bibendum turpis sit amet
                          pretium. Nunc ut dui ornare, vulputate augue sed,
                          varius velit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  items-center justify-center">
                  <img
                    src="https://source.unsplash.com/100x100/?man,boy"
                    alt=""
                    className="rounded-full h-16 w-16"
                  />
                  <div className="text-white text-sm font-medium">
                    Jennifer Doe, Marketing
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col  justify-center items-center ">
                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-black ">
                  <div className="flex flex-col md:flex-row items-center justify-center   ">
                    <div className="  items-center justify-center flex py-2">
                      <div className="flex flex-col  items-center justify-center text-center">
                        <div>
                          <RiDoubleQuotesR />
                        </div>
                        <div className="text-stone-200  m-2 px-8 text-xl">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque consequat bibendum turpis sit amet
                          pretium. Nunc ut dui ornare, vulputate augue sed,
                          varius velit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  items-center justify-center">
                  <img
                    src="https://source.unsplash.com/100x100/?girl"
                    alt=""
                    className="rounded-full h-16 w-16"
                  />
                  <div className="text-white text-sm font-medium">
                    Claudia Doe, Consultant
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col  justify-center items-center ">
                <div className="overflow-hidden  m-4 flex flex-col justify-center   bg-black">
                  <div className="flex flex-col md:flex-row items-center justify-center   ">
                    <div className="  items-center justify-center flex py-2">
                      <div className="flex flex-col  items-center justify-center text-center">
                        <div>
                          <RiDoubleQuotesR />
                        </div>
                        <div className="text-stone-200  m-2 px-8 text-xl">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque consequat bibendum turpis sit amet
                          pretium. Nunc ut dui ornare, vulputate augue sed,
                          varius velit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  items-center justify-center">
                  <img
                    src="https://source.unsplash.com/100x100/?woman"
                    alt=""
                    className="rounded-full h-16 w-16"
                  />
                  <div className="text-white text-sm font-medium">
                    Steven Doe, Programmer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Testimonials;
