const Navbar = () => {
  return (
    <>
      <div className="absolute bg-black inset-0 w-full mx-auto min-h-14"></div>
      <nav className="sticky inset-0 z-50 bg-black/10 backdrop-blur-lg flex justify-between items-center w-full mx-auto min-h-14">
        <div className="ml-10">
          <p className="font-bold text-rose-600 font-sans">ROUQO</p>
        </div>
        <div className="mr-10">
          <ul className="flex items-center gap-[4vw] font-semibold">
            <li>
              <a className="text-white hover:text-blue-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-blue-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-blue-500" href="#">
                Skill
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
