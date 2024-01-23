const FLOWBITE_THEME = {
  navbar: {
    root: {
      base: "bg-[#7da279] px-2 py-3 sm:px-3 fixed top-0 inset-x-0 shadow-xl",
    },
    collapse: {
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-5 md:text-sm md:font-medium",
    },
    link: {
      base: "font-semibold text-[#e9ffb2] text-[1.25rem] rounded-full px-5 py-2 inline-block transition duration-300 hover:scale-[1.1] hover:bg-[#55854a]",
      active: {
        on: "",
        off: "",
      },
    },
    brand: {
      base: "flex items-center text-[#e9ffb2]",
    },
  },
  footer: {
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-[2.2rem] font-semibold !text-[#e9ffb2]",
    },
  },
};

export default FLOWBITE_THEME;
