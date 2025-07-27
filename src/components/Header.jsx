const Header = () => {
  const pages = [
    { title: "Home", path: "#hero" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];
  return (
    <header className="flex bg-[var(--background)] justify-center sm:justify-between items-center w-full px-5 md:px-20 py-5 fixed z-50">
      <div className="font-semibold sm:flex hidden">amruth.dev</div>
      <nav className="flex gap-3.5 text-sm">
        {pages.map((page, index) => (
          <a
            href={page.path}
            key={`page-${index}`}
            className="relative px-4 py-2 text-black 
             transition-all duration-300 ease-in-out 
             before:absolute before:top-0 before:left-0 
             before:h-1/2 before:w-1/2 before:border-t-2 before:border-l-2 before:border-black
             before:opacity-0 before:transition-opacity before:duration-300
             after:absolute after:bottom-0 after:right-0 
             after:h-1/2 after:w-1/2 after:border-b-2 after:border-r-2 after:border-black
             after:opacity-0 after:transition-opacity after:duration-300
             hover:before:opacity-100 hover:after:opacity-100"
          >
            {page.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
