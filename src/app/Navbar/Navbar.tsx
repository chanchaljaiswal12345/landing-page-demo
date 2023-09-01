import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
      <nav className=" border-gray-200 dark:bg-black-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <span className="self-center underline font-custom decoration-solid text-4xl font-semibold whitespace-nowrap dark:text-white">
              Zeever
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul className="font-custom animate__animated animate__fadeInLeft animate__delay-0.5s font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
                
              <li>
                <Link href="/home">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/services">SERVICES</Link>
              </li>
              <li>
                <Link href="/pricing">WORKS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
