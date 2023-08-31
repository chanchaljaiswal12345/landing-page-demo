import Image from 'next/image'
import React from 'react'

const IntroSection = () => {
  return (
    <div>
      <div className="flex justify-center px-8">
        {/* <div className="place-self-center animate__animated animate__fadeInUp animate__delay-0.5s"> */}
        <div className="place-self-center animate__animated animate__fadeInLeft animate__delay-0.5s">
          <p className='text-custom-primary font-custom' >CREATIVE MIND, CREATIVE WORKS.</p>
          <h1 className="mt-6  max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl font-custom dark:text-white">We Are Digital Agency</h1>
          <button
            type="button"
            className=" font-custom inline-block rounded border-2 border-custom-primary px-6 pb-[6px] pt-2 text-sm font-bold-10 uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>
            GETTING STARTED
          </button>
        </div>
        <div className="hidden  lg:flex">
          <Image width={900} height={500} src="https://wp-themes.com/wp-content/themes/zeever/assets/img/background.webp" alt="mockup" />
        </div>
      </div>
    </div>
  )
}

export default IntroSection
