import React from "react";
import { BiSolidPaperPlane } from "react-icons/bi";
import { RiEarthFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";

const data = [
  {
    title: "Future Concept",
    desc: "asdadasdasdasd",
    icon: <BiSolidPaperPlane />,
  },
  {
    title: "The Big Ideas",
    desc: "asdadasdasdasd",
    icon: <RiEarthFill />,
  },
  {
    title: "Creative Solutions",
    desc: "asdadasdasdasd",
    icon: <FaLightbulb />,
  },
];

const CardSection = () => {
  return (
    <div>
      <section
      // id="AboutId"
        className="
        content-stretch  
    pt-20
    lg:pt-[120px]
    pb-10
    lg:pb-[80px]
    relative
    z-20
    overflow-hidden
    "
      >
      <div>
      <div className="flex justify-center ml-8">
            {data.map((item) => {
              return (
                <div className="font-custom w-[20rem] px-4 content-stretch">
                  <div
                    className="
                    content-stretch
                     animate__fadeInUp
                     animate__animated
                     animate__delay-2s
                        rounded border-2 
                        border-white
                        hover:border-custom-primary
                        relative
                        z-10
                        overflow-hidden
                        py-10
                        px-8
                        sm:p-12
                        lg:py-10 lg:px-6
                        xl:p-12
                        // mb-20
                        "
                  >
                    <span className="text-white font-semibold text-lg block mb-4 ">
                      {item.icon}
                    </span>
                    <span className="text-white font-semibold text-lg block mb-4 ">
                      {item.title}
                    </span>
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p
                      className="
                           text-base text-body-color
                           pb-8
                           mb-8
                           border-b border-[#F2F2F2]
                           "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      </section>
    </div>
  );
};

export default CardSection;
