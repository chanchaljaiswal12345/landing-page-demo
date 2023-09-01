import React from 'react'

const About = () => {
  return (
    <div>
        {/* <!-- component --> */}
<div className="flex flex-col bg-black">
        <div className="">
            <div className="">
                {/* <div className="decoration-solid text-4xl font-semibold whitespace-nowrap font-custom dark:text-white">About</div> */}
                <span className=" decoration-solid text-6xl font-semibold whitespace-nowrap font-custom dark:text-white">
              About
            </span>
                <div className="font-custom text-custom-primary ">WE ARE BEST DIGITAL AGENCY SINCE 2008</div>
            </div>
        </div>
    <div className="flex flex-col  md:flex-row items-center gap-6">
        <div>
            <img className=" w-1/3 ml-24" src="https://wp-themes.com/wp-content/themes/zeever/assets/img/employee-meeting-work-job-working-argentina-1599048-pxhere.com.webp" alt="Featured Image 1"/>
            {/* <div className="px-3 bg-yellow-500 rounded-b-lg">
                <div className="text-white">
                    <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
                    <div className="text-lg font-light">Card subtitle with a long text</div>
                </div> */}
                {/* <div className="flex justify-between pt-8">
                    <ul className="flex flex-col gap-y-2.5">
                        <li className="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li className="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li className="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-end">
                        <a href="#" className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                    </div>
                </div> */}
            {/* </div> */}
        </div> 
        <div className="">
            <img src="https://wp-themes.com/wp-content/themes/zeever/assets/img/employee-meeting-work-job-working-argentina-1599057-pxhere.com.webp" alt="Featured Image 1" className=" w-48"/>
            <img src="https://wp-themes.com/wp-content/themes/zeever/assets/img/computer-group-building-home-internet-office-945774-pxhere.com.webp" className='w-52 object-cover'/>
            {/* <div className="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
                <div className="text-white space-y-4">
                    <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
                    <div className="text-lg font-light">Card subtitle with a long long long long long long text</div>
                </div> */}
                {/* <div className="flex justify-between pt-8">
                   <ul className="flex flex-col gap-y-2.5">
                        <li className="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li className="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li className="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-end">
                        <a href="#" className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                    </div>
                </div> */}
            {/* </div> */}
        </div> 
    </div>
</div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full overflow-hidden">
        
          <div className="p-6">
            <h1 className="title-font text-lg font-custom text-white mb-3">Who We Are</h1>
            <p className="leading-relaxed  text-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="flex items-center flex-wrap ">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full overflow-hidden">

          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-white font-custom mb-3">Our Vision</h1>
            <p className="leading-relaxed text-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="flex items-center flex-wrap">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full overflow-hidden">

          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
            <h1 className="title-font text-lg font-medium text-white mb-3">Our Mission</h1>
            <p className="leading-relaxed text-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="flex items-center flex-wrap ">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
