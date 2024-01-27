const FLOWBITE_THEME = {
  navbar: {
    root: {
      base: "bg-french-pass-50 dark:bg-cello-800 px-2 py-3 sm:px-3 fixed top-0 inset-x-0 shadow-lg border-b border-[#e4e4e7] dark:border-[#27272a]",
    },
    collapse: {
      base: "w-full lg:block lg:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-5 md:text-sm md:font-medium",
    },
    link: {
      base: "font-['JosefinSans'] text-cello-900 dark:text-french-pass-200 font-semibold text-[1.3rem] rounded-full px-5 pt-3 pb-2 inline-block transition duration-300 hover:scale-[1.1] hover:bg-cello-900",
      active: {
        on: "",
        off: "",
      },
    },
    brand: {
      base: "flex items-center font-['JosefinSans'] pt-1 text-cello-900 dark:text-french-pass-200",
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-cello-900 dark:text-french-pass-200 lg:hidden",
    },
  },
  footer: {
    root: {
      base: "font-['JosefinSans'] w-full bg-cello-400 dark:bg-[#283246] shadow md:flex md:items-center md:justify-between",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-[2.2rem] font-semibold !text-[#e9ffb2]",
    },
  },
};

export default FLOWBITE_THEME;
