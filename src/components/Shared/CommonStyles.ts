export const commonStyles = {
  container: "relative bg-gradient-to-b from-green-50 to-green-100",
  header: "absolute inset-x-0 top-0 z-10 w-full",
  headerInner: "px-4 mx-auto sm:px-6 lg:px-8",
  headerContent: "flex items-center justify-between h-16 lg:h-20",
  logo: "w-auto h-8",
  navButton:
    "inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800",
  navMenu: "hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10",
  navLink: "text-base text-black transition-all duration-200 hover:text-opacity-80",
  ctaButton:
    "bg-green-600 hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-white font-semibold text-black border-2 border-black hover:bg-green-700 hover:text-white transition-all duration-200 focus:bg-green-700 focus:text-white",
  section: "overflow-hidden",
  contentContainer: "flex flex-col lg:flex-row lg:items-center lg:max-h-[900px] p-2",
  textContainer: "flex items-center justify-center w-full lg:order-2 lg:w-7/12",
  textContent: "px-4 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14",
  heading: "text-4xl font-bold text-black sm:text-6xl xl:text-7xl",
  paragraph: "mt-4 text-base text-black sm:text-xl",
  button:
    "inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-4 hover:bg-green-400 focus:bg-green-400",
  appLinks: "mt-8 border-t-2 border-black lg:mt-auto sm:mt-14",
  appLinkContainer: "pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14",
  appLinkText: "text-base font-semibold text-black",
  appLinkIcons: "flex items-center mt-5 space-x-5 sm:mt-0",
  appLinkIcon: "block transition-all duration-200 hover:opacity-80 focus:opacity-80",
  appIcon: "w-auto rounded h-14 sm:h-16",
  imageContainer: "relative w-full overflow-hidden lg:w-5/12 lg:order-1",
  image: "w-full",
};
