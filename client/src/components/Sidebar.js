import AppConfig from "../config";

const Sidebar = () => {
  return (
    <aside
      className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out -translate-x-full lg:translate-x-0 m-0 fixed z-40 inset-y-0 left-0 lg:bg-light/30 bg-light border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
      id="sidenav-main"
    >
      <div className="h-full bg-neutral-900">
        <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
          <a className="transition-colors duration-200 ease-in-out text-white text-2xl">
            {AppConfig.appName}
          </a>
          <div className="relative ml-5 group">
            <a className="lg:hidden flex">
              <span className="p-0 m-0 -mr-1 leading-none shrink-0 rounded-[.195rem] text-secondary-dark  group-hover:text-primary group-[.open]:text-primary">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="hidden border-b border-dashed lg:block border-neutral-700/70" />
        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center mr-5">
            <div className="mr-5">
              <div className="inline-block relative shrink-0 cursor-pointer rounded-xl">
                <img
                  className="w-[40px] h-[40px] shrink-0 inline-block rounded-xl"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                  alt="avatar image"
                />
              </div>
            </div>
            <div className="mr-2 ">
              <a className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium  dark:text-neutral-400/90 text-white/90 hover:text-white">
                Robert Jason
              </a>
              <span className="text-secondary-dark dark:text-muted font-medium block text-[0.85rem]">
                SEO Manager
              </span>
            </div>
          </div>
          <a className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-xl transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0">
            <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-white text-secondary-dark">
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="hidden border-b border-dashed lg:block border-neutral-700/70" />
        <div className="relative pl-3 overflow-y-scroll">
          <div className="flex flex-col w-full font-medium">
            {/* menu item */}
            <div>
              <span className="select-none flex items-center px-4 py-3 cursor-pointer my-[.4rem] rounded-xl">
                <a className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-muted hover:text-white">
                  Questions
                </a>
              </span>
            </div>
            {/* menu item */}
            <div>
              <span className="select-none flex items-center px-4 py-3 cursor-pointer my-[.4rem] rounded-xl">
                <a className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-muted hover:text-white">
                  Manage
                </a>
              </span>
            </div>
            {/* menu item */}
            <div>
              <span className="select-none flex items-center px-4 py-3 cursor-pointer my-[.4rem] rounded-xl">
                <a className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-muted hover:text-white">
                  Review
                </a>
              </span>
            </div>
            {/* menu item */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
