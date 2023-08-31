import React from 'react'

const Works = () => {
  return (
   <div>
    <section className="text-gray-600 body-font bg-neutral-900">
  <div className="container px-5 py-24 mx-auto">
  <header className="text-left mx-auto mb-12 lg:px-20">
            {/* <h2 className="text-2xl leading-normal mb-2 font-bold text-white">Services</h2> */}
            <span className=" decoration-solid text-6xl font-semibold whitespace-nowrap font-custom dark:text-white">
              Works
            </span>
            <p className="text-custom-primary leading-relaxed font-custom font-light text-xl mx-auto  pb-2">PROJECTS WE HAVE DONE</p>
        </header>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://img.freepik.com/free-photo/music-arrangement-with-black-headphones-with-copy-space_23-2148785721.jpg?w=1060&t=st=1693307591~exp=1693308191~hmac=0664426ce6f1c526afcd96410cd9ec813fdc49900770d25307b304acd27293a4"/>
        </a>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="	https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417_960_720.jpg"/>
        </a>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="	https://cdn.pixabay.com/photo/2018/09/12/12/31/photographer-3672075_960_720.jpg"/>
        </a>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1516461240763-822a87484851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"/>
        </a>
      </div>
    </div>
  </div>
</section>
   </div>
  )
}

export default Works
