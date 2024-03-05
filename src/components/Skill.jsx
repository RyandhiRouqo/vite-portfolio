import { IconContext } from "react-icons";
import { BiLogoJavascript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";

const Skill = () => {
  return (
    <div>
      <section className="bg-gray-700">
        <div className="py-10 object-center text-center">
          <h1 className="text-lime-500 text-3xl pb-8 font-bold">My Skills</h1>
          <div className="w-[90%] h-0.5 bg-lime-500 mx-auto"></div>
          <div className="pt-10 pb-10 flex justify-between items-center w-[90%] mx-auto">
            <IconContext.Provider value={{ color: "black", size: 100 }}>
              <BiLogoJavascript />
              <FaPython />
              <SiTailwindcss />
              <FaReact />
              <FaDocker />
              <FaGitAlt />
              <IoLogoCss3 />
              <FaHtml5 />
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
