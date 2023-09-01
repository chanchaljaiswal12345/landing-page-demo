import React from "react";

const LatestNews = () => {
  return (
    <div>
      <div className="flex justify-center  p-4 bg-black-900">
        <div className="flex flex-col justify-center items-center text-center">
          {/* <div className="text-white text-5xl md:text-5xl font-custom  my-2">
            Latest News
          </div> */}
           <span className=" decoration-solid text-6xl font-semibold whitespace-nowrap font-custom dark:text-white animate__animated animate__fadeInLeft animate__delay-8s">
         Latest News
          </span>
          <div className="font-custom text-custom-primary ">
          CHECK OUT SOME OF OUR NEWS
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                <div className="sm:w-1/3 mb-10 px-4 animate__animated animate__fadeInUp animate__delay-4s">
                  <h2 className="title-font text-2xl font-custom text-white underline mt-6 mb-3">
                    Worth A Thousand Words
                  </h2>
                  <p className="leading-relaxed text-white">Boat</p>
                  <p className="leading-relaxed  font-custom text-custom-primary  underline">Read More</p>
                </div>
                <div className="sm:w-1/3 mb-10 px-4 animate__animated animate__fadeInUp animate__delay-4s">
                  <h2 className="title-font text-2xl font-custom text-white underline mt-6 mb-3">
                    Elements
                  </h2>
                  <p className="leading-relaxed text-white">
                    The purpose of this HTML is to help determine what default
                    settings are with CSS and to make sure that all possible
                    HTML Elements are included in this HTML so as to not miss
                    any possible Elements when designing a site. Heading 1
                    Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 [top]
                    Paragraph…
                  </p>
                  <p className="leading-relaxed  font-custom text-custom-primary  underline">Read More</p>
                </div>
                <div className="sm:w-1/3 mb-10 px-4 animate__animated animate__fadeInUp animate__delay-4s">
                  <h2 className="title-font text-2xl font-custom underline text-white mt-6 mb-3">
                    More Tags
                  </h2>
                  <p className="leading-relaxed text-white">
                  More of these posts need tags.
                  </p>
                  <p className="leading-relaxed  font-custom text-custom-primary  underline">Read More</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
