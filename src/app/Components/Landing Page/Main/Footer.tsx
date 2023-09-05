import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* <!-- component --> */}
<footer className="bg-black from-gray-100 via-[#bce1ff] to-gray-100">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 animate__animated animate__fadeInUp animate__delay-4s">
      <div>
      {/* <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" /> */}
      <a href="/" className="flex items-center">
            <span className="self-center underline font-custom decoration-solid text-4xl font-semibold whitespace-nowrap dark:text-white">
              Zeever
            </span>
          </a>
        <p className="max-w-xs mt-4 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInUp animate__delay-5s">
        <div>
          <p className="title-font text-lg font-custom text-white mb-3">
            Services
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
            <a className="hover:opacity-75" >UI Design </a>
            <a className="hover:opacity-75" > Digital Strategy </a>
            <a className="hover:opacity-75"> Social Media </a>
            <a className="hover:opacity-75" > Content Writing </a>
          </nav>
        </div>
        <div>
          <p className="title-font text-lg font-custom text-white mb-3">
            Quick Links
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
            <a className="hover:opacity-75" > Home </a>
            <a className="hover:opacity-75" > About Us </a>
            <a className="hover:opacity-75" > Services</a>
            <a className="hover:opacity-75" > Contact</a>
          </nav>
        </div>
        <div>
          <p className="title-font text-lg font-custom text-white mb-3">
            Contact
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
            <a className="hover:opacity-75" > Jl. Sunset Road No.815 Kuta, Badung, Bali – 80361 </a>
            <a className="hover:opacity-75"> (021) 123 – 4567 </a>
            <a className="hover:opacity-75"> support@domain.com </a>
          </nav>
        </div>
      
      </div>
    </div>
    <p className="mt-8 text-xs text-gray-800">
      © 2022 Comany Name
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer
