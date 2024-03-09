import AppConfig from "../config";

const Navbar = () => {
  return (
    <nav
      className="flex h-28 mb-5 lg:h-[96px]"
      id="navbarTop"
      navbar-scroll="true"
    >
      <div className="sm:flex items-stretch justify-between grow lg:mb-0 mb-5 py-5 px-10">
        <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
          <span className="my-0 flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
            {AppConfig.appName}
          </span>
          <span className="pt-1 text-secondary-dark text-[0.95rem] font-medium">
            See all questions
          </span>
        </div>
        <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
          <div className="relative lg:hidden flex items-center sm:ml-2 ml-auto">
            <a className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
          </div>
          <div className="relative flex items-center ml-2 lg:ml-4"></div>
          <div className="relative flex items-center ml-2 lg:ml-4">
            <a className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </a>
          </div>
          <div className="relative flex items-center ml-2 lg:ml-4">
            <a className="flex items-center justify-center w-12 h-12 text-base font-semibold leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ">
              <span className="text-[1.15rem]">6</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
