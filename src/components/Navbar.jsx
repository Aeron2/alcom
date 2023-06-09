import { ggsipu_logo, alcom_logo } from "./images";
function Navbar() {
  return (
    <div className="hel z-50 px-8  py-2 border-b-2  border-slate-300 shadow-xl rounded-b-3xl fixed top-0  bg-white w-screen ">
      <div>
        {/* alcom logo */}
        <img src={alcom_logo} alt="alcom logo" className="h-20 cursor-pointer" />
      </div>
      <div className="ml-5">
        {/* linkds */}
        <ul className="hel space-x-9 text-lg text-[#3e7fa6] ">
          <li className="nav-links ">About Us</li>
          <li className="nav-links ">Our Team</li>
          <li className="nav-links ">Our Work</li>
          <li className="nav-links ">Our Events</li>
          <li className="nav-links ">Connect With Us</li>
        </ul>
      </div>
      <div className="ml-auto">
        {/* ggsipu logo */}
        <img src={ggsipu_logo} alt="ggsipu logo" className="h-20 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
